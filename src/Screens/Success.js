import './Success.css';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';

function Success() {

    const history = useNavigate();

    const buttonClick = () => {
        history("/")
    }

  return (
    <div className='success'>
        <Nav/>
        <div className='success-inner'>
            <h2>Thank you</h2>
            <p>For Subscribing😃</p>
            <button onClick = {buttonClick}> Go Home </button>
        </div>
    </div>
  )
}


export default Success