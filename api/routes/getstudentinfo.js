const express = require('express');
const router = express.Router();

const StudentController=require('../controllers/studentDetail')
router.get('/',StudentController.getStudentInfo);
module.exports=router;