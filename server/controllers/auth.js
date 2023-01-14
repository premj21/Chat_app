import User from '../models/Userdata.js';
import generateToken from '../config/generateToken.js';
import bcrypt from 'bcrypt';


const userRegister = async(req,res,next)=>{
    try {
           const {name,email,password,pic} = req.body; 
   const user = await User.findOne({email});
   if(user) return res.status(400).json({message:"User Alredy Exist !",success:false});
  const hhh = await User.create({
        name,email,password,pic
    });
    if(hhh){
        res.status(201).json({
            message:'Registerd Successfully',
            token:generateToken(hhh._id)
            ,success:true
        });
    }
    else{
      
        return res.status().json({
            message:"Invalid Credential",
            token:generateToken(hhh._id)
            ,success:false
        });
    }

    } catch (error) {
      console.log(error);
    }
}

const userlogin = async(req,res,next)=>{

    try {
           const {email,password} = req.body; 
   const user = await User.findOne({email});
   if(!user) return res.status(400).json({message:"Invalid Credential !",success:false});

  const isit =  await bcrypt.compare(password,user.password);

   if(!isit) return res.status(400).json({
    message:"Invalid Credentail"
    ,success:false

   });
  res.status(201).json({
    message:"Login Successfully",
    success:true,
    user:user,
    token:generateToken(user._id)
  });
    } catch (error) {
      console.log(error);
    }
};



const allUsers = async(req,res,next) =>{
  const keyword = req.query.search ?{
     $or:[
      {name:{$regex:req.query.search,$options:"i"}},
      {email:{$regex:req.query.search,$options:"i"}},
     ]
  }:{};
  const usres = await (await User.find(keyword));
  res.send(usres); 
  console.log(keyword);  
}

export {userRegister,userlogin,allUsers}; 