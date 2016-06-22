/**
 * Created by apple on 16/6/20.
 */
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var path = require('path')
var express = require('express')
var app = express();
var port = '4000'

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler,{noInfo:true,publicPath:config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname+'css1')))
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html')
})
app.listen(port, function (error) {
    if(error){
        console.error(error)
    }else{
        console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.",port,port);
    }
})