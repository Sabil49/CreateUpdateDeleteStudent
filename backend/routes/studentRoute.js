const router = require("express").Router();

const { createStudent, getAllStudent, getSingleStudent, updateStudent, deleteStudent } = require("../controllers/studentControllers");

router.route("/createStudent").post(createStudent);
router.route("/updateStudent/:id").put(updateStudent);
router.route("/getStudent/:id").get(getSingleStudent);
router.route("/allStudents").get(getAllStudent);
router.route("/deleteStudent/:id").delete(deleteStudent);


module.exports = router;

