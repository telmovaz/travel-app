import React from "react";
import axios from 'axios';

class RegisterView extends React.Component {

  register = (event) => {
      event.preventDefault();

      const form = new FormData(event.target);

      for (let field of form) {
        console.log(field)
      }

      const url= 'https://nodejs-mysql-it-academy.herokuapp.com/';

      const options = {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }
      axios.post(url + 'register', form, options).then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.register}>
          <label>Username:</label>
          <input type="text" name="username" required></input>
          <label>Email:</label>
          <input type="email" name="email" required></input>
          <label>Password:</label>
          <input type="password" name="password" required></input>
          <input type="submit" value="Register"></input>
        </form>
      </div>
    );
  }
}

export default RegisterView;
