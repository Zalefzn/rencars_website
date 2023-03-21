import Sequelize from 'sequelize';

const dataBase = new Sequelize('renscar', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

export default dataBase;