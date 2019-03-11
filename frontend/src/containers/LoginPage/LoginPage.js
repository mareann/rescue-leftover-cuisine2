import React, { Component } from 'react';
import SignUp from '../../components/SignUp/SignUp.js';
import SignIn from '../../components/SignIn/SignIn.js';
import Footer from '../../components/Footer/Footer.js'
import LogInPageHeader from '../../components/LogInPageHeader/LogInPageHeader.js';
import ThankYouCard from '../../components/ThankYouCard/ThankYouCard.js';
import './LoginPage.css';
//import axios from 'axios';

class LoginPage extends Component {
  
 renderLoginOrThankYouCard = () => {
   if (sessionStorage.jwt) {
     return (
      <div className="row">
        <ThankYouCard/>
      </div>
     )
   } else {
     return (
      <div className="row">
        <div className="column loginColumnOne"><SignUp/></div>
        <div className="column loginColumnTwo"><SignIn/></div>
      </div>
     )
   }
 }

//  {this.renderLoginOrThankYouCard()}

  render() {
    return(
      <div className="loginPage container-fluid">
      <div className="row">
        <LogInPageHeader/>
      </div>
      <div className="topLoginImage">
        <div className="loginCardWrapper">
          <div className="column mx-auto thankYouColumn"> 
            <ThankYouCard/>
          </div>
          <div className="loginFooter row">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
      

    )
  }
}

export default LoginPage; 