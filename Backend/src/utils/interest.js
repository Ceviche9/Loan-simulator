/* eslint-disable no-param-reassign */

// Para calcular o valor de cada parcela de acordo com a taxa.
export const interestCalculator = (value, uf) => {
  if (uf === "MG") {
    value += value * (1 / 100);
    return value;
  } if (uf === "SP") {
    value += value * (0.8 / 100);
    return value;
  } if (uf === "RJ") {
    value += value * (0.119 / 100);
    return value;
  } if (uf === "ES") {
    value += value * (1.11 / 100);
    return value;
  }

  return false;
};
