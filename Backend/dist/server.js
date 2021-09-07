"use strict";

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _routes = require("./routes");

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.use(_routes.routes);
app.use((0, _cors2.default)());

app.listen(process.env.PORT || 3333, function () {
  return console.log("Server is running");
});