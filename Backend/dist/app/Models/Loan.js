'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Model = _sequelize2.default.Model,
    Sequelize = _sequelize2.default.Sequelize;

var Loan = function (_Model) {
  _inherits(Loan, _Model);

  function Loan() {
    _classCallCheck(this, Loan);

    return _possibleConstructorReturn(this, (Loan.__proto__ || Object.getPrototypeOf(Loan)).apply(this, arguments));
  }

  _createClass(Loan, null, [{
    key: 'init',
    value: function init(sequelize) {
      _get(Loan.__proto__ || Object.getPrototypeOf(Loan), 'init', this).call(this, {
        cpf: Sequelize.STRING,
        uf: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        value: Sequelize.STRING,
        months: Sequelize.INTEGER,
        installment_amount: Sequelize.FLOAT

      }, {
        sequelize: sequelize
      });

      return this;
    }
  }]);

  return Loan;
}(Model);

exports.default = Loan;