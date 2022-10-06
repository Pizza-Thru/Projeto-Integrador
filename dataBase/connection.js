
//Conectar com o banco de dados
require("dotenv").config(({ path: "../.env" }));
const {Sequelize} = require("sequelize");


const sequelize = new Sequelize(
	process.env.DB_DATABASE, 
	process.env.DB_USER, 
	process.env.DB_PASS,{
		host: process.env.DB_HOST, 
		dialect: "mysql",
	});

module.exports = sequelize;
  

//Conectado com o banco