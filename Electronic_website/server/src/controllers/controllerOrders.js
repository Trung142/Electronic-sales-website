const { urlread_Order, urlCreat_Order, ulrupdate_Order, urlDelete_order } = require("../riverci/crudcreateOrder");

// read method get
const controllerReadOrder = async (req, res) => {
    try {
        const message = await urlread_Order(req.query);
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
const controllerCreateOrder = async (req, res) => {
    try {
        const message = await urlCreat_Order(req);
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
const controllerUpdateOrder = async(req, res) => {
    try {
        const message = await ulrupdate_Order(req);
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
// create with method delete
const controllerDeleteOrder = async(req, res) => {
    try {
        const message = await urlDelete_order(req);
		return res.status(200).json({
			errCode: 0,
            messager: "ok",
            message: message
		});
	} catch (error) {
		return res.status(404).json({
			errCode: 4,
			error,
		});
	}
};
module.exports = {
	controllerReadOrder,
	controllerCreateOrder,
	controllerUpdateOrder,
	controllerDeleteOrder,
};
