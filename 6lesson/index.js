const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is runing on port ${port}`));

//const name = user.name || "user";
//const greetings = 'Hello ${name}' 

const name = "Hello";
app.listen(port, () => console.log(`Server is runing on port ${port}`));