const express = require('express');
const app = express();
const mongoose = require('mongoose');
const studentRoutes = require("./routes/studentRoutes");

const db = "mongodb://localhost:27017/student_management"

mongoose.connect(db)
.then(()=> console.log("Database connected successfully"))
.catch((err) => console.log("Connection Error ", err))

const PORT = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/students",studentRoutes);

app.listen(PORT, () =>{
      console.log(`Server is running on http://localhost:${PORT}`)
})


