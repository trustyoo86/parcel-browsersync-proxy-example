'use strict'

const Bundler = require('parcel-bundler')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

// option change using process.env.NODE_ENV
let option
if (isProd) {
  option = {
    cache: false,
    minify: true,
    sourceMaps: false,
    http: true
  }
} else {
  option = {
    cache: true,
    minify: false,
    sourceMaps: true,
    watch: true
  }
}

/**
 * parcel built-in options
 * @type {Object}
 * @property {string} outDir output dir
 * @property {string} publicUrl 
 */
const defaultOption = {
  outDir: path.join(__dirname, '..', 'dist'),
  publicUrl: '/',
  detailReport: true,
  cache: true,
  minify: true,
  sourceMaps: true,
  http: true
}

const bundleOption = Object.assign({}, defaultOption, option)

const bundler = new Bundler(path.resolve(__dirname, '..', 'src', 'index.html'), bundleOption)

module.exports = bundler