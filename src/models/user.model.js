'use strict';
const { ulid } = require('ulid');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.STRING(26),
            primaryKey: true,
            defaultValue: () => ulid(),
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        tableName: 'users',
        timestamps: true,
        paranoid: true,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['email'] },
        ],
    });

    return User;
};
