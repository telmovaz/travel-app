import React from 'react';
import './MainContainer.scss';
import data from '../../utils/data/data.js';
import Sidebar from './../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import HotelView from '../../views/HotelView/HotelView';


const MainContainer = (props) => {
  
    
    return (
      <div className="main-container">
       
        <div className="tools" style={{width: '100%'}}>
        <input type="button" value={props.sort ? 'A-Z' : 'Z-A'} onClick={props.switchSort} />
        <form>
        <select onChange={event => {props.convertPrice(event.target.value)}}>
          <option>USD</option>
          <option>EUR</option>
          <option>PLN</option>
          <option>CHF</option>
        </select>
        </form>
        </div>
        {props.data.map(element => {
          return (
            <Link to={"hotel/" + element.id}>
            <div className="hotel" key={element.id}>
              
              <img src={element.image} alt="alt text" />
              <div className="hotel__info">
                <span className="hotel-name">{element.title}</span>
          <p>{element.location}</p>
          <p>{element.price}</p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    );
  }


export default MainContainer;