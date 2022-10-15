
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
	},
	password_login_user: {
		type: DataTypes.STRING(30),
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
	//numero de parcelas
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

const order = conn.define("order", {
	id_order : {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true},
	// Pedaços pizza	
	qnt_slice:{ 
		type: DataTypes.STRING(10),
		allowNull: false,},
	//Sabor 1 da pizza	
	flavor_1:{ 	
		type: DataTypes.STRING(10),
		allowNull: false,},
	//Sabor 2 da pizza
	flavor_2:{
		type: DataTypes.STRING(10),
		allowNull: true,},
	// Tipo de Massa
	type_pasta:{
		type: DataTypes.STRING(10),
		allowNull: false,},
	// Tipo de borda
	type_border:{
		type: DataTypes.STRING(10),
		allowNull: false,},

	item_add_1:{
		type: DataTypes.STRING(10),
		allowNull: true,},
	item_add_2:{
		type: DataTypes.STRING(10),
		allowNull: true,},
	
	obs:{
		type: DataTypes.STRING(100),
		allowNull: true,},
			
	status_order:{ type: DataTypes.STRING(30),
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
	franqueado_phone: {
		type: DataTypes.STRING(11),
		allowNull: false,
	},
	franqueado_cpf: {
		type: DataTypes.STRING(11),
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

//RELACIONAMENTOS

// incluindo foreign key na tabela order
user.hasMany(order, { foreignKey: 'id_user' });
order.belongsTo(user, { foreignKey: 'id_user' });

bank.hasMany(order, { foreignKey: 'id_bank' });
order.belongsTo(bank, { foreignKey: 'id_bank' });

product.hasMany(order, { foreignKey: 'id_prod' });
order.belongsTo(product, { foreignKey: 'id_prod' });

// incluindo foreign key na tabela bank
user.hasMany(bank, { foreignKey: 'id_user' });
bank.belongsTo(user, { foreignKey: 'id_user' });

// incluindo foreign key na tabela login user
user.hasOne(login_user, { foreignKey: 'id_user' });
login_user.belongsTo(user, { foreignKey: 'id_user' });

// incluindo foreign key na tabela login admin
admin.hasOne(login_admin, { foreignKey: 'id_admin' });
login_admin.belongsTo(admin, { foreignKey: 'id_admin' });

// incluindo foreign key na tabela product variation
product.hasMany(product_variation, { foreignKey: 'id_prod' });
product_variation.belongsTo(product, { foreignKey: 'id_prod' });



module.exports = {user, bank,product,admin, order };