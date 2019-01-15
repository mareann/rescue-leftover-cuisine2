import React, { Component } from 'react';
import "./LoginPage.css"
import LogoHeader from "./../LogoHeader/LogoHeader.js"

class LoginPage extends Component {

  handleInputChange(event) {
      this.setState({ [event.target.name]: event.target.value });
      console.log("handle change", event.target);
  }

  render() {
      return (
        <div className="wrapper">
          <LogoHeader />
          <div className="pageHeaderDiv">
          </div>
        </div>
      );
    }
}

export default LoginPage; 