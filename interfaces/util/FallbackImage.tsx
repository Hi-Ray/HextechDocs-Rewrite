export interface Props {
  initialTimeout?: number
  initialImage: string | undefined
  src: string | undefined
  fallbackImage: string | undefined
  onError?: any
  onLoad?: any
  alt: string | undefined
  className: string | undefined
}

export interface State {
  imageSource: string | undefined
}
