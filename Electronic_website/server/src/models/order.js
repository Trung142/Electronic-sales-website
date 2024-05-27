"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Order.init(
		{
			product_name: DataTypes.STRING,
			price: DataTypes.DECIMAL,
			imager: DataTypes.STRING,
			quantity: DataTypes.INTEGER,
            category: DataTypes.STRING,
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING
		},
		{
			sequelize,
			modelName: "Order",
		}
	);
	return Order;
};
