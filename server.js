/*
This is an assignment given to me by TechCrush in the backend class.
Dated this: September 04 2026.
Author: BlaqDev.
Github repository page: http://www.github.com/psalmkheed/backend-project
*/
require("./config/db");
const express = require('express');
const app = express();
const studentRoutes = require("./routes/studentRoutes");

const PORT = process.env.PORT || 4000;
app.use(express.json());

// i will be needing this for form fields mainly for my post methods
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/students",studentRoutes);

// running the server
app.listen(PORT, () =>{
      console.log(`Server is running on http://localhost:${PORT}`)
})


