import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../TopBar/TopBar.scss';
import contactus from '../../utils/letters.png';

class TopBar extends React.Component {

    handleClick = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="topbar">
            <nav className="nav-logo">
                <Link to ='/' style={{textDecoration: 'none'}}><span className="logotype">TravelApp</span></Link>
               
            </nav>
            <nav className="nav-more">
                     <Link to ='/register' style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Register</Link>
                <input type="button" className='login-button' value="Login" onClick={this.handleClick}></input>
                <Link to ='/contact-us' style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}><span className="contact-us-image"><img src={contactus} alt='contact us'/></span></Link>
            </nav>
            </div>
        )
    }
}

export default withRouter(TopBar);