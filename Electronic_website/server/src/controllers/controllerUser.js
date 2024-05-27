const db = require("../models");
const { urlcreate, urlRead, urlDelete, ulrupdate_User, urlUpload_imager } = require("../riverci/crudcreate");

// read method get
const image = async(req, res) => {
	try {
		if (req.query.id) {
			let user = await db.User.findOne({
				where: {
					id: +req.query.id,
				},
				attributes: ["image","name","email"],
				raw: true,
			});
			console.log(user);
			return res.status(201).json({
				errCode: 0,
				messager: "ok",
				message: user,
			});
		} else {
			return res.status(201).json({
				errCode: 1,
				message: "ok",
			});
		}
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
}

const controllerReadUser = async (req, res) => {
	try {
		const message = await urlRead(req.query);
		return res.status(200).json({
			errCode: 0,
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
};
// create with method post
const controllerCreateUser = async (req, res) => {
	try {
		const message = await urlcreate(req.body);
		return res.status(201).json({
			errCode: 0,
			message: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
};
// create with method put
const controllerUpdateUser = async(req, res) => {
	try {
		const message = await ulrupdate_User(req); 
		return res.status(200).json({
			errCode: 0,
			messager: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
};
//upload image
const upload_avata = async(req, res) => {
	try {
		const message = await urlUpload_imager(req);
		return res.status(200).json({
			errCode: 0,
			messager: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
}
// create with method delete
const controllerDeleteUser = async(req, res) => {
	try {
		const message = await urlDelete(req); 
		return res.status(200).json({
			errCode: 0,
			messager: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
};
module.exports = {
	controllerReadUser,
	controllerCreateUser,
	controllerUpdateUser,
	controllerDeleteUser,
	upload_avata,
	image
};
