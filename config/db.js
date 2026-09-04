require("dotenv").config();
const mongoose = require('mongoose');

const db = process.env.MONGO_DB_URI;

mongoose.connect(db)
.then(()=> console.log("Database connected successfully"))
.catch((err) => console.log("Connection Error ", err))

module.exports = mongoose;