/* eslint-disable lines-around-directive */
/* eslint-disable eol-last */
"use strict";

module.exports = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
  host: "ec2-107-20-24-247.compute-1.amazonaws.com",
  username: "ghzxinjzpphaui",
  password: "218b80d1047e3827eed995aefeb5e09e31baf8c220b28313f1ae5de18b75bd6c",
  database: "db1dicruq3hqqe",
  ssl: true,
  dialectOptions: {
    ssl: {
      ca: 'path/to/ca'
    },
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};