const mongoose = require('mongoose');
const studentDetail = require('../models/studentDetail');
const Student = require('../models/studentDetail');

exports.insertStdntInfo= (req,res,next)=>{
    insertStudentInfo(req)
    .save()
    .then(stDetail =>{
        return res.status(201).json({
            message:"Student record has been added",
            studentInfo:stDetail
        });
        })
        .catch(error =>{
            console.log(error)
            next(error);
        });
}

exports.getStudentInfo=(req,res, next) =>{
    Student
    .find()
    .populate('book')
    .exec()
    .then(studentDetails =>{
        return res.json({studentDetails:studentDetails})
    })
    // .then(books=>{
    //     return res.json({books:books})
    // })
    .catch(error =>{
        error.message=error;
        next(error)
    })
}


function insertStudentInfo(req) {
    return new studentDetail({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        rollNumber: req.body.rollNumber,
        gradeSection: req.body.gradeSection,
        book :req.body.book
    })
}