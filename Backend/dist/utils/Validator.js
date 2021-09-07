'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-param-reassign */

// Funções responsáveis para fazer a validação do cpf

var ValidaCpf = exports.ValidaCpf = function ValidaCpf(cpf) {
  // Para substituir os simbolos por espaços vazios.
  var noSpaceCpf = cpf.replace(/\D+/g, '');
  var cpfValidator = CpfCheck(noSpaceCpf);

  if (!cpfValidator) {
    return false;
  }

  return true;
};

var CpfCheck = function CpfCheck(noSpaceCpf) {
  if (typeof noSpaceCpf === 'undefined') return false;
  if (noSpaceCpf.length !== 11) return false;
  if (noSpaceCpf[0].repeat(noSpaceCpf.length) === noSpaceCpf) return false;

  // Para pegar os 9 primeiros dígitos do cpf
  var cpfParcial = noSpaceCpf.slice(0, -2);
  var FirstDigit = criaDigito(cpfParcial);
  var SecondDigit = criaDigito(cpfParcial + FirstDigit);

  var newCpf = cpfParcial + FirstDigit + SecondDigit;
  return newCpf === noSpaceCpf;
};

var criaDigito = function criaDigito(ParcialCPF) {
  // criando um array com os 9 dígitos->
  var cpfArray = Array.from(ParcialCPF);
  // criando o contador para usar no reduce()
  var counter = cpfArray.length + 1;

  // Fazendo a soma ->
  var total = cpfArray.reduce(function (ac, value) {
    ac += counter * Number(value);
    counter--;
    return ac;
  }, 0);

  // Para encontrar o dígito->
  var digit = 11 - total % 11;

  // "Se o dígito for maior que 9 retorna 0, se não retorna o dígito"
  return digit > 9 ? '0' : String(digit);
};