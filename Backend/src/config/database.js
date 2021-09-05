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
    underscoredAll: true,
  },
};
