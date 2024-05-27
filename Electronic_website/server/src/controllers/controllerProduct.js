const { urlCreat_Product, urlread_Product, urlDelete_product, ulrupdate_Product, urlUpload_imager } = require("../riverci/crudcreateProduct");
// read method get
const controllerRead_Product = async (req, res) => {
	try {
		const message = await urlread_Product(req.query);
		return res.status(200).json({
			errCode: 0,
			message: message
		})
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			message:error
		});
	}
};
// create with method post
const controllerCreate_Product = async (req, res) => {
	try {
		const message = await urlCreat_Product(req);
		return res.status(201).json({
			errCode: 0,
			message: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			message: error
		});
	}
};
// create with method put
const controllerUpdate_Product = async(req, res) => {
	try {
		const message = await ulrupdate_Product(req);
		return res.status(201).json({
			errCode: 0,
			message: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			message: error
		});
	}
};
const controllerUpload_imager = async (req, res) => {
	try {
		const message = await urlUpload_imager(req);
		return res.status(201).json({
			errCode: 0,
			message: "ok",
			message: message,
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			message: error
		});
	}
}
// create with method delete
const controllerDelete_Product = async(req, res) => {
	try {
		const message = await urlDelete_product(req);
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
module.exports = {
	controllerRead_Product,
	controllerCreate_Product,
	controllerUpdate_Product,
	controllerDelete_Product,
	controllerUpload_imager
};
