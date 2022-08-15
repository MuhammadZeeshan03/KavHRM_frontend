import { findAllByDisplayValue } from "@testing-library/react";
import React, {useContext,useState} from "react";
import { Redirect, Route } from "react-router-dom";
import AccountContext from "../../Components/accountBox/accountContext";
const PrivateRoute = ({children, ...rest}) => {
  let [user, setUser] = useState(()=> (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) :  null))

  console.log("Before")
  console.log(user.token.access)

//  console.log(user.token.access)
// if (user.token.access === "user" && authenticated) return <Redirect to="/RegisterationForm" />;
  // else if (user.token.access === !authenticated) return <Redirect to="/login" />;
if (user.token.access){
  user= false
  console.log(user)
}


  // const authenticated = false
    return (
    
    <>
      <Route {...rest}>{user ? <Redirect to="/Home" /> : <Redirect to="/RegisterationForm" />} </Route> 
  
    </>
      
    )
  }

export default PrivateRoute