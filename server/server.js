import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();
const port = 3002;
app.use(cors());
app.use(express.json());

const dbUrl = import.meta.env.VITE_DBURL;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
mongoose
  .connect(`${dbUrl}`)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });
