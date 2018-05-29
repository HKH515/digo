const https = require("https");
const fs = require("fs");
const express = require("express");
const app = express();

const options = {
    cert: fs.readFileSync("/etc/letsencrypt/live/linuxswag.com/fullchain.pem"),
    key: fs.readFileSync("/etc/letsencrypt/live/linuxswag.com/privkey.pem")
};

app.get('/', (req, res) => res.send("Mofo what you doing on my turf, this is my corner homie"));

https.createServer(options, app).listen(443);

// Redirect from http port 80 to https
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);
