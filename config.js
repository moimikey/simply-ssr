module.exports = {
  thresholds: {
    cpuLoad: 0,
    memory: 0,
    sockets: 0
  },
  server: {
    public: './dist/client/static',
    log: 'debug',
    security: {
      frameguard: {
        action: 'deny'
      }
    }
  },
  headTags: []
}
