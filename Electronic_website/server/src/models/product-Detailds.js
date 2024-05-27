"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Product_Detaild extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Product_Detaild.init(
		{
			sku: DataTypes.STRING,
			category: DataTypes.STRING,
			imag1: DataTypes.STRING,
			imag2: DataTypes.STRING,
			imag3: DataTypes.STRING,
			imag4: DataTypes.STRING,
			tags1: DataTypes.STRING,
			tags2: DataTypes.STRING,
			tags3: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Product_Detaild",
		}
	);
	return Product_Detaild;
};
