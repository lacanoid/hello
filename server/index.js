const Path = require('path')
const express = require('express')
const Parcel = require('parcel-bundler')

const parceloptions = { 
    outDir: "../dist"
}
const parcelentry = Path.resolve(__dirname, "../client/index.html")
const bundler = new Parcel(parcelentry, parceloptions)
const staticdir = Path.resolve(__dirname, "../static")
const builddir = Path.resolve(__dirname, "../dist")

const app = express()
const port = process.env.PORT || 3000

app.use('/static',express.static(staticdir))
app.use('/api',require('./api.js'))

if(process.env.NODE_ENV==="production") app.use('/',express.static(builddir))
else app.use(bundler.middleware());


app.listen(port, ()=>{ console.log('Listening on port ',port)})
