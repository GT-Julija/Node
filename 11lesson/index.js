const express = require("express");
const mysql = require("mysql2/promise");
const PORT = 8080;

const app = express();
app.use(express.json());

const mysqlConfig = {
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DATABASE,
  port: process.env.MY_SQL_PORT,
};

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    console.log("Success: " + con);

res.send('success');
await con.end();
  } catch (e) {
    console.log(e);
  }
});


app.get("/shirts", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    const shirt = req.body; // {brand: "", size:"", model: "", price: 10.00}

  //con.execute(' TABLE defaultdb.s CREATEhirts(id int, brand varchar(255), model varchar(255), size varchar(255), price decimal(2), primary key (id));');
const response = await con.execute(
  `INSERT INTO shirts (brand, model, size, price) values ('${shirt.id}, (${shirt.brand} (${shirt.model}, (${shirt.size}, (${shirt.brand})'
    ;)

res.send(response[0]);
await con.end();
  } catch (e) {
    console.log(e);
  }
});

app.get("*", async (req, res) => {
    res.status(404).send("Page not found:(");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});