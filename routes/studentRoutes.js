const express = require("express");

const StudentController = require("../controllers/studentController");

const router = express.Router();

router.post("/create-account", StudentController.createStudent);
router.get("/get-students", StudentController.getAllStudents);
router.get("/get-student/:id", StudentController.getStudentById);
router.patch("/update-student/:id", StudentController.updateStudent);
router.delete("/delete-student/:id", StudentController.deleteStudent);

module.exports = router;