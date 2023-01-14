import  mongoose, { mongo } from 'mongoose'; 

const shcema = mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"User",
    },
    content:{
        type:String,
        trim :true
    },
    chat:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"Chat",
    },
   
});

const Messages = mongoose.model('Messages',shcema); 
export default Messages; 

