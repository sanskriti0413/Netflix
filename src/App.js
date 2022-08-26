import '@stripe/stripe-js';
import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import ProfileScreen from './Screens/ProfileScreen';
import Success from './Screens/Success';
import Cancel from './Screens/Cancel';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //LogIN
        dispatch(login({
          uid : userAuth.uid,
          email: userAuth.email
        }));
      }
      else{
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
        <LoginScreen/>
        ) : (
            <Switch>
              <Route exact path='/' element= {<HomeScreen />}/> 
              <Route path='/profile' element = {<ProfileScreen/>}/>
              <Route path='/success' element = {<Success/>}/>
              <Route path='/cancel' element = {<Cancel/>}/>
            </Switch>
          )
        } 
      </Router>
    </div>
  );
}

export default App;
