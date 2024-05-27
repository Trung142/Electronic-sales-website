const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const viewengin = require("./src/config/viewconfig");
const ApiRouter = require("./src/router/router");
const ConnectionSequelize = require("./src/config/ormsequelize");
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dotenv = require("dotenv").config();
const port = dotenv.parsed.PORT;

ConnectionSequelize();
viewengin(app);
ApiRouter(app);

app.listen(port, () => {
	console.log(`Example app listening successfuly!`);
});
