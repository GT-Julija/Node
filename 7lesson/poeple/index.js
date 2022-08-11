const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const URI = `mongodb+srv://admin:${process.env.PASSWORD}@cluster0.k6cb5xa.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(URI);

app.get("/", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo2").collection("people").find().toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/", async (req, res) => {
  try {
    const con = await client.connect();
    const dbRes = await con.db("demo2").collection("people").insertOne({
      name: req.body.name,
      surname: req.body.surname,
      age: req.body.age,
    });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});