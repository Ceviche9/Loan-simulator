/* eslint-disable lines-around-directive */
/* eslint-disable eol-last */
"use strict";

module.exports = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "Letalk",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
