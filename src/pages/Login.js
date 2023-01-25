import React from 'react';
import './Login.css';
import { NavLink} from 'react-router-dom';
function Login() {
    return (
        <div className='contain1'>
            <div className='wrapper'>
            <div className='form-wrapper sign-in'>
                <form>
                    <h2 className='titre'>Login</h2>
                    <div className='input-group'>
                        <input type='text' required/>
                        <label for=''>UserName</label>
                    </div>
                    <div className='input-group'>
                        <input type='password' required/>
                        <label for=''>Password</label>
                    </div>
                    <div className='remember'>
                        <label for=''><input type='checkbox'/>Remember me</label>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='signUp-link'>
                        <p>Don't have an account?<NavLink to='/Register' className='signUpBtn-link'>Sign Up</NavLink></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Login;



