module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: 25432,
  username: "docker",
  password: "docker",
  database: "sqlnode",
  define: {
    timestamps: true,
    underscored: true
  }
};
