import mongoose from "mongoose"


const user = mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    },
    status:{
        type: String,
        enum:[ 'active', 'inactive'],
        default: 'active',
    },
    dateCreated: Date,
    dateUpdated: Date,

    
});

export default mongoose.model("users", user);