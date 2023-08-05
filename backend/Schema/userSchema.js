import mongoose from "mongoose"


const user = mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    },
    
});

export default mongoose.model("users", user);