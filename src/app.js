const express = require("express");

const app = express();
// Middleware va marshrutlarni qo'shish
app.use(express.json());

// Eksport qilish
module.exports = { app };
