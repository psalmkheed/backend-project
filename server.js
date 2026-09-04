/*
This is an assignment given to me by TechCrush in the backend class.
Dated this: September 04 2026.
Author: BlaqDev.
Github repository page: http://www.github.com/psalmkheed/backend-project
*/

require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const studentRoutes = require("./routes/studentRoutes");
const db = process.env.MONGO_DB_URI;

// connecting the database to the project
mongoose.connect(db)
.then(()=> console.log("Database connected successfully"))
.catch((err) => console.log("Connection Error ", err))

const PORT = 4000;
app.use(express.json());

// i will be using this for form fields mainly for my post methods
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/students",studentRoutes);

// running the server
app.listen(PORT, () =>{
      console.log(`Server is running on http://localhost:${PORT}`)
})


