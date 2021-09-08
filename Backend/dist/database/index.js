"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Loan = _interopRequireDefault(require("../app/Models/Loan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const models = [_Loan.default];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.database = process.env.DATABASE_URL || 'postgres://ghzxinjzpphaui:218b80d1047e3827eed995aefeb5e09e31baf8c220b28313f1ae5de18b75bd6c@ec2-107-20-24-247.compute-1.amazonaws.com:5432/db1dicruq3hqqe';
    this.connection = new _sequelize.default(this.database, {
      dialect: 'postgres',
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
      }
    });
    models.map(model => model.init(this.connection));
  }

}

var _default = new Database();

exports.default = _default;