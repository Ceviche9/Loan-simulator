import pkg from 'sequelize';

const { Model, Sequelize } = pkg;

class Loan extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        uf: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        value: Sequelize.STRING,
        months: Sequelize.INTEGER,
        installment_amount: Sequelize.FLOAT

      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Loan;
