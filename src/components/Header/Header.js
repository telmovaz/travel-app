import React from "react";
import "./Header.scss";
import searchiconimage from "../../utils/search.svg";
import { connect } from 'react-redux';
import { saveText } from '../../store/actions/hotels-actions';


class Header extends React.Component {
  state = {};

  inputRef = React.createRef();

  handleFilterPrice = (event) => {
    this.props.filterHotelsPrice(event.target.value);
  };
  handleSearch = (event) => {
    this.props.filterHotels(event.target.value);
  };

  handleClick = () => {
    this.props.dispatch(saveText('new text here'));
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
  
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
              ref={this.inputRef}
            />
          </div>
        </div>

        <input type="text" className="min-price" placeholder="Min. price  $$" onChange={this.handleFilterPrice} />
          <input type="button" value="click" onClick={this.handleClick} />
          {this.props.savedText}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savedText: state.text,
  }
}

export default connect(mapStateToProps)(Header);
