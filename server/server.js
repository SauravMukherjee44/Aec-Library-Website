import express from "express";
import path from 'path';
import mongoose from "mongoose";
import donateForm from "./modules/donate.js";
let __dirname = path.resolve();
let connection_url="mongodb+srv://ace:ace@cluster0.sosrf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
let app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
let PORT = process.env.PORT || 5500;


app.get("/",async(req,res)=>{
    // try{
        res.sendFile(__dirname+"/index.html");
        // let donateData= await donateForm.find();
        // res.status(200).json(donateData);
    // }catch{
    //     res.status(404).json({message : error.message});
    // }
   
});

app.get("/public/donate-book.html",(req,res)=>{
    let donatedata=req.body;
    let newData=new donateForm(donatedata);
    res.sendFile(__dirname+"/public/donate-book.html",{data:donateForm});
});
app.post("/public/donate-book.html",async (req,res)=>{
    let donatedata=req.body;
    let newData=new donateForm(donatedata);
    try{
       await newData.save();
       res.location(__dirname+"/index.html");
       //res.status(201).json(newData);
    }catch{
        res.status(401).json({error : error.message})
    }
    res.sendFile(__dirname+"/public/donate-book.html");
});

mongoose.connect(connection_url,{useNewUrlParser : true ,useUnifiedTopology :true})
.then(()=>app.listen(process.env.PORT || PORT ,()=>console.log("server is running on "+ `${PORT}`)))
.catch((error)=>console.log(error.message));

