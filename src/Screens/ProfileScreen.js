import './ProfileScreen.css';
import Nav from '../Nav';
import React, { useState } from 'react'
import {useSelector} from "react-redux"
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

// payment page start
import {loadStripe} from '@stripe/stripe-js'


let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.React_App_Stripe_Key);
    }
    return stripePromise;
};
// payment page end


function ProfileScreen() {

    const [isLoading0, setLoading0] = useState(false);
    const [isLoading1, setLoading1] = useState(false);
    const [isLoading2, setLoading2] = useState(false);
    // payment page start
    const item = [{
        price: "price_1LDnnDSGySChMEHWFJs1v4qC",
        quantity:1
    },
    {
        price: "price_1LDnp2SGySChMEHWwQWBDLLJ",
        quantity:1
    },
    {
        price: "price_1LDnqlSGySChMEHWVvCg7Xvd",
        quantity:1
    }];

    const checkoutOptions = (e) => {
        const obj = {
            lineItems: [item[e]],
            mode: "payment",
            successUrl: `${window.location.origin}/success`,
            cancelUrl: `${window.location.origin}/cancel`
        }
        return obj
    }
    const redirectToCheckout = async (e) => {
        if(e === 0){
            setLoading0(true);
        }
        else if(e === 1){
            setLoading1(true);
        }
        else{
            setLoading2(true);
        }
        console.log("redirectToCheckout")
        const stripe = await getStripe()
        const {error} = await stripe.redirectToCheckout(checkoutOptions(e))
        console.log("Stripe Checkout Error", error)


        if(e === 0){
            setLoading0(false);
        }
        else if(e === 1){
            setLoading1(false);
        }
        else{
            setLoading2(false);
        }
    }
    // payment page end

    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg" alt="" />

                <div className="profileScreen_details">
                    <h2>{user.email}</h2>

                    <div className="profileScreen_plans">
                        <h3>Plans</h3>
                        <div>
                            <div className='plans'>
                                <h4>Premium Plan</h4>
                                <button onClick={()=>{redirectToCheckout(2)}} disable = {isLoading2}>{isLoading2 ? "Loading..." : "Subscribe"}</button>
                            </div>
                            <div className='plans'>
                                <h4>Standard Plan</h4>
                                <button onClick={()=>{redirectToCheckout(1)}} disable = {isLoading1}>{isLoading1 ? "Loading..." : "Subscribe"}</button>
                            </div>
                            <div className='plans'>
                                <h4>Basic Plan</h4>
                                <button onClick={()=>{redirectToCheckout(0)}} disable = {isLoading0}>{isLoading0 ? "Loading..." : "Subscribe"}</button>
                            </div>
                        </div>

                        <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen