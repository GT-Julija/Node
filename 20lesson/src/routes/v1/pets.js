const express = require("express");
const mysql = require("mysql2/promise");

const {dbconfig}  = require("../../config");
const router = express.Router();

router.get("/", async (res, res) => {
    try {
        const con = await mysql.createConnection(dbconfig);
        const response = await con.execute("SELECT * FROM pets;")
        res.send(response[0]);
        await con.end();
    } catch (e) {
        console.log(e);
    }
});

app.post("/pets", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig);
      const response pets (id, name, dob, client_email, archived) values ('${req.body.id}','${req.body.name}', ${req.body.dob}, '${req.body.client_email}', '${req.body.archived}')`
      );
      res.send(response[0]);
      await con.end();
    } catch (e) {
      console.log(e);
    }
  });


  router.delete("/pets/:id", async (req, res) => {
    try {
      const con = await mysql.createConnection(dbconfig);
      const response = await con.execute(
        `DELETE FROM pets WHERE id=${req.params.id};`
      );
      res.send(response[0]);
      await con.end();
    } catch (e) {
      console.log(e);
    }
  });


module.exports = router;