import React, { useState } from 'react'
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className='LoginScreen'>
        <div className="LoginScreen_background">
            <img className='LoginScreen_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <button onClick={() => setSignIn(true)} className='LoginScreen_button'>Sign In</button>

            <div className="LoginScreen_gradient"/>
        </div>

        <div className="LoginScreen_body">
            {signIn ? (<SignUpScreen />) :
            (
                <>
                    <h1>Unlimited files, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className="LoginScreen_input">
                        <form>
                            <input type="email" placeholder='Email Address' />
                            <button onClick={() => setSignIn(true)}className='LoginScreen_getStarted'>GET STARTED</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default LoginScreen