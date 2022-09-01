const express = require("express");
const mysql = require("mysql2/promise");

const {dbconfig}  = require("../../config");
const router = express.Router();

router.get("/", async (res, res) => {
    try {
        const con = await mysql.createConnection(dbconfig);
        const response = await con.execute("SELECT * FROM logs;")
        res.send(response[0]);
        await con.end();
    } catch (e) {
        console.log(e);
    }
});

router.post("/logs", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig);
      const response = await con.execute(
        `INSERT INTO logs (id, pet_id, description, status) values('${req.body.id}','${req.body.pet_id}',${req.body.description}, '${req.body.status}')`
      );
      res.send(response[0]);
      await con.end();
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;