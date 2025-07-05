const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const Todo=require('./model/Todo');
const app=express();
app.use(express.json());
app.use(cors());
//mongodb://localhost:27017//TodoDB
mongoose.connect("mongodb://localhost:27017/TodoDB",
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{console.log("connection established")})
    .catch(err=>console.log("Error occured",err));

app.post("/dbaddtodo",(req,res)=>{
    const newTask=new Todo({taskname:req.body.taskname});
    newTask.save();
    res.send(newTask);
});

app.get("/dbfetchtodo",async(req,res)=>{
    const tasks=await Todo.find()
    res.json(tasks);
});

app.listen(5000,function(){
    console.log("port listening on 5000");
});