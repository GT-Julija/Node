const express = require("express");
const mysql = require("mysql2/promise");

const {dbconfig}  = require("../../config");
const router = express.Router();

router.get("/", async (res, res) => {
    try {
        const con = await mysql.createConnection(dbconfig);
        const response = await con.execute("SELECT * FROM medications;")
        res.send(response[0]);
        await con.end();
    } catch (e) {
        console.log(e);
    }
});

router.post("/medications", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig);
      const response = await con.execute(
        `INSERT INTO lmedications(id, name, description) values('${req.body.id}','${req.body.name}',${req.body.description})`
      );
      res.send(response[0]);
      await con.end();
    } catch (e) {
      console.log(e);
    }
  });


module.exports = router;