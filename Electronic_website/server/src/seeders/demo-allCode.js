"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return await queryInterface.bulkInsert(
			"AllCodes",
			[
				{
					key: "R1",
					type: "ROLE",
					value: "ADMIN",
					valueEN: "EN",
					valueVi: "VI",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					key: "R2",
					type: "ROLE",
					value: "MANAGE",
					valueEN: "EN",
					valueVi: "VI",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					key: "R3",
					type: "ROLE",
					value: "EMPLOYEES",
					valueEN: "EN",
					valueVi: "VI",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					key: "R4",
					type: "ROLE",
					value: "CUSTOME",
					valueEN: "EN",
					valueVi: "VI",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 *
		 */
		return await queryInterface.bulkDelete("AllCodes", null, {});
	},
};
