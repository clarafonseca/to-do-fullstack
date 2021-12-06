const express = require('express');
const cors = require('cors');
const routes = require('../../routes');
require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.json());

Object.keys(routes).forEach((key) => app.use(`/api/${key}`, routes[key]));

module.exports = app;
