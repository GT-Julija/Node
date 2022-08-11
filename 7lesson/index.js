const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;
const uri = `mongodb+srv://admin:${process.env.PASSWORD}@cluster0.k6cb5xa.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
app.get("/", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("Demo1").collection("Cars").find().toArray();
    await con.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});
app.post("/", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("Demo1")
      .collection("Cars")
      .insertOne({ _id: "62", brand: "Audi", model: "R8" });
    await con.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
