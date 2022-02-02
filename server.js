'use strict';
//@ts-check

const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const server = express();

server.use('/static', express.static(path.resolve('static')))

server.listen(8080);
