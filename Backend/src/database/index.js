import Sequelize from "sequelize";

import Loan from "../app/Models/Loan";

const models = [Loan];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.database = process.env.DATABASE_URL || 'postgres://ghzxinjzpphaui:218b80d1047e3827eed995aefeb5e09e31baf8c220b28313f1ae5de18b75bd6c@ec2-107-20-24-247.compute-1.amazonaws.com:5432/db1dicruq3hqqe';
    this.connection = new Sequelize(this.database, {
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
        underscoredAll: true,
      },
    });

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
