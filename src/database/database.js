import mysql from "promise-mysql";
import config from "../config.js";

const conecction = mysql.createConnection({
    host: config.host, 
    database: config.database,
    user: config.user,
    password: ''
});

const getConecction = () => {
    /*conecction.connect((error)=>{
        if (error) {
            console.log('El error de conexion es : ' + error);
            return;
        }
        console.log('Conectado a la base de datos');
    });*/
    return conecction;
};

module.exports = {getConecction};