
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
	user_state:{
		type: DataTypes.STRING(50)},
	user_city:{
		type: DataTypes.STRING(51)},
	user_publicPlace:{
		type: DataTypes.STRING(100)},
	user_district:{
		type: DataTypes.STRING(100)},
	password_login_user: {
		type: DataTypes.STRING(400),
		allowNull: false,
	},	

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
	password_login_adm: {
		type: DataTypes.STRING(30),
		allowNull: false,
		},
});

const bank = conn.define("bank", {
	id_bank : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	payment:{ type: DataTypes.STRING(30),
		},
	account_holder:{ type: DataTypes.STRING(100),
		},
	card_number:{ type: DataTypes.STRING(20),
		},
	card_expiration:{
		type: DataTypes.STRING(4),
		},
	CVC:{ type: DataTypes.STRING(3),
		allowNull: false,}, 
	installment:{
		type: DataTypes.STRING(3),
		},
	nickname:{ type: DataTypes.STRING(20)}
}); 

const product = conn.define("product", {
	id_prod : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	name_prod:{ type: DataTypes.STRING(30),
		},
	price_prod:{ type: DataTypes.STRING(10),
		},
	price_Small:{ type: DataTypes.STRING(10),
		allowNull: true},
	price_Medium:{ type: DataTypes.STRING(10),
		allowNull: true},
	price_Large:{ type: DataTypes.STRING(10),
		allowNull: true},
	stock_prod:{ type: DataTypes.STRING(5),
		allowNull: true},
	description_prod:{ type: DataTypes.STRING(300),
	},
	image_prod:{type: DataTypes.BLOB('long')},
	category_prod:{ type: DataTypes.STRING(30),
		},

});		

const order = conn.define("order", {
	id_order : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	// Pedaços pizza	
	qnt_slice:{ 
		type: DataTypes.STRING(3),
		allowNull: false,},
	// Quantidade de sabores
	qnt_flavor:{
		type: DataTypes.STRING(3),
		allowNull: false,},
	//Sabor 1 da pizza	
	flavor_1:{ 	
		type: DataTypes.STRING,
		allowNull: false,},
	//Sabor 2 da pizza
	flavor_2:{
		type: DataTypes.STRING,
		allowNull: true,},
	// Tipo de Massa
	type_pasta:{
		type: DataTypes.STRING,
		allowNull: false,},
	// Tipo de borda
	type_border:{
		type: DataTypes.STRING,
		allowNull: false,},

	item_add_1:{
		type: DataTypes.STRING,
		allowNull: true,},
	item_add_2:{
		type: DataTypes.STRING,
		allowNull: true,},
	
	obs:{
		type: DataTypes.STRING(100),
		allowNull: true,},
			
	status_order:{ type: DataTypes.STRING(40),
		allowNull: false,},
	total_order:{ type: DataTypes.STRING(10),
		allowNull: false,},
});

const franqueado = conn.define("franqueado", {
	id_franqueado: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	franqueado_name: {
		type: DataTypes.STRING(30),
		allowNull: false,
	},	
	franqueado_email: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	franqueado_state: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	franqueado_city: {
		type: DataTypes.STRING(51),
		allowNull: false,
	},
	franqueado_invest: {
		type: DataTypes.STRING(10),
		allowNull: false,
	},
	franqueado_findUs: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
});
const evaluation = conn.define("evaluation", {
	id_avaliacao : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	name_feed:{ type: DataTypes.STRING(80),
			allowNull: false,},
	note:{ type: DataTypes.STRING(1),
		allowNull: false,},
	comment:{ type: DataTypes.STRING(500),
		allowNull: false,},

});


//RELACIONAMENTOS

// incluindo foreign key na tabela order

user.hasMany(order, { foreignKey: 'user_id' });
order.belongsTo(user, { foreignKey: 'user_id' });

bank.hasMany(order, { foreignKey: 'bank_id' });
order.belongsTo(bank, { foreignKey: 'bank_id' });

product.hasMany(order, { foreignKey: 'prod_id' });
order.belongsTo(product, { foreignKey: 'prod_id' });

// incluindo foreign key na tabela bank
user.hasMany(bank, { foreignKey: 'users_id' });
bank.belongsTo(user, { foreignKey: 'users_id' });

//incluindo foreign key na tabela evaluation
user.hasMany(evaluation, { foreignKey: 'user_id' });
evaluation.belongsTo(user, { foreignKey: 'user_id' });

module.exports = {user, bank,product,admin, order, franqueado, evaluation};