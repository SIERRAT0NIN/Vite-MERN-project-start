import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();
const port = 3002;
app.use(cors());
app.use(express.json());

const p_w = "As022499";
// const p_w = import.meta.env.VITE_MONGODB_PW;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
mongoose
  .connect(
    `mongodb+srv://albertosierra101:${p_w}@sierratonindb.zdapufq.mongodb.net/?retryWrites=true&w=majority&appName=SierratoninDB`
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });
