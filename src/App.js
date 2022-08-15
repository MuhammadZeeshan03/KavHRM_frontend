import React , { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { AuthProvider} from './Components/accountBox/accountContext'
import PrivateRoute from './pages/Home/PrivateRoute'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import TestPage from './Components/accountBox/TestPage';
import Services from './pages/Service/Services';
import Navbar from './Components/Navbar/Navbar';
import Courses from './pages/Courses/Courses';
// import Account from './Components/Account';
import styled from "styled-components";
import { FooterContainer } from './Components/Footer/containers/footer'
import { AccountBox } from "./Components/accountBox";
import RegisterationForm from './Components/accountBox/RegisterationForm';

const AppContainer = styled.div`
  
  width: 100%;
  padding-left: 20px;
  display: -webkit-flex;
 
  @media only screen and (max-width: 727px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
   
    height: 100%;
    display: flex;
    flex-direction: column;
    

}
 
`;

const App = () => {
 
  return (
    <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/Home" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>

        </Route>
        <Route path="/Courses" exact>
          <Courses />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
     
          <PrivateRoute path="/RegisterationForm" exact>
            <RegisterationForm />
          </PrivateRoute>
        
        

        <Route path="/TestPage" exact>
          <TestPage />
        </Route>


        <AppContainer>
      <AccountBox />
    </AppContainer>
      </Switch>
    </main>

   
    <FooterContainer />
   </Router>
  );
}
export default App;
