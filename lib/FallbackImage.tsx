import React, { Component } from 'react'
import filterInvalidDOMProps from 'filter-invalid-dom-props'

import { Props, State } from 'interfaces/util/FallbackImage'

export default class ReactImageFallback extends Component<Props, State> {
  private isLoaded: boolean

  // My Webstorm kept erroring even when this is true
  // @ts-ignore
  private displayImage: Window.Image

  constructor(props) {
    super(props)

    this.state = {
      imageSource: '',
    }

    this.setDisplayImage = this.setDisplayImage.bind(this)
    this.handleInitialTimeout = this.handleInitialTimeout.bind(this)

    this.isLoaded = false
  }

  componentDidMount() {
    this.handleInitialTimeout()

    this.displayImage = new window.Image()

    this.setDisplayImage({
      image: this.props.src,
      fallbacks: this.props.fallbackImage,
    })
  }

  componentDidUpdate(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.isLoaded = false
      if (nextProps.initialImage) {
        this.handleInitialTimeout()
      }

      this.setDisplayImage({
        image: nextProps.src,
        fallbacks: nextProps.fallbackImage,
      })
    }
  }

  componentWillUnmount() {
    if (this.displayImage) {
      this.displayImage.onerror = null
      this.displayImage.onload = null
      this.displayImage = null
    }
  }

  setDisplayImage({ image, fallbacks }) {
    const imagesArray = [image].concat(fallbacks).filter((fallback) => !!fallback)

    this.displayImage.onerror = () => {
      if (imagesArray.length > 2 && typeof imagesArray[1] === 'string') {
        const updatedFallbacks = imagesArray.slice(2)
        this.setDisplayImage({ image: imagesArray[1], fallbacks: updatedFallbacks })
        return
      }

      this.isLoaded = true

      this.setState(
        {
          imageSource: imagesArray[1] || null,
        },
        () => {
          if (this.props.onError) {
            this.props.onError(this.props.src)
          }
        },
      )
    }

    this.displayImage.onload = () => {
      this.isLoaded = true

      this.setState(
        {
          imageSource: imagesArray[0],
        },
        () => {
          if (this.props.onLoad) {
            this.props.onLoad(imagesArray[0])
          }
        },
      )
    }

    if (typeof imagesArray[0] === 'string') {
      // TODO: fix soontm ~ Ray
      // eslint-disable-next-line prefer-destructuring
      this.displayImage.src = imagesArray[0]
    } else {
      this.setState(
        {
          imageSource: imagesArray[0],
        },
        () => {
          if (this.props.onLoad) {
            this.props.onLoad(imagesArray[0])
          }
        },
      )
    }
  }

  handleInitialTimeout() {
    if (this.props.initialTimeout && this.props.initialTimeout > 0) {
      setTimeout(() => {
        if (!this.isLoaded) {
          this.setState({
            imageSource: this.props.initialImage,
          })
        }
      }, this.props.initialTimeout)
    } else {
      this.setState({
        imageSource: this.props.initialImage,
      })
    }
  }

  render() {
    return (
      <img
        {...filterInvalidDOMProps(this.props)}
        src={this.state.imageSource}
        alt={this.props.alt}
      />
    )
  }
}
