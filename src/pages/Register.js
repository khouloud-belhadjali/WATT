import React from 'react'
import './Login.css'
import  {NavLink} from 'react-router-dom';

function Register() {
    return (
        <div className='contain1'>
            <div className='wrapper'>
                <div className='form-wrapper sign-up'>
                <form>
                    <h2 className='titre'>Sign up</h2>
                    <div className='input-group'>
                        <input type='text' required/>
                        <label for=''>UserName</label>
                    </div>
                    <div className='input-group'>
                        <input type='email' required/>
                        <label for=''>Email</label>
                    </div>
                    <div className='input-group'>
                        <input type='password' required/>
                        <label for=''>Password</label>
                    </div>
                    <div className='remember'>
                        <label for=''><input type='checkbox'/>In agree to the terms and condition </label>
                    </div>
                    <button type='submit'>Sign Up</button>
                    <div className='signUp-link'>
                        <p>Already have an account?<NavLink to='/logging'className='signInBtn-link'>Sign In</NavLink></p>
                    </div>
                </form>
                </div>
        </div>
    </div>
    )
}

export default Register;