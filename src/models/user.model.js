const { DataTypes, Model } = require('sequelize');
const { ulid } = require('ulid')

class User extends Model { }

User.init({
    id: {
        type: DataTypes.STRING(26),
        defaultValue: () => ulid(),
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
}, {
    paranoid: true,
    indexes: [
        { unique: true, fields: ['email'] },
        { unique: true, fields: ['id'] },
    ],
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
});

module.exports = User;
