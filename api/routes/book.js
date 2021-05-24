const express = require('express');
const router=express.Router();
const checkAuths=require('../middleware/check-auth');

const BookController= require('../controllers/book');

router.post('/',checkAuths.adminAuth,BookController.createOneBook);
// router.get('/', BookController.getBookList);
module.exports = router;