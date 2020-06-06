import React from 'react';
import './Login.css';
import  { useAuth } from './useAuth';

const Login = () => {
    const auth = useAuth();
    const handleSignIn = () => {
        auth.signInWithGoogle().then(res => {
            // redirecting the page to review when the response is successful
            window.location.pathname = '/review';
        });
    }
    const handleSignOut = () => {
        auth.signOutFromGoogle().then(res => {
            window.location.pathname = '/review';
        })
    }
    return (
        <div>
            <h1>This is a log in form</h1>
            {auth.user ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleSignIn}>Sign In</button>}
        </div>
    );
};

export default Login;