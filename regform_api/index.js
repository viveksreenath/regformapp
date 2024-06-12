import express from "express";
import routes from "./routes/index.js";
import cors from "cors";

const exp = express();
exp.use(cors);
exp.use(express.json());
exp.use(routes);

exp.get("/", (req, res) => {
  res.send("working");
});

exp.use("*", (req, res) => {
  res.status(404).send("no routes found");
});
exp.listen(4000, () => {
  console.log("testing localhost server 4000");
});
