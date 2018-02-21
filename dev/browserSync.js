'use strict'

const serve = require('browser-sync')
const proxy = require('http-proxy-middleware')
const bundler = require('./parcel.config')
const path = require('path')

// browser sync settings
serve({
  port: 3000,
  open: false,
  server: {
    baseDir: path.join(__dirname, '..', 'dist')
  },
  middleware: [
    proxy('http://localhost:8080', {}),
    bundler.middleware()
  ]
})