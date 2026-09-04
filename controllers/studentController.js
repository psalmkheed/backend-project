const Student = require("../models/studentModel");
class StudentController {
      // CREATE create a new student account.
      async createStudent(req, res) {
            try {
                  const { name, reg_number, email } = req.body;

                  if (!name || !reg_number || !email) {
                        return res.status(400).json({
                              message: "All fields are required",
                              status: "error"
                        })
                  }

                  const existingStudentEmail = await Student.findOne({ email });

                  if (existingStudentEmail) {
                        return res.status(409).json({
                              status: "error",
                              message: "Email address already exists"
                        });
                  };

                  const existingStudentRegNumber = await Student.findOne({ reg_number });

                  if (existingStudentRegNumber) {
                        return res.status(409).json({
                              status: "error",
                              message: "Registration number already exists"
                        });
                  };

                  const student = await Student.create({
                        name, reg_number, email
                  });
                  return res.status(201).json({
                        message: "Student created successfully",
                        status: "success",
                        data: student
                  })
            } catch (err) {

                  // This is for Duplicate email and registration number error handling
                  if (err.code === 11000) {

                        if (err.keyPattern?.email) {
                              return res.status(409).json({
                                    status: "error",
                                    message: "Email address already exists"
                              });
                        }

                        if (err.keyPattern?.reg_number) {
                              return res.status(409).json({
                                    status: "error",
                                    message: "Registration number already exists"
                              });
                        }
                  }
                  return res.status(500).json({
                        message: err.message,
                        status: 'error'
                  })
            }
      };

      // READ get all students.
      async getAllStudents(req, res) {
            try {
                  const students = await Student.find();

                  if (!students) {
                        return res.status(400).json({
                              message: "No students found",
                              status: "error"
                        });
                  };
                  return res.status(200).json({
                        message: "All students fetched successfully",
                        status: "success",
                        data: students
                  })

            } catch (err) {
                  return res.status(500).json({
                        message: err.message,
                        status: "error",
                  })
            }
      }

      // READ find student by their id.
      async getStudentById(req, res) {
            try {
                  const student = await Student.findById(req.params.id);

                  if (!student) {
                        return res.status(400).json({
                              message: "Student not found",
                              status: 'error'
                        })
                  }

                  return res.status(200).json({
                        message: "Student fetched successfully",
                        status: "success",
                        data: student
                  })
            } catch (err) {
                  return res.status(500).json({
                        message: err.message,
                        status: "error"
                  })
            }
      }

      // UPDATE update student profile.
      async updateStudent(req, res) {
            try {
                  const { name } = req.body;

                  const student = await Student.findByIdAndUpdate(req.params.id,
                        { name },
                        {
                              returnDocument: "after",
                              runValidators: true
                        }
                  )

                  return res.status(200).json({
                        message: "Student updated successfully",
                        status: "success",
                        data: student
                  })
            } catch (err) {
                  return res.status(500).json({
                        message: err.message,
                        status: "error"
                  })
            }
      }

      // DELETE delete student profile.
      async deleteStudent(req, res) {
            try {
                  const student = await Student.findByIdAndDelete(req.params.id);
                  return res.status(200).json({
                        message: "Student deleted successfully",
                        status: "success"
                  })
            } catch (err) {
                  return res.status(500).json({
                        message: err.message,
                        status: "error"
                  })
            }
      }

}

module.exports = new StudentController();