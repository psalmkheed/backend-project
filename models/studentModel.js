const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
      name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [2, "Name must be at least 2 characters"],
            trim: true,
            match: [
                  /^[A-Za-z\s'-]+$/,
                  "Name can only contain letters"
            ]
      },
      reg_number: {
            type: String,
            required: [true, "Registration number is required"],
            minlength: [2, "Registration number must be at least 2 characters"],
            trim: true,
            match: [
                  /^[A-Za-z0-9]+$/,
                  "Registration number can only contain letters and numbers"
            ],
            unique: true
      },
      email: {
            type: String,
            required: [true, "Email address is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  "Please provide a valid email address"
            ]
      }
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;