import React from "react";
import '../ContactUsView/ContactUsView.scss';


class ContactUsView extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <h1>Contact us</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label><br /><br />
          <label>
            Email:
            <input type="text" name="email" />
          </label><br /><br />
          <label>
            Message:
            <input type="textarea" name="message" /><br /><br />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default ContactUsView;
