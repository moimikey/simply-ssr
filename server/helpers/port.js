export const DEFAULT_PORT = 8000
export const SERVER_PORT = normalizePort(process.env.PORT || DEFAULT_PORT)
export function normalizePort (val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) return val
  if (port >= 0) return port
  return false
}
