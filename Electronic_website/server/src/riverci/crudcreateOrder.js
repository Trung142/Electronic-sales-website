const db = require("../models");

const urlread_Order = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let userData = {};
			if (data.page && data.limit) {
				let page = data.page;
				let limit = data.limit;
                let offset = (page - 1) * limit;
				const { count, rows } = await db.Order.findAndCountAll({
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
				let user = await db.Order.findAll({
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
//post create order
const urlCreat_Order = (data) => {
	return new Promise(async (resolve, reject) => {
        try {
            let listData = {};
            if (!data.body.address || !data.body.email || !data.body.phone || !data.body.name) {
                listData.errCode = 1;
				listData.errMessage = "not found!";
				resolve(listData);
			} else {
				let product = await db.Order.create({
					product_name: data.body.product_name,
					price: data.body.price,
					quantity: data.body.quantity ? data.body.quantity : 1,
                    imager: data.body.file,
                    category: data.body.category,
                    name: data.body.name,
                    address: data.body.address,
                    phone: data.body.phone,
                    email: data.body.email,
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
//update orders
const ulrupdate_Order = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let listData = {};
			let id = await checkId(+data.query.id);
			if (id) {
				let product = await db.Order.update(
					{
						name: data.body.name,
						address: data.body.address,
						phone: data.body.phone,
						email: data.body.email,
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
			let order  = await db.Order.findOne({
				where: {
					id: +userid,
				},
			});
			if (order) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (error) {
			reject(error);
		}
	});
};
//delete order
const urlDelete_order = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let listData = {};
			if (data.query.id) {
				let id = await checkId(data.query.id);
				if (id) {
					
						let order = db.Order.destroy({
							where: {
								id: +data.query.id,
							},
						});
						listData.errCode = 0;
						listData.errMessage = "delete success!";
						listData.order = order;
						resolve(listData);
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
    urlread_Order,
    urlCreat_Order,
    ulrupdate_Order,
    urlDelete_order
}