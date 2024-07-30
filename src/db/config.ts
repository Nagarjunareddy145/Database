import { Sequelize } from "sequelize";

function getconnection(){
    return new Sequelize("elemove","postgres","abcd",{
        host : 'localhost',
        port : 5432,
        dialect : 'postgres',
    })
}

const sequelizeconnection = getconnection();

export default sequelizeconnection;
