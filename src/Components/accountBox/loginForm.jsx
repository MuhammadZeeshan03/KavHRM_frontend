import React, { useState ,useContext} from "react";
import jwt_decode from "jwt-decode";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormError,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import axios from "axios";
import { AccountContext } from "./accountContext";
import { Link, Redirect, Route } from "react-router-dom";
import RegisterationForm from "./RegisterationForm";

function LoginForm(props) {

  const [inpval,setInpval]=useState({
    username:"",
    password:""
})

let [ authTokens, setAuthTokens] = useState(() => (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) :  null))
let [user, setUser] = useState(()=> (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) :  null))

let contextData = {
  user:user,
}
  const { switchToSignup, switchToRegister } = useContext(AccountContext);
  const [error, setError] = useState(null);
const loginUser = async (e)=>{
  e.preventDefault()
  console.log("Form Submitted")
  let response = await fetch('http://127.0.0.1:8000/Kavtech/login/',{
    method:'POST',
    headers:{

      'Content-Type':'application/json'
    },
    body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
  })
  let data =await response.json()
  if (response.status === 200){
            setAuthTokens(data)
            setUser(data.access)
        console.log('data:', data)
        localStorage.setItem('authTokens', JSON.stringify(data))
        alert("Login Successs!!!");
       
  }else{
            alert("Invalid User or Password !")
    
  }
 
  }

// Logout user
let logoutUser = () => {
  setAuthTokens(null)
  setUser(null)
  localStorage.removeItem('authTokens')
}
  return (
    <BoxContainer>
      <FormError>{error ? error : ""}</FormError>
       

      <FormContainer onSubmit={loginUser}>
           <Input
            name="email"
            placeholder="Email"
            // onChange={getData}
                      />
           <Input
            name="password"
            type="password"
            placeholder="Password"
            // onChange={getData}
        />

         <MutedLink href="#">Forgot Password?</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" >
          Login
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>

    </BoxContainer>
  );
}
export default LoginForm