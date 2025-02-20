require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Use environment variable for MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use environment variable for PORT
const PORT = process.env.PORT || 5000;

app.use("/posts", postRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
