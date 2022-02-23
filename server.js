
'use strict'

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
var os = require("os");
var hostname = os.hostname();

app.get('/', (req,res) => {
    res.send('Hello , Welcome to session </br> '+hostname);
});

app.listen(PORT,HOST);
