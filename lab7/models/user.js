const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define('tblUsers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        required: true
    },
    password: {
        type: Sequelize.STRING,
        required: true
    },
    typeUser: {
        type: Sequelize.INTEGER,
        required: true
    }
},
    { timestamps: false }
);

module.exports = User;