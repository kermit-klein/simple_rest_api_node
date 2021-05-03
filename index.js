import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/rocks", (req, res) => {
  return res.send("Received a GET HTTP method on rocks index");
});
app.get("/rocks/:id", (req, res) => {
  return res.send("Received a GET HTTP method on rocks show");
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
