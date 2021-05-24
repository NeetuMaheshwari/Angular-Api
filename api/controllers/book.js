const mongoose = require('mongoose');
const Book = require('../models/book');


exports.createOneBook= (req,res,next)=>{
   Book
   .find({ name: req.body.name })
        .exec()
        .then(book => {
            if (book.length >= 1) {
                console.log(book)
            const error = new Error();
            error.message = 'Book Exists!';
            throw error;
            }
        })
        .then(book => {
            createBook(req).save()
                .then(book => {
                    return res.status(201).json({
                        message: 'Book was created',
                        book: book
                    });
                })
        })
        .then(result => {
            return res.status(201).json({
                message: 'Book created successfully!'
            })
        })
        .catch((error) => {
            next(error);
        });
    // createBook(req).save()
    //     .then(book => {
    //         return res.status(201).json({
    //             message: 'Book was created',
    //             book: book
    //         });
    //     })
    //     .catch(error => {
    //         next(error);
    //     });
}

exports.getBookList=(req,res,next)=>{
    Book
    .find()
    .exec()
    .then(books=>{
        return res.json({books:books})
    })
    .catch(error=>{
        next(error);
    })
};

exports.deleteBook=(req,res,next)=>{
    const bookId=req.params.bookId;
   // console.log(bookId)
    Book
    .remove({_id: bookId })
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Book deleted successfully"
        });
    })
    .catch(error=>{
        error.message="Could not delete book!";
        next(error);
    });
}


function createBook(req){
    return new Book({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name
    })
}