 import mongoose, { mongo } from 'mongoose'; 
 const chatm = mongoose.Schema({
    chatName:{
        type:String,
        trim:true
    },
    Group:{
        type:Boolean,
        default:false
    },
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ],
    topMessge:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Messages"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"User",
    },
 });
 const CreateChat = mongoose.model('Chat',chatm); 
 export default CreateChat ; 