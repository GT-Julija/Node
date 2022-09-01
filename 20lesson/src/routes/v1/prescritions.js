const express = require("express");
const mysql = require("mysql2/promise");

const {dbconfig}  = require("../../config");
const router = express.Router();

router.get("/", async (res, res) => {
    try {
        const con = await mysql.createConnection(dbconfig);
        const response = await con.execute("SELECT * FROM prescritions;")
        res.send(response[0]);
        await con.end();
    } catch (e) {
        console.log(e);
    }
});

router.post("/prescritions", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig);
      const response = await con.execute(
        `INSERT INTO prescritions (id, medication_id, pet_id, comment, timestamp) values('${req.body.id}','${req.body.medication_id}',${req.body.pet_id}, '${req.body.comment}', ${req.body.timestamp}')`
      );
      res.send(response[0]);
      await con.end();
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;