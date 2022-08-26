import React from 'react'
import {useNavigate} from 'react-router-dom'
import Nav from '../Nav';
import './Cancel.css'

function Cancel() {
    const history = useNavigate();

    const buttonClick = () => {
        history("/profile")
    }


  return (
    <div className='cancel'>
        <Nav/>
        <div className='cancel-inner'>
            <h2>Payment Cancelled☹️</h2>
            <button onClick={buttonClick}>Try Again</button>
        </div>
    </div>
  )
}

export default Cancel