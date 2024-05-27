const { where } = require("sequelize");
const db = require("../models");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
let handleUserlogin = (email, password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let userData = {};
			if (email && password) {
				let isXit = await checkEmail(email);
				if (isXit) {
					const user = await db.User.findOne({
						where: {
							email: email,
						},
						raw: true,
					});
					if (user) {
						let check = await checkpassword(password, user.password);
						if (check) {
							userData.errCode = 0;
							userData.errMessage = "login success";
							userData.User = user;
							delete user.password; // removi password
							resolve(userData);
						} else {
							userData.errCode = 3;
							userData.errMessage = `awrong password !`;
							resolve(userData);
						}
					} else {
						userData.errCode = 2;
						userData.errMessage = `User not Found!`;
						resolve(userData);
					}
				} else {
					userData.errCode = 1;
					userData.errMessage = `your email isn't exit in your sytem, plz try other Email !`;
					resolve(userData);
				}
			} else {
				userData.errCode = 1;
				userData.errMessage = `password or email not Found!`;
				resolve(userData);
			}
		} catch (error) {
			reject(error);
		}
	});
};
let checkpassword = (password, hashpassword) => {
	return new Promise(async (resolve, reject) => {
		try {
			let compare = await bcrypt.compare(password, hashpassword);
			if (compare) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (error) {
			reject(error);
		}
	});
};
let checkEmail = (userEmail) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.User.findOne({
				where: {
					email: userEmail,
				},
			});
			if (user) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (error) {
			reject(error);
		}
	});
};
module.exports = {
	handleUserlogin,
};
