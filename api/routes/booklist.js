const express = require('express')
const router = express.Router();

const BookController = require('../controllers/book');

router.get('/', BookController.getBookList);
module.exports = router;