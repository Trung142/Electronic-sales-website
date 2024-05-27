"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Orders", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			product_name: {
				type: Sequelize.STRING,
			},
			price: {
				type: Sequelize.DECIMAL,
			},
			imager: {
				type: Sequelize.STRING,
			},
			quantity: {
				type: Sequelize.INTEGER,
			},
			category: {
				type: Sequelize.STRING,
			},
			name: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			phone: {
				type: Sequelize.STRING,
			},
			email: {
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
		await queryInterface.dropTable("Orders");
	},
};
