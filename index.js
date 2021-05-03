import "dotenv/config";
import express from "express";
import models from "./models";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.db = {
    models,
  };
  next();
});

app.use("/rocks", routes.rock);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
