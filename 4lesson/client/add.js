//post


const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors()); 
app.use(express.json()); 

const cars = [];

app.get("/", (req, res) => {
res.send(cars);
});

app.post("/", (req, res) => {
console.log(req.body);
cars.push(req.body.car);
res.send(req.body);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));