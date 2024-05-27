const express = require("express");
const {
	controllerReadUser,
	controllerCreateUser,
	controllerUpdateUser,
	controllerDeleteUser,
	upload_avata,
	image,
} = require("../controllers/controllerUser.js");
const controllerLoginUser = require("../controllers/controllerLoginUser.js");
const {
	controllerCreate_Product,
	controllerRead_Product,
	controllerUpdate_Product,
	controllerDelete_Product,
	controllerUpload_imager,
} = require("../controllers/controllerProduct.js");
const upload = require("../riverci/uploadFile.js");
const { pool } = require("../config/connectmysql.js");
const { controllerReadOrder, controllerCreateOrder, controllerUpdateOrder, controllerDeleteOrder } = require("../controllers/controllerOrders.js");
const router = express.Router();
const ApiRouter = (req, res) => {
	//user
	router.get("/read", controllerReadUser);
	router.post("/create", controllerCreateUser);
	router.put("/update", controllerUpdateUser);
	router.delete("/delete", controllerDeleteUser);
	router.put("/upload_avata", upload.single("profile_pic"), upload_avata);
	router.get("/avata", image);
	//login
	router.post("/loginUser", controllerLoginUser);

	//product
	router.get("/read_product", controllerRead_Product);
	router.post(
		"/create_Product",
		upload.single("profile_pic"),
		controllerCreate_Product
	);
	router.put("/update_product", controllerUpdate_Product);
	router.put(
		"/upload_imager",
		upload.single("profile_pic"),
		controllerUpload_imager
	);
	router.delete("/delete_product", controllerDelete_Product);
	//order
	router.get('/read_order',controllerReadOrder);
	router.post('/create_order',controllerCreateOrder);
	router.put('/update_order',controllerUpdateOrder);
	router.delete('/delete_order',controllerDeleteOrder);

	return req.use("/api", router);
};
module.exports = ApiRouter;
