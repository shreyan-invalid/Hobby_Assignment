import {auth, provider} from '../../Firebase';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {selectUser, setUser} from '../../Slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';

import React from 'react';

function Login() {

    const history= useHistory();
    const user= useSelector(selectUser);
    const dispatch= useDispatch();
   

    const signInWithGoogle = e => {
        e.preventDefault();

        auth.signInWithPopup(provider).then((result)=>{
            history.push('/')
            dispatch(setUser({user: result}))
        })
        .catch(error => alert("Oops! We coudn't get you logged in. Please try again!"))
    }
    if(!user){
        return (
            <div className="login">
                <button onClick={signInWithGoogle}>Sign in with Google!</button>
            </div>
        )
    }
   
}

export default Login
