import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "../LoginView/LoginView.scss";
import { url } from '../../utils/api';

class AddHotelView extends React.Component {
  addHotel = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    for (let field of form) {
      console.log(field);
    }

    const token = localStorage.getItem('token');

    const options = {
      headers: {
        "Content-type": "multipart/form-data",
        'x-access-token': token
      },
    };
    axios
      .post(url + "/hotels", form, options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container">
        <h1>Add new hotel</h1>
        <form onSubmit={this.addHotel}>
          <label>title:</label>
          <input type="text" name="hotelTitle" required></input>
          <br />
          <br />
          <label>image:</label>
          <input type="file" name="hotelImage" required></input>
          <br />
          <br />
          <label>Price:</label>
          <input type="text" name="hotelPrice" required></input>
          <label>type:</label>
          <select type="select" name="hotelType" required>
          <option selected value="normal">Normal</option>
          <option value="plus">plus</option>
          <option value="premium">premium</option>
          </select>
          <label>location:</label>
          <input type="text" name="hotelLocation" required></input>
          <input type="submit" value="add hotel"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(AddHotelView);
