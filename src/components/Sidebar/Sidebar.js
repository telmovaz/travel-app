import React from "react";
import "./Sidebar.scss";
import btnimage from "../../utils/more.png";
import AddHotel from "../AddHotel/AddHotel";
import preloader from "../../utils/Spin-1s-200px.gif";
import Modal from "../Modal/Modal";
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  state = {
    
  };

  showModal = () => {
      this.setState({show: true});
  }
  hideModal = () => {
      this.setState({show:false});
  }

  componentDidMount() {
    // axios
    //   .get("https://nodejs-mysql-it-academy.herokuapp.com/hotels/recommended")
    //   .then((res) => {
    //     let preloader = document.querySelector("#preloader");
    //     preloader.parentNode.removeChild(preloader);
    //     this.setState({
    //       sidebarApi: res.data,
    //     });
    //   });
    
  }

  render() {
    return (
      <div className="Sidebar">
       
        <h1>More than just hotels</h1>

        {this.props.hotels.map((element, index) => {
          
          return (
            <div key={index} className = {element.recommended ? "display-hotel" : "not-display-hotel"}>
              
              <div className="sidebar-wrapper">
                <div className="sidebar-thumb">
                  <img src={element.image} alt="" />
                </div>
                <div className="sidebar-text">
                  <div className="sidebar-text-title">{element.title}</div>
                  <div className="sidebar-text-location">
                    {element.location}
                  </div>
                  <div className="sidebar-text-price">{element.price}</div>
                </div>
                <div className="sidebar-button">
                  <img src={btnimage} alt="" />
                </div>
              </div>
            </div>
          );
        })}
        <button type="button" onClick={this.showModal}>Add Hotel</button>
        <Modal show={this.state.show} handleClose={this.hideModal}>
            <div>
        <AddHotel />
        </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels
  }
}

export default connect(mapStateToProps)(Sidebar);
