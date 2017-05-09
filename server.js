'use strict';


const express = require('express');
const app = express();

const page = require('page');
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/'));
app.listen(3000);
