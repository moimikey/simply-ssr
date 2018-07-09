import os from 'os'
import config, { IS_DEBUG } from './config'

let useCluster = false

if (config.cluster === 'auto' && !IS_DEBUG) {
  useCluster = os.cpus().length
} else if (config.cluster === true) {
  useCluster = os.cpus().length
} else if (typeof config.cluster === 'number' && config.cluster > 0) {
  useCluster = Math.trunc(config.cluster)
}

export default useCluster
