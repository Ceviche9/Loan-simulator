"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _LoanController = require("./app/Controller/LoanController");

/* eslint-disable comma-dangle */

/* eslint-disable quotes */
// Controllers
const loanController = new _LoanController.LoanController();
const routes = (0, _express.Router)(); // Loan

exports.routes = routes;
routes.get('/database', loanController.index);
routes.post('/loan', loanController.store);