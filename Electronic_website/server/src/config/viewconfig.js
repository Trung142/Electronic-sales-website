const express = require('express');
const path = require('path');
const viewengin = (app) => {
	app.use(express.static(path.join("./src", "puplic")));
	app.set("views", path.join("./src", "views")); // call folder views is folder name.
	app.set("view engine", "ejs");
};
module.exports = viewengin;