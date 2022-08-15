
import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
export function Register(props) {
  let [user, setUser] = useState(()=> (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) :  null))

  const switchToRegister = () => {
   
    <Route>{user ?  switchActive("register") : <Redirect to="/login" />} </Route> 
   
   };
const contextValue = {
 
    switchToRegister,
   
  };

  return (
    <>
     <AccountContext.Provider value={contextValue}>
    
      {active === "register" && <RegisterationForm />}      

    </AccountContext.Provider>
    </>
    );
  }