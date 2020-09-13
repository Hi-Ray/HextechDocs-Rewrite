const withImages = require('next-images')
const withHtml = require('next-html')

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    })

    return config
  },
}
