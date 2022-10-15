
const { Sequelize } = require("sequelize");
const conn = require("../../db/conn");
const { DataTypes } = require("sequelize");

const user = conn.define("user", {
	id_user : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	user_name:{ type: DataTypes.STRING(30),
		allowNull: false,},
	user_phone:{
		type: DataTypes.STRING(11),},
	user_email:{
		type: DataTypes.STRING(100)},
	user_cpf:{
		type: DataTypes.STRING(11)},
	user_state:{
		type: DataTypes.STRING(50)},
	user_city:{
		type: DataTypes.STRING(51)
	}	

}); 

const admin = conn.define("admin", {
	id_admin : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	admin_name :{ type: DataTypes.STRING(30),
		allowNull: false,},
	admin_email :{ type: DataTypes.STRING(100),
		allowNull: false,},
	admin_phone	:{ type: DataTypes.STRING(11),
		allowNull: false,},
});

const bank = conn.define("bank", {
	id_bank : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	payment:{ type: DataTypes.STRING(30),
		allowNull: false,},
	account_holder:{ type: DataTypes.STRING(100),
		allowNull: false,},
	card_number:{ type: DataTypes.STRING(20),
		allowNull: false,},
	card_expiration:{
		type: DataTypes.STRING(4),
		allowNull: false,},
	CVC:{ type: DataTypes.STRING(3),
		allowNull: false,}, // card_validation_code 
	installment:{
		type: DataTypes.STRING(3),
		allowNull: false,},
	nickname:{ type: DataTypes.STRING(20)}
}); 

const product = conn.define("product", {
	id_prod : {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull : false},
	name_prod:{ type: DataTypes.STRING(30),
		},
	price_prod:{ type: DataTypes.STRING(10),
		},
	stock_prod:{ type: DataTypes.STRING(5),
		allowNull: true},
	description_prod:{ type: DataTypes.STRING(300),
	},
	image_prod:{type: DataTypes.BLOB('long')},
	category_prod:{ type: DataTypes.STRING(30),
		},

});		

const product_variation = conn.define("product_variation", {
	id_var : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	type_var:{ type: DataTypes.STRING(30),
		allowNull: false,},
	value_var:{ type: DataTypes.STRING(30),
		allowNull: false,},
	price_var:{ type: DataTypes.STRING(10),
		allowNull: false,},
});

const order = conn.define("order", {
	id_order : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	date_order:{ type: DataTypes.DATE,
		allowNull: false,},
	status_order:{ type: DataTypes.STRING(30),
		allowNull: false,},
	total_order:{ type: DataTypes.STRING(10),
		allowNull: false,},
});

module.exports = {user, bank,product,product_variation,admin, order};