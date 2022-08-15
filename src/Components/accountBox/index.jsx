import React, { useState } from "react";
import styled from "styled-components";
import { Redirect, Route } from "react-router-dom";
import  LoginForm  from "./loginForm";
import  RegisterationForm  from "./RegisterationForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signup";
import { FormContainer } from "./common";
import illustration from "../assets/images/illus1.svg";
import illustration2 from "../assets/images/illus2.svg";
const BoxContainer = styled.div`
  //  margin-left: auto;
  width: 399px;
    min-height: 524px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 35px;
    background-color: #fff;
    box-shadow:3px 3px #0062cc, -1em 0 0.4em #b8c9dc;
    // 0 0 2px rgba(15, 15, 15, 0.28);
    //  3px 3px #0062cc, -1em 0 0.4em #b8c9dc;
    position: relative;
    overflow: hidden;
    margin-top: 33px;
    margin-bottom: 30px;
    @media only screen and (width: 1496px) {
    
      width: 399px;
      
  
  }
    @media only screen and (min-width: 727px) {
    
      width: 450px;
      
  
  }
  
  @media only screen and (min-width: 932px) {
  
    width: 422px;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    

}

    
`;
const BoxContainer_RF = styled.div`
   margin-right: auto;
  width: 481px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin-top:30px;
  margin-bottom:30px;
`;
const Image = styled.img`
  
    // height: 900px !important;
    margin-right: auto;
  width: 300px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
 
  position: relative;
  overflow: hidden;
  margin-top:30px;
  margin-bottom:30px;
  @media only screen and (max-width: 727px) {
    
      display:  none;
      
  
  }



`;
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(to right,#0062cc,#0062cc);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  padding-left: 20px;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  padding-left: 60px;

  margin-top: 39px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(20deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(20deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  let [user, setUser] = useState(()=> (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) :  null))
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingEffect = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    playExpandingEffect();
    switchActive("signup");
  };

  const switchToSignin = () => {
    playExpandingEffect();
    switchActive("signin");
  };
  const switchToRegister = () => {
    playExpandingEffect();

   <Route>{user ?  switchActive("register") : <Redirect to="/login" />} </Route> 
  
  };
  
  const contextValue = {
    switchToSignup,
    switchToSignin,
    switchToRegister,
    playExpandingEffect,
  };

  return (
   
   
    <AccountContext.Provider value={contextValue}>
    
      <BoxContainer>
        <TopContainer>
          <BackDrop
            variants={backdropVariants}
            transition={expandingTransition}
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
          />
          {active === "signin" && (
            <>
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
              </HeaderContainer>
              <SmallText>Please sign-in to continue!</SmallText>
            </>
          )}
          {active === "signup" && (
            <>
              <HeaderContainer>
                <HeaderText>Create </HeaderText> 
               <HeaderText>Account</HeaderText>
              </HeaderContainer>
              <SmallText>Please sign-up to continue!</SmallText>
            </>
          )}
          {active === "register" && (
            <>
              <HeaderContainer>
                <HeaderText>Register </HeaderText> 
               <HeaderText>Yourself First !</HeaderText>
              </HeaderContainer>
              <SmallText>Please Register to continue!</SmallText>
            </>
          )}
          
          
        </TopContainer>
        <InnerContainer>
        {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}    
          {active === "register" && <RegisterationForm />}      
  
        </InnerContainer>
        
      </BoxContainer>
      <Image src={illustration} />    
      <Image src={illustration2} />        
    </AccountContext.Provider>
    
   
  );
}
