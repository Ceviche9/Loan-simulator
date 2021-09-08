"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _Loan = require("../app/Models/Loan");

var _Loan2 = _interopRequireDefault(_Loan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var models = [_Loan2.default];

var Database = function () {
  function Database() {
    _classCallCheck(this, Database);

    this.init();
  }

  _createClass(Database, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.database = process.env.DATABASE_URL || 'postgres://ghzxinjzpphaui:218b80d1047e3827eed995aefeb5e09e31baf8c220b28313f1ae5de18b75bd6c@ec2-107-20-24-247.compute-1.amazonaws.com:5432/db1dicruq3hqqe';
      this.connection = new _sequelize2.default(this.database, {
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

      models.map(function (model) {
        return model.init(_this.connection);
      });
    }
  }]);

  return Database;
}();

exports.default = new Database();