const mongoose=require('mongoose');

const bookSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String,require:true}
});

module.exports=mongoose.model('Book',bookSchema);