const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//Database connection
mongoose.connect('mongodb://localhost/mirror');
// Middlewares
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);
//Server
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on:', port);
//
