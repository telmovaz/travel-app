import React from "react";
import "./Header.scss";
import searchiconimage from "../../utils/search.svg";


class Header extends React.Component {
  state = {};

  handleFilterPrice = (event) => {
    this.props.filterHotelsPrice(event.target.value);
  };
  handleSearch = (event) => {
    this.props.filterHotels(event.target.value);
  };

  
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-icon">
            <img src={searchiconimage} alt="" />
          </div>
          <div className="header-input">
            <input
              type="text"
              className="search-field"
              placeholder="Enter location"
              onChange={this.handleSearch}
            />
          </div>
        </div>

        <input type="text" className="min-price" placeholder="Min. price  $$" onChange={this.handleFilterPrice} />
      </div>
    );
  }
}

export default Header;
