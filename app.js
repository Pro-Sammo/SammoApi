require("dotenv").config()
const express = require("express");
const app = express();
const products_routes = require("./routes/products");
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hi! I am live");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
