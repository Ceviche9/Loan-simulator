"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interestCalculator = void 0;

/* eslint-disable no-param-reassign */
// Para calcular o valor de cada parcela de acordo com a taxa.
const interestCalculator = (value, uf) => {
  if (uf === "MG") {
    value += value * (1 / 100);
    return value;
  }

  if (uf === "SP") {
    value += value * (0.8 / 100);
    return value;
  }

  if (uf === "RJ") {
    value += value * (0.119 / 100);
    return value;
  }

  if (uf === "ES") {
    value += value * (1.11 / 100);
    return value;
  }

  return false;
};

exports.interestCalculator = interestCalculator;