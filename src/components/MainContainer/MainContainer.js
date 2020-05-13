import React from 'react';
import './MainContainer.scss';
import Sidebar from './../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import Hotel from '../Hotel/Hotel';


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
        {props.data.map((element, index) => {
          return (
            <Hotel data={element} key={index}/>
          );
        })}
      </div>
    );
  }


export default MainContainer;