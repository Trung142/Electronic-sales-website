const multer = require("multer");
const path = require("path");
const appRoot = require("app-root-path");
const imageFilter = (req, file, cb) => {
	// Accept images only
	if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
		req.fileValidationError = "Only image files are allowed!";
		return cb(new Error("Only image files are allowed!"), false);
	}
	cb(null, true);
};
// Set up storage for uploaded files
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null,appRoot+ "/src/puplic/image/");
	},
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});

// Create the multer instance
const upload = multer({ storage: storage, fileFilter: imageFilter });
module.exports = upload;
