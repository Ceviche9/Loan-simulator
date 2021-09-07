"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require("../config/database");

var _database2 = _interopRequireDefault(_database);

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

      this.connection = new _sequelize2.default(_database2.default);

      models.map(function (model) {
        return model.init(_this.connection);
      });
    }
  }]);

  return Database;
}();

exports.default = new Database();