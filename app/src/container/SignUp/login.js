import React,{useState} from 'react';
import Card from '../../components/UI/Card';
import'./style.css';

const Login = () => {
    const[user,setuser]=useState({
        email:'',
        password:'',
      });
      const{email,password}=user;
      
      const onChange = e =>
      setuser({
        ...user, [e.target.name]: e.target.value
      }) 
    
      const onSubmit = e =>{
        e.preventDefaut();
        console.log("User Login");
      };
    return (
        <form onSubmit = {onSubmit} className='body'>
        <Card>
        <h1>Login User</h1>
     
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
          <input
          type='submit'
          value='Login User'
          className='btn'
        />
        </Card>
      </form>
    );
};

export default Login;