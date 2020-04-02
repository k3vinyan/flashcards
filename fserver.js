const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

app = express();

app.use(serveStatic(__dirname + "/front-end/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log(__dirname + "/front-end/dist");
console.log('server started '+ port);