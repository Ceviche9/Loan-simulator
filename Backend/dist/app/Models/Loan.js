"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Model,
  Sequelize
} = _sequelize.default;

class Loan extends Model {
  static init(sequelize) {
    super.init({
      cpf: Sequelize.STRING,
      uf: Sequelize.STRING,
      birth_date: Sequelize.DATE,
      value: Sequelize.STRING,
      months: Sequelize.INTEGER,
      installment_amount: Sequelize.FLOAT
    }, {
      sequelize,
      modelName: "loans"
    });
    return this;
  }

}

var _default = Loan;
exports.default = _default;