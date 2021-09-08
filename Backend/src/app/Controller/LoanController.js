/* eslint-disable consistent-return */
/* eslint-disable no-bitwise */
import { parseISO } from 'date-fns';
import Loan from '../Models/Loan';

import { ValidaCpf } from '../../utils/Validator';
import { interestCalculator } from '../../utils/interest';

class LoanController {
  async index(req, res) {
    try {
      // Para pegar todos os emprestimos que estão armazenados no banco.
      const loans = await Loan.findAll();

      if (!loans) {
        return res.status(400).json({});
      }

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
      const amount = value / months;
      const amountCal = interestCalculator(amount, uf).toFixed(2);

      // Armazenando os dados no banco.
      const createLoan = await Loan.create({ cpf, uf, birth_date: parsedDate, value, months, installment_amount: amountCal });

      return res.json({ createLoan });
    } catch (e) {
      console.log(e);
      return res.json({ message: "Loan Controller Error" });
    }
  }
}

export { LoanController };
