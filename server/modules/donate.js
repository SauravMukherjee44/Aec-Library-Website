import  mongoose  from "mongoose";

let donateSchema=mongoose.Schema({
    name : String,
    email :String,
    contect :String,
    address:String,
    city :String,
    state : String,
    Zip :String,
    CreatedAt:{
        type: Date,
        default:new Date()
    }
});

let donateForm=mongoose.model('donateForm' ,donateSchema);
export default donateForm;
