import React, { useState, useEffect } from 'react'
import './Login.css'
import  {NavLink} from 'react-router-dom';
import Axios from 'axios'


function Register() {
    const[userNameReg,setUserNameReg] = useState('');
    const[email,setEmail] = useState('');
    const[passwordReg,setPasswordReg] = useState('');

    const register =() =>{
        //pour le moment notre api c'est localhost:3001
        Axios.post('http://localhost:3001/register', {
            userName: userNameReg, 
            email: email,
            password: passwordReg
        }).then(()=>{
            alert('successful insert')
        });
    };


    return (
        <div className='contain1'>
            <div className='wrapper'>
                <div className='form-wrapper sign-up'>
                <form>
                    <h2 className='titre'>Sign up</h2>
                    <div className='input-group'>
                        <input type='text' name='userName' onChange={(e)=>{
                            setUserNameReg(e.target.value)
                        }} required/>
                        <label for=''>UserName</label>
                    </div>
                    <div className='input-group'>
                        <input type='email' name='email' onChange={(e)=>{
                            setEmail(e.target.value)
                        }} required/>
                        <label for=''>Email</label>
                    </div>
                    <div className='input-group'>
                        <input type='password' name='password' onChange={(e)=>{
                            setPasswordReg(e.target.value)
                        }} required/>
                        <label for=''>Password</label>
                    </div>
                    <div className='remember'>
                        <label for=''><input type='checkbox'/>In agree to the terms and condition </label>
                    </div>
                    <button type='submit' onClick={register}>Sign Up</button>
                    <div className='signUp-link'>
                        <p>Already have an account?<NavLink to='/login'className='signInBtn-link'>Sign In</NavLink></p>
                    </div>
                </form>
                </div>
        </div>
    </div>
    )
}

export default Register;