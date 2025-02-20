// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://akshara:Aksharad6@cluster0.2uks2.mongodb.net/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/posts", postRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
