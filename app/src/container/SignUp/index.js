import React,{useContext, useEffect, useState} from 'react';
import Card from '../../components/UI/Card';
import'./style.css';
import AutContext from '../../components/auth/AuthContext'


const SignUp = (props) => {
  const authContext = useContext(AutContext);
  const { registeruser , isAuthenticated } = authContext;

useEffect(()=>{
  if(isAuthenticated){
    props.history.push("/")
  } 
},[isAuthenticated,props.history]);

  const[user,setuser]=useState({
    name:'',
    email:'',
    password:'',
    cpassword:''
  });
  const{name,email,password,cpassword}=user;
  
  const onChange = e =>
  setuser({
    ...user, [e.target.name]: e.target.value
  }) 

  const onSubmit = e =>{
    e.preventDefaut();
    registeruser({
      name,
      email,
      password
    })
  };

  return(
    <Card>
    <form onSubmit = {onSubmit} className='body'>
      <h1>Register As New User</h1>
      <div className='from-group'>
        <label>Enter Name</label>
        <input
          className='form-control'
          type='text'
          name='name'
          value={name}
          required
          onChange={onChange}
        />
      </div>
      <div className='from-group'>
        <label>Enter Email</label>
        <input
          className='form-control'
          type='email'
          name='email'
          value={email}
          required
          onChange={onChange}
        />
      </div>
      <div className='from-group'>
        <label>Enter Password</label>
        <input
          className='form-control'
          type='password'
          name='password'
          value={password}
          required
          onChange={onChange}
        />
      </div>
      <div className='from-group'>
        <label>Confirm Password</label>
        <input
          className='form-control'
          type='password'
          name='cpassword'
          value={cpassword}
          required
          onChange={onChange}
        />
      </div>
      <input
        type='submit'
        value='Register Now'
        className='btn btn-success'
      />
      

   
   
    </form>
    </Card>  
   )
 
 }



export default SignUp;