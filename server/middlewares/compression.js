import compression from 'compression'
import config from '../helpers/config'
import precompressedAssets from './precompressed-assets'

let precompressedBrotliEnabled = config.compression.precompressedAssets.brotli
let precompressedGzipEnabled = config.compression.precompressedAssets.gzip

export default function initCompression (app, publicFolder) {
  if (precompressedBrotliEnabled || precompressedGzipEnabled) {
    app.use(precompressedAssets(publicFolder))
  }

  app.use(compression({
    threshold: config.compression.threshold
  }))
}
