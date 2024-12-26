const express = require("express");
const cors = require("cors");
const { newMongoConnection } = require("./config/index.js");
const userRoutes = require("./routes/user.js");
const transactionRoutes = require("./routes/transactions.js");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use("/", transactionRoutes);
app.options("*", cors()); // Allow preflight requests

try {
  await newMongoConnection();
} catch (error) {
  console.error("MongoDB connection failed:", error.message);
  process.exit(1); // Ulanish muvaffaqiyatsiz bo'lsa, serverni to'xtatadi
}

app.listen(9090, () => console.log("Server is running on port 9090"));

module.exports = { app };
