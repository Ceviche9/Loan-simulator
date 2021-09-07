'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoanController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable consistent-return */
/* eslint-disable no-bitwise */


var _dateFns = require('date-fns');

var _Loan = require('../Models/Loan');

var _Loan2 = _interopRequireDefault(_Loan);

var _Validator = require('../../utils/Validator');

var _interest = require('../../utils/interest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoanController = function () {
  function LoanController() {
    _classCallCheck(this, LoanController);
  }

  _createClass(LoanController, [{
    key: 'index',
    value: async function index(req, res) {
      try {
        // Para pegar todos os emprestimos que estão armazenados no banco.
        var loans = await _Loan2.default.findAll();

        return res.status(400).json({ loans: loans });
      } catch (e) {
        console.log(e);
        res.json({ error: e.message });
      }
    }
  }, {
    key: 'store',
    value: async function store(req, res) {
      try {
        var _req$body = req.body,
            cpf = _req$body.cpf,
            uf = _req$body.uf,
            birth_date = _req$body.birth_date,
            value = _req$body.value,
            months = _req$body.months;

        // Para mudar a data.

        var parsedDate = (0, _dateFns.parseISO)(birth_date);

        // Verificando se o CPF é válido.
        var isValid = (0, _Validator.ValidaCpf)(cpf);

        // Caso o cpf não seja válido, é retornado um erro.
        if (!isValid) {
          return res.status(401).json({ message: "invalid CPF" });
        }

        // prazo de pagamento
        if (months > 360) {
          return res.json({ message: "The maximum payment term is 30 years." });
        }

        // Valor mínimo de empréstimo
        if (value < 50000) {
          return res.json({ message: "The minimum loan amount is R$50,000.00." });
        }

        // Verificando qual uf foi enviando
        if (uf !== "MG" | "SP" | "RJ" | "ES") {
          return res.json({ message: "Invalid UF" });
        }

        // Criando o valor das parcelas
        var amount = value / months;
        var amountCal = (0, _interest.interestCalculator)(amount, uf).toFixed(2);

        // Armazenando os dados no banco.
        var createLoan = await _Loan2.default.create({ cpf: cpf, uf: uf, birth_date: parsedDate, value: value, months: months, installment_amount: amountCal });

        return res.json({ createLoan: createLoan });
      } catch (e) {
        console.log(e);
        return res.json({ message: "Loan Controller Error" });
      }
    }
  }]);

  return LoanController;
}();

exports.LoanController = LoanController;