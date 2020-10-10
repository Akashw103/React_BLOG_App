import React, {useReducer} from 'react';
import axios from 'axios'
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import AuthToken from './tokenAuth';
import {
    REGISTER_USER,
    LOAD_USER,
    LOGIN_USER,
    LOGOUT ,
    REGISTRATION_FAILED ,
    LOGIN_FAILED ,
    AUTH_ERROR
} from './action';


const UserAuth = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated:null,
        user:null,
        loading:true,
        error:null, 
        
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);
   /** Load User Account**/

   const loadUser = async () =>{
       if(localStorage.token){
           AuthToken(localStorage.token);
       }
       try{
        const res= await axios.get('/api/auth');
        dispatch({
            type:LOAD_USER,
            payload:res.data
        });
        loadUser();

       }catch(err){
        dispatch({type: AUTH_ERROR})
       }
   }
  
   
   
    /*Register user*/
    const registeruser = async FormData =>{
        const config = {
            header:{
                'Content-Type': 'application/json'
            }
        };
        try{
            const res = await axios.post('api/users',FormData, config);
            dispatch({
                type: REGISTER_USER,
                payload: res.data
            });

        }catch(err){
            dispatch({
                type:REGISTRATION_FAILED,
                payload:err.response.data.msg
            });
        }
    }
    return(
        <AuthContext.Provider value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            registeruser
        }}>
            {props.children}
        </AuthContext.Provider>
           
    );
};
export default UserAuth;