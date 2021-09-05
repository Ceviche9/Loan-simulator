import Sequelize from "sequelize";

import databaseConfig from "../config/database";

import Loan from "../app/Models/Loan";

const models = [Loan];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
