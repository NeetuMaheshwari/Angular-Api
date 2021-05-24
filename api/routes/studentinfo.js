const express = require('express');
const router =express.Router();
const checkAuths=require('../middleware/check-auth')

const StudentController=require('../controllers/studentDetail');

router.post('/',checkAuths.adminAuth, StudentController.insertStdntInfo)
module.exports=router;