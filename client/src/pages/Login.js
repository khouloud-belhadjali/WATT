import React,{useState, useEffect} from 'react';
import './Login.css';
import { NavLink} from 'react-router-dom';
import Axios from 'axios'

function Login() {
    const[userName,setUserName] = useState('');
    const [password, setPassword] = useState ('');

    const [loginStatus, setLoginStatus] = useState ('');
        const login = (e) => {
            e.preventDefault();
            Axios.post("http://localhost:3001/login", {
              userName: userName,
              password: password,
            }).then((response) => {
              if(response.data.message){
                setLoginStatus(response.data.message);
              }else{
                setLoginStatus("Welcome:"+response.data[0].email);
              }
            })
          }
        
        
    return (
        <div className='contain1'>
            <div className='wrapper'>
            <div className='form-wrapper sign-in'>
                <form>
                    <h2 className='titre'>Login</h2>
                    <div className='input-group'>
                        <input type='text' name='userName' onChange = { (e) => {
                                setUserName (e.target.value)}} required/>
                        <label for=''>UserName</label>
                    </div>
                    <div className='input-group'>
                        <input type='password' name ='password' onChange = { (e) => {
                        setPassword (e.target.value)}} required/>
                        <label for=''>Password</label>
                    </div>
                    <div className='remember'>
                        <label for=''><input type='checkbox'/>Remember me</label>
                    </div>
                    <button className='btn-log' type='submit' onClick={login}>Login</button>
                    <div className='signUp-link'>
                        <h1 className='remarque'>{loginStatus}</h1>
                        <p>Don't have an account?<NavLink to='/Register' className='signUpBtn-link'>Sign Up</NavLink></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Login;
