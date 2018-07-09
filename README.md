# 🔭 simply ssr

A simply scalable web boilerplate:

- [x] docker
- [x] node
- [x] redis
- [x] express
- [x] parcel
- [x] react w/ ssr

## Usage

### Development server

serves over `parcel`s built-in hot-reloading server

```sh
npm run dev

# go to http://localhost:1234
```

### Production server

serves a secure, production-ready express server with Docker

```sh
npm run start

# go to http://localhost:8000
```

## Client Architecture

Client-facing application is a universally rendering `react` application, featuring `react-helmet`, `react-router` and `react-router-dom`, which can be replaced. Client-side code is processed and bundled by `parcel`.

## Server Architecture

There is a choice between the default `server`, featuring the below optimizations, or `server.simple`, a simple, insecure express server.

### Security

Influenced by [mcibique/express-security](https://github.com/mcibique/express-security)

- [x] `helmet`
  - [x] `frameguard` (X-Frame-Options)
  - [x] `x-xss-protection` (X-XSS-Protection)
  - [x] `hsts` (Strict-Transport-Security)
  - [x] `ienoopen` (X-Download-Options)
  - [x] `dont-sniff-mimetype` (X-Content-Type-Options)
  - [x] `csp` w/ nonce via `node-uuid` (Content-Security-Policy)
  - [x] `hpkp` (Public-Key-Pins)
  - [x] `dns-prefetch-control` (X-DNS-Prefetch-Control)
  - [x] `referrer-policy` (Referrer-Policy)
  - [x] `expect-ct` (Expect-CT)
  - [x] `nocache` (Cache-Control/Pragma/Expires/Surrogate-Control)
  - [x] `hidePoweredBy` (X-Powered-By)

### Performance

- [x] http2 + gzip
- [x] static asset pre-compression with gzip & brotli
- [x] static asset caching
- [x] in-memory & `redis` session caching
- [x] node clustering

### Enhancements

- [x] `pug` for server-facing views
- [x] `dayjs` as a 'momentjs' replacement
- [x] logging with `morgan` and `winston`
- [x] `nodemon`, `npm-run-all`, `cross-env`
