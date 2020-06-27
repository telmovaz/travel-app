import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../TopBar/TopBar.scss";
import { connect } from "react-redux";

class TopBar extends React.Component {
  state = {
    scrollClass: "",
  };

  handleScroll = () => {
    let sticky = 130;
    window.pageYOffset >= sticky
      ? this.setState({ scrollClass: "sticky" })
      : this.setState({ scrollClass: "" });
  };
  handleClick = () => {
    this.props.history.push("/login");
  };
  handleLogoutClick = () => {
    localStorage.removeItem("token");
    this.props.verifyUserStatus();
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { isAuthorized, user } = this.props;
    return (
      <nav id="nav" className={this.state.scrollClass}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favourite" className="nav-link">
          Favourites
        </Link>
        <Link to="/my-hotels" className="nav-link">
          My Hotels
        </Link>
        

        {!isAuthorized && (
          <div>
            <Link to="/register" className="button secondary">
              Register
            </Link>
            <Link to="/login" className="nav-link">login</Link>
          </div>
        )}

        

        {isAuthorized && (
          <div>
            <Link to="/add-hotel" className="nav-link">Add hotels</Link>
          <span className="button primary">♥ {this.props.counter}</span>
            <input
              type="button"
              value="Logout"
              onClick={this.handleLogoutClick}
            />
            <div className="user-profile">{user.username}</div>
          </div>
        )}
        
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.favourites.length
})

export default withRouter(TopBar) && connect(mapStateToProps)(TopBar);

