require("dotenv").config();

const common = {
  dialect: "postgres",
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
  },
};

module.exports = {
  development: {
    use_env_variable: "DB_URL",
    ...common,
  },
  production: {
    use_env_variable: "DB_URL",
    ...common,
  },
};
