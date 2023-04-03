const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Post = sequelize.define("tblPost", {
    postId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: Sequelize.STRING,
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    create_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
}, {
    timestamps: false
});

module.exports = Post;