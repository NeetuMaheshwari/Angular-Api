const mongoose=require('mongoose');

const studentDetailSchema=mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
name: {type:String,required:true},
rollNumber: {type:Number, required:true},
gradeSection: {type:String,required:true},
book: {type:mongoose.Schema.Types.ObjectId,ref:'Book',required:false}
});

module.exports=mongoose.model('StudentDetail',studentDetailSchema);