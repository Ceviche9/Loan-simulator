'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _express = require('express');

var _LoanController = require('./app/Controller/LoanController');

// Controllers
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
var loanController = new _LoanController.LoanController();

var routes = (0, _express.Router)();

// Loan
routes.get('/database', loanController.index);
routes.post('/loan', loanController.store);

exports.routes = routes;