"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoanController = void 0;

var _dateFns = require("date-fns");

var _Loan = _interopRequireDefault(require("../Models/Loan"));

var _Validator = require("../../utils/Validator");

var _interest = require("../../utils/interest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable consistent-return */

/* eslint-disable no-bitwise */
class LoanController {
  async index(req, res) {
    try {
      // Para pegar todos os emprestimos que estão armazenados no banco.
      const loans = await _Loan.default.findAll();
      return res.status(400).json({
        loans
      });
    } catch (e) {
      console.log(e);
      res.json({
        error: e.message
      });
    }
  }

  async store(req, res) {
    try {
      const {
        cpf,
        uf,
        birth_date,
        value,
        months
      } = req.body; // Para mudar a data.

      const parsedDate = (0, _dateFns.parseISO)(birth_date); // Verificando se o CPF é válido.

      const isValid = (0, _Validator.ValidaCpf)(cpf); // Caso o cpf não seja válido, é retornado um erro.

      if (!isValid) {
        return res.status(401).json({
          message: "invalid CPF"
        });
      } // prazo de pagamento


      if (months > 360) {
        return res.json({
          message: "The maximum payment term is 30 years."
        });
      } // Valor mínimo de empréstimo


      if (value < 50000) {
        return res.json({
          message: "The minimum loan amount is R$50,000.00."
        });
      } // Verificando qual uf foi enviando


      if (uf !== "MG" | "SP" | "RJ" | "ES") {
        return res.json({
          message: "Invalid UF"
        });
      } // Criando o valor das parcelas


      const amount = value / months;
      const amountCal = (0, _interest.interestCalculator)(amount, uf).toFixed(2); // Armazenando os dados no banco.

      const createLoan = await _Loan.default.create({
        cpf,
        uf,
        birth_date: parsedDate,
        value,
        months,
        installment_amount: amountCal
      });
      return res.json({
        createLoan
      });
    } catch (e) {
      console.log(e);
      return res.json({
        message: "Loan Controller Error"
      });
    }
  }

}

exports.LoanController = LoanController;