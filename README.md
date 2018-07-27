# 🔭 simply ssr

A simply scalable web boilerplate:

- [x] docker
- [x] node
- [x] express
- [x] http2 (spdy)
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

serves simple web server over http2 with ssl using `spdy`

```sh
npm run start

# go to https://localhost:8000
```

The application runs only on HTTPS, so a certificate is required. If you want to just try it locally, then [generate self-signed certificate online](http://www.selfsignedcertificate.com/) for domain `localhost` and save both files into the `server/certificates/` folder. Name them `server.cert` and `server.key`.
