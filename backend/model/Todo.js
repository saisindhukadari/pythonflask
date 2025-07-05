const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
    taskname:{  type:String,   required:true
    },
    status:{    type:Boolean,  default:false
    }
});
module.exports=mongoose.model("Todo",TodoSchema);