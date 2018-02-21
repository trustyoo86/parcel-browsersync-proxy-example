/**
 * server example
 * 
 * @author kern
 * @since 2018.02.21 - draft
 */
'use strict'

const express = require('express');
const bundler = require('./dev/parcel.config')
const path = require('path')

// node env mode variable
const isProd = process.env.NODE_ENV === 'production'

// express app
const app = express();
// app use bundler middleware if production mode
if (isProd) {
  app.use(bundler.middleware())
}
// setting static dist assets
app.use(express.static(path.join(__dirname, 'dist')))

// initialize router
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// api testing
app.get('/api', (req, res) => {
  res.status(200).json({
    'test': 'ok'
  })
})

// listen 8080 port
app.listen(8080, () => {
  console.log('application server listen port 8080')
})