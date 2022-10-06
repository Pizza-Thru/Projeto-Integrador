
const { DataTypes } = require("sequelize");
const sequelize = require("../dataBase/connection");


const user = sequelize.define("user", {
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

const admin = sequelize.define("admin", {
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

const bank = sequelize.define("bank", {
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

const product = sequelize.define("product", {
	id_prod : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	name_prod:{ type: DataTypes.STRING(30),
		allowNull: false,},
	price_prod:{ type: DataTypes.STRING(10),
		allowNull: false,},
	stock_prod:{ type: DataTypes.STRING(5),
		allowNull: false,},
	description_prod:{ type: DataTypes.STRING(100),
		allowNull: false,},
	image_prod:{type: Sequelize.BLOB('long')},
	category_prod:{ type: DataTypes.STRING(30),
		allowNull: false,},

});		

const product_variation = sequelize.define("product_variation", {
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

const order = sequelize.define("order", {
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