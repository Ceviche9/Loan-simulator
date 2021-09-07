'use strict';

'use strict';

module.exports = {
  up: async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("loans", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },

      uf: {
        type: Sequelize.STRING,
        allowNull: false
      },

      birth_date: {
        type: Sequelize.DATE,
        allowNull: false
      },

      value: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      months: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      installment_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async function down(queryInterface) {
    await queryInterface.dropTable("loans");
  }
};