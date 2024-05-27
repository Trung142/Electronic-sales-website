const { HasMany, where } = require("sequelize");
const { pool } = require("../config/connectmysql");
const db = require("../models");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const fs = require("fs");
//urlread
const urlRead = (data) => {
	// 	select u3.id, u3.name ,u3.phone ,u3.email ,u3.address ,u3.gender,u3.date ,a.value  from users u3
	// inner join allcodes a on a.`key`  = u3.keyRole
	// where u3.typeRole = 'ROLE' and u3.keyRole ="R1"or u3.keyRole ="R2"
	return new Promise(async (resolve, reject) => {
		try {
			let userData = {};
			let sql = `select u3.id, u3.name ,u3.phone ,u3.email ,u3.address ,u3.gender,u3.date ,a.value,u3.createdAt from users u3
				 inner join allcodes a on a.key = u3.keyRole
				where u3.typeRole = "ROLE" and u3.keyRole = "R1" or u3.keyRole ="R2" or u3.keyRole ="R3"`;
			const [row, file] = await pool.execute(sql);
			const count = row.length;
			let page = data.page;
			let limit = data.limit;
			let offset = (page - 1) * limit;
			if (!page || !limit) {
				userData.errCode = 0;
				userData.errMessage = "ok";
				userData.User = row;
				resolve(userData);
			} else {
				// const { count, rows } = await db.User.findAndCountAll({
				// 	offset: +offset,
				// 	limit: +limit,
				// 	attributes: [
				// 		"id",
				// 		"name",
				// 		"phone",
				// 		"date",
				// 		"email",
				// 		"image",
				// 		"typeRole",
				// 		"keyRole",
				// 		"gender",
				// 		"createdAt",
				// 		"updatedAt",
				// 	],

				// });
				let sql2 = `select u3.id,u3.name,u3.phone ,u3.email ,u3.address ,u3.gender,u3.date ,a.value,u3.createdAt  from users u3
				 inner join allcodes a on a.key = u3.keyRole 
				where u3.typeRole = "ROLE" and u3.keyRole = "R1" or u3.keyRole ="R2" or u3.keyRole ="R3" limit ? offset ?`;
				const [rows] = await pool.execute(sql2, [limit, offset]);
				if (!rows) {
					userData.errCode = 2;
					userData.errMessage = "not found!";
					resolve(userData);
				} else {
					let totalpage = Math.ceil(count / limit);
					userData.errCode = 0;
					userData.errMessage = "ok";
					userData.total = count;
					userData.totalpage = totalpage;
					userData.User = rows;
					resolve(userData);
				}
			}
		} catch (error) {
			reject(error);
		}
	});
};

// create
const urlcreate = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let userData = {};
			if (!data.email || !data.password) {
				userData.errCode = 1;
				userData.errMessage = `not found !`;
				resolve(userData);
			} else {
				let isXit = await checkEmail(data.email);
				if (isXit) {
					userData.errCode = 2;
					userData.errMessage = `Email already exists! please create other email!`;
					resolve(userData);
				} else {
					let checkrelo = await checkRole(
						data.typeRole ? data.typeRole : "ROLE"
					);
					if (data.keyRole === "R1" && checkrelo) {
						userData.errCode = 3;
						userData.errMessage = `you don't have permission this!`;
						resolve(userData);
					} else {
						let password = await Checkpassword(data.password);
						let user = await db.User.create({
							email: data.email,
							password: password,
							name: data.name,
							phone: data.phone,
							date: data.date,
							address: data.address,
							gender: data.gender,
							typeRole: "ROLE",
							keyRole: data.keyRole ? data.keyRole : "R4",
							image: data.image,
						});
						userData.errCode = 0;
						userData.errMessage = "ok";
						userData.User = user.id;
						resolve(userData);
					}
				}
			}
		} catch (error) {
			reject(error);
		}
	});
};
//check email
let checkEmail = (email) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.User.findOne({
				where: {
					email: email,
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
// hashpassword
let Checkpassword = (password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let hash = await bcrypt.hashSync(password, salt);
			if (hash) {
				resolve(hash);
			}
		} catch (error) {
			reject(error);
		}
	});
};
//check ROLE
const checkRole = (Roles) => {
	return new Promise(async (resolve, reject) => {
		try {
			let role = await db.User.findOne({
				where: {
					typeRole: Roles,
					keyRole: "R1",
				},
			});
			if (role) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (error) {
			reject(error);
		}
	});
};
//update product
const ulrupdate_User = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let listData = {};
			let id = await db.User.findOne({
				where: {
					id: +data.query.id
				}
			})
			if (id) {
				let user = await db.User.update(
					{
						imager: data.body.imager
					},
					{
						where: {
							id: +data.query.id,
						},
					}
				);
				listData.errCode = 0;
				listData.Message = "update avata succsse !";
				listData.data = user;
				resolve(listData);
			} else {
				listData.errCode = 1;
				listData.errMessage = "not id! please input other id!!";
				resolve(listData);
			}
		} catch (error) {
			reject(error);
		}
	});
};
//upload imager
//delete file
const deleteFile = (userid) => {
	return new Promise(async (resolve, rejects) => {
		try {
			const user = await db.User.findOne({
				where: {
					id: +userid,
				},
				raw: true,
			});
			if (user) {
				fs.writeFileSync(`src/puplic/image/${user.image}`, "this is cont");
				fs.unlink(`src/puplic/image/${user.image}`, function (err) {
					if (err) {
						rejects(err);
						return;
					}
					resolve(true);
				});
				resolve(true);
			}
			{
				resolve(false);
			}
		} catch (error) {
			rejects(error);
		}
	});
};
const urlUpload_imager = (data) => {
	return new Promise(async (resolve, rejects) => {
		try {
			let listData = {};
			let userid = await db.User.findOne({
				where: {
					id: +data.query.id,
				},
			});
			if (userid) {
				await deleteFile(data.query.id);
				await db.User.update(
						{
							image: data.file.filename,
						},
						{
							where: {
								id: +data.query.id,
							},
						}
				);
				let user = await db.User.findOne({
					where: {
						id: +data.query.id,
					},
					attributes: ["image", "name"],
					raw: true,
				});
					listData.errCode = 0;
				listData.errMessage = "update product succsse !";
				listData.User = user;
					resolve(listData);
			} else {
				listData.errCode = 1;
				listData.errMessage = "not id! please input other id!!";
				resolve(listData);
			}
		} catch (error) {
			rejects(error);
		}
	});
};
//delete 
const checkuserid = (userid) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.User.findOne({
				where: {
					id: +userid,
					keyRole: 'R1'
				}
			})
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
const urlDelete = (data) => {
	return new Promise(async(resolve, reject) => {
		try {
			let listData = {};
			if (data.body.userid && data.query.id) {
				let checkadmin = await checkuserid(data.body.userid);
				if (checkadmin) {
					let checkUser = await checkuserid(data.query.id);
					if (checkUser) {
						userData.errCode = 3;
						userData.errMessage = `you can not delete user admin! Go Out..!`;
						resolve(userData);
					} else {
						const user = await db.User.destroy({
							where: {
								id: +data.query.id
							}
						})
						listData.errCode = 0;
						listData.errMessage = "delete success!";
						listData.User = user;
						resolve(listData);
					}
				} else {
					userData.errCode = 2;
					userData.errMessage = `you don't have permission here! Go Out..!`;
					resolve(userData);
				}
			} else {
				userData.errCode = 1;
				userData.errMessage = `not found!`;
				resolve(userData);
			}
		} catch (error) {
			reject(error);
		}
	})
}
module.exports = {
	urlcreate,
	urlRead,
	ulrupdate_User,
	urlDelete,
	urlUpload_imager
};
