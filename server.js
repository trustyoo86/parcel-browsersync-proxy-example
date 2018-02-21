const express = require('express');
const bundler = require('./dev/parcel.config')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

// express app
const app = express();

if (isProd) {
  app.use(bundler.middleware())
}

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.get('/api', (req, res) => {
  res.status(200).json({
    'test': 'ok'
  })
})

app.listen(8080, () => {
  console.log('application server listen port 8080')
})