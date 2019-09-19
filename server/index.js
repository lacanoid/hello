const Path = require('path')
const express = require('express')
const Parcel = require('parcel-bundler')

const parceloptions = { 
    outDir: "../dist"
}
const parcelentry = Path.resolve(__dirname, "../client/index.html")
const bundler = new Parcel(parcelentry, parceloptions)
const staticdir = Path.resolve(__dirname, "../static")

const app = express()
const port = process.env.PORT || 3000

app.use('/static',express.static(staticdir))
app.use('/api',require('./api.js'))
app.use(bundler.middleware())

app.listen(port, ()=>{ console.log('Listening on port ',port)})
