import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../TopBar/TopBar.scss";


class TopBar extends React.Component {

  state = {
    scrollClass: '',
  }

  

  handleScroll = () => {
    
    let sticky = 130;    
    window.pageYOffset >= sticky ? this.setState({scrollClass: 'sticky'}) : this.setState({scrollClass: ''});
    
    
  }
  handleClick = () => {
    this.props.history.push("/login");
  };
  handleLogoutClick = () => {
    localStorage.removeItem("token");
    this.props.verifyUserStatus();
  };

  componentDidMount() {
    
      window.addEventListener('scroll', this.handleScroll)
    
  }

  render() {
    const { isAuthorized, user } = this.props;
    return (
      <nav id='nav' className={this.state.scrollClass}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favourite" className="nav-link">Favourites</Link>
        <Link to="/my-hotels" className="nav-link">
          My Hotels
        </Link>

        {
          !isAuthorized && (
            <div>
              <Link to="/register" className="button secondary">
                Register
              </Link>
              <input
                type="button"
                value="Login"
                className="button primary"
                onClick={this.handleClick}
              />
            </div>
          )
        }

        {
          isAuthorized && (
            <div>
              <Link to="/add-hotel">Add hotels</Link>
              <input 
                type="button"
                value="Logout" 
                onClick={this.handleLogoutClick}
              />
              <div className="user-profile">
                {user.username}
              </div>
            </div>
          )
        }

        
      </nav>
    );
  }
}

export default withRouter(TopBar);
