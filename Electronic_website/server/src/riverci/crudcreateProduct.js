const { resolve } = require("app-root-path");
const db = require("../models");
const fs = require("fs");
const { unlink } = require("node:fs");
const { rejects } = require("assert");
const urlread_Product = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let userData = {};
			if (data.page && data.limit) {
				let page = data.page;
				let limit = data.limit;
				let offset = (page - 1) * limit;
				const { count, rows } = await db.Product.findAndCountAll({
					offset: +offset,
					limit: +limit,
				});
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
			} else {
				let user = await db.Product.findAll({
					raw: true,
				});
				if (!user) {
					userData.errCode = 1;
					userData.errMessage = "not found!";
					resolve(userData);
				} else {
					userData.errCode = 0;
					userData.errMessage = "ok";
					userData.User = user;
					resolve(userData);
				}
			}
		} catch (error) {
			reject(error);
		}
	});
};
//create product
function ErrorData(value) {
	return new Promise((resolve, reject) => {
		try {
			if (!value.body.product_name) {
				resolve("please input product_name!");
			}
			if (!value.body.price) {
				resolve("please input price!");
			}
			if (!value.file) {
				resolve("error upload file!");
			}
			resolve();
		} catch (error) {
			reject(error);
		}
	});
}
const urlCreat_Product = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let listData = {};
			let errr = await ErrorData(data);
			if (errr) {
				listData.errMessage = errr;
				resolve(listData);
			} else {
				let product = await db.Product.create({
					product_name: data.body.product_name,
					price: data.body.price,
					sale: data.body.sale ? data.body.sale : 0,
					top_rated: data.body.top_rated,
					quantity: data.body.quantity ? data.body.quantity : 1,
					imager: data.file.filename,
				});
				listData.errCode = 0;
				listData.Message = "insert product succsse !";
				listData.data = product;
				resolve(listData);
			}
		} catch (error) {
			reject(error);
		}
	});
};
//update product
const ulrupdate_Product = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let listData = {};
			let id = await checkId(+data.query.id);
			if (id) {
				let product = await db.Product.update(
					{
						product_name: data.body.product_name,
						price: data.body.price,
						sale: data.body.sale ? data.body.sale : 0,
						top_rated: data.body.top_rated,
						quantity: data.body.quantity ? data.body.quantity : 1,
					},
					{
						where: {
							id: +data.query.id,
						},
					}
				);
				listData.errCode = 0;
				listData.Message = "update product succsse !";
				listData.data = product;
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

//check id
const checkId = (userid) => {
	return new Promise(async (resolve, reject) => {
		try {
			let product = await db.Product.findOne({
				where: {
					id: +userid,
				},
			});
			if (product) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (error) {
			reject(error);
		}
	});
};
//upload imager
const urlUpload_imager = (data) => {
	return new Promise(async (resolve, rejects) => {
		try {
			let listData = {};
			let id = await checkId(+data.query.id);
			if (id) {
				await deleteFile(data.query.id);
					const product = await db.Product.update(
						{
							imager: data.file.filename,
						},
						{
							where: {
								id: +data.query.id,
							},
						}
				);
				let user = await db.Product.findOne({
					where: {
						id: data.query.id,
					},
					attributes: ["imager"], 
					raw: true,
				});
					listData.errCode = 0;
					listData.errMessage = "update product succsse !";
					listData.data = user;
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
//delete file
const deleteFile = (userid) => {
	return new Promise(async (resolve, rejects) => {
		try {
			const user = await db.Product.findOne({
				where: {
					id: +userid,
				},
				raw: true,
			});
			if (user) {
				fs.writeFileSync(`src/puplic/image/${user.imager}`, "this is cont");
				fs.unlink(`src/puplic/image/${user.imager}`, function (err) {
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
const urlDelete_product = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let listData = {};
			if (data.query.id) {
				let id = await checkId(data.query.id);
				if (id) {
					let file = await deleteFile(data.query.id);
					if (file) {
						let product = db.Product.destroy({
							where: {
								id: +data.query.id,
							},
						});
						listData.errCode = 0;
						listData.errMessage = "delete success!";
						listData.product = product;
						resolve(listData);
					} else {
						listData.errCode = 3;
						listData.errMessage = "error delete file!";
						resolve(listData);
					}
				} else {
					listData.errCode = 2;
					listData.errMessage = "not found!";
					resolve(listData);
				}
			} else {
				listData.errCode = 1;
				listData.errMessage = "not found!";
				resolve(listData);
			}
		} catch (error) {
			reject(error);
		}
	});
};
module.exports = {
	urlCreat_Product,
	ulrupdate_Product,
	urlread_Product,
	urlDelete_product,
	urlUpload_imager,
};
