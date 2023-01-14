

import './sign.css';
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  
  const navigate = useNavigate();
  const toast = useToast();
  const [lgn, setlgn] = useState({name:'',email:'',password:'',pic:''});

const chnge = (e) =>{
    const{name,value} = e.target;
       setlgn(preValue=>{
        return {
			...preValue,
            [name] : value
        }
       })
       
  }


  const submitHandler = async (e) => {
	 e.preventDefault(); 
	if (!lgn.email || !lgn.password || !lgn.name) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    
      return;
    }

	 const {name,email, password,pic} = lgn;
     if(lgn.email!=="" && lgn.password!=="" && lgn.name){
        const res = await fetch('http://localhost:5000/api/user/register',{
          method: "POST",
          headers : {
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,
            email,
            password,
            pic
          })
        });
        const dat = await res.json();
		if(dat.success){
			  toast({
        title: "Register Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
		}
		else{
toast({
        title: "Error Occured!",
        // description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

		}

     navigate('/login'); 
}
		else{
toast({
        title: "Error Occured!",
        // description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

		}

}



  return (

    <>

    <section className='main'>
	  <div className='second'>

      <div className="forimg">
        <img
          src={require("./picforsignup.jpg")}
          className="img-fluid"
          alt="nothing"
        ></img>
      </div>
      <div className="detailmain">
        
        <text>Name</text>
       <input  name='name' type='text' placeholder="Enter your Name" required='required' value={lgn.name} onChange={chnge}></input>
        <text>Email</text>
     <input name="email" type='email' required="required" value={lgn.email} placeholder='Enter you Email'  onChange={chnge}/>
        <text>Password</text>
       <input name="password" type='password' required="required"  value = {lgn.password} placeholder='**********' onChange={chnge}/>

        <input type="file" placeholder="Put ur file here"   value = {lgn.pic} onChange={chnge}></input>
        <button onClick={submitHandler} >Register</button>
        <p>
          Alredy Signed-Up ?
          <span  onClick={()=> navigate('/login')}
            style={{ color: " rgb(92, 92, 200)", cursor: "pointer" }}
          >
           Login here
          </span>
        </p>
      </div>
         </div>
         </section>
    </>
  );
};

export default  Register ;
