const Sequelize = require("sequelize");

const sequelize = new Sequelize("blogDB", "root", "", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;