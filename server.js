const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

dotenv.config();

if (process.env.NODE_ENV === "local") {
  app.use(
    cors({
      origin: "http://localhost:3000/",
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      credentials: true,
    })
  );
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./", "frontend", "dist", "index.html")
    );
  });
}

const dbConnect = async () => {
  try {
    if (process.env.NODE_ENV === "local") {
      await mongoose.connect(process.env.LOCAL_DB_URL);
      console.log("Local database is connect...");
    } else {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("production database is connect...");
    }
  } catch (err) {
    console.log("Database connection failed.");
  }
};

dbConnect();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
