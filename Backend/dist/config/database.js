'use strict';

module.exports = {
  uri: 'postgres://ghzxinjzpphaui:218b80d1047e3827eed995aefeb5e09e31baf8c220b28313f1ae5de18b75bd6c@ec2-107-20-24-247.compute-1.amazonaws.com:5432/db1dicruq3hqqe',
  dialect: 'postgres',
  database: 'db1dicruq3hqqe',
  host: 'ec2-107-20-24-247.compute-1.amazonaws.com',
  port: 5432,
  username: 'ghzxinjzpphaui',
  password: '218b80d1047e3827eed995aefeb5e09e31baf8c220b28313f1ae5de18b75bd6c',
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
};