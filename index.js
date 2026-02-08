require("dotenv").config();   // ✅ VERY IMPORTANT

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const rt = require("./routes/rt");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Static folder
app.use("/prodimgs", express.static("./prodimgs"));

// Routes
app.use("/", rt);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB error:", err));

// Port (Render needs this)
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
