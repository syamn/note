var express = require('express');
var app = express();

// Load Configuration
var config = module.exports.config = require("./config.js");

// Load Models
var models = require('./models/');
module.exports.models = models.get;
models.initialize();

console.log('OK'); return;
