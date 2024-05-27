/* eslint-env es6 */
const mysql = require("mysql2/promise"); // or require('mysql2').createConnectionPromise
const dotenv = require('dotenv').config();
const pool =  mysql.createPool({
	host: dotenv.parsed.DB_HOST,
	user: dotenv.parsed.DB_USER,
	password:dotenv.parsed.DB_PASSWORD,
	database:dotenv.parsed.DB_DATABASE,
	port: dotenv.parsed.DB_PORT,
	connectionLimit: 100,
});
module.exports = { pool };
