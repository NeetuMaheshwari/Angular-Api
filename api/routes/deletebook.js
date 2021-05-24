const express=require('express');
const router=express.Router();
const checkAuths=require('../middleware/check-auth');
const BookController=require('../controllers/book');

router.delete('/:bookId',checkAuths.adminAuth,BookController.deleteBook);
module.exports=router;