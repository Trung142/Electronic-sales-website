"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Product_Detailds", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			sku: {
				type: Sequelize.STRING,
			},
			category: {
				type: Sequelize.STRING,
			},
			imag1: {
				type: Sequelize.STRING,
			},
			imag2: {
				type: Sequelize.STRING,
			},
			imag3: {
				type: Sequelize.STRING,
			},
			imag4: {
				type: Sequelize.STRING,
			},
			tags1: {
				type: Sequelize.STRING,
			},
			tags2: {
				type: Sequelize.STRING,
			},
			tags3: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Product_Detailds");
	},
};
