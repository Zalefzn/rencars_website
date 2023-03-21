import Sequelize from 'sequelize';
import dataBase from './database.js';

const {DataTypes} = Sequelize;

const User = dataBase.define(
    'userCars', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        refresh_token: {
            type: DataTypes.TEXT
        },
    }, {
        freezeTableName: true
    }
)

export default User;

(async() => {
    await dataBase.sync();
})();