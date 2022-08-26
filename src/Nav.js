import React, { useEffect, useState } from 'react'
import './Nav.css'
import {useNavigate} from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavbar = () => {
    if(window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className='nav_contents'>
        <img onClick={() => history("/")}
          className='nav_logo' 
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='' />

          <img onClick={() => history("/profile")}
          className='nav_avatar' 
          src='https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg'
          alt='' />
      </div>
    </div>
  )
}

export default Nav