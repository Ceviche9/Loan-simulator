/* eslint-disable consistent-return */
/* eslint-disable no-bitwise */
import { parseISO } from 'date-fns';
import Loan from '../Models/Loan';

import { ValidaCpf } from '../../utils/Validator';
import { interestCalculator } from '../../utils/interest';

class LoanController {
  async index(req, res) {
    try {
      const loans = await Loan.findAll();

      return res.status(400).json({ loans });
    } catch (e) {
      console.log(e);
      res.json({ error: e.message });
    }
  }

  async store(req, res) {
    try {
      const { cpf, uf, birth_date, value, months } = req.body;

      // Para mudar a data.
      const parsedDate = parseISO(birth_date);

      // Verificando se o CPF é válido.
      const isValid = ValidaCpf(cpf);

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
      const amount = value / months;
      const amountCal = interestCalculator(amount, uf).toFixed(2);

      const createLoan = await Loan.create({ cpf, uf, birth_date: parsedDate, value, months, installment_amount: amountCal });

      return res.json({ createLoan });
    } catch (e) {
      console.log(e);
      return res.json({ message: "Loan Controller Error" });
    }
  }
}

export { LoanController };

/*
There are two ways this can be handled:

Temporary Front-End solution so you can test if your API integration is working:
Click on window -> type run and hit enter -> in the command window copy:

chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
*/
