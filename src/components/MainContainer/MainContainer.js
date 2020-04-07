import React from 'react';
import './MainContainer.scss';
import data from '../../utils/data/data.js';
import Sidebar from './../Sidebar/Sidebar'

const MainContainer = (props) => {
  
    
    return (
      <div className="main-container">
       
        <div className="tools" style={{width: '100%'}}>
        <input type="button" value={props.sort ? 'A-Z' : 'Z-A'} onClick={props.switchSort} />
        </div>
        {props.data.map(element => {
          return (
            <div className="hotel">
              
              <img src={element.image} alt="alt text" />
              <div className="hotel__info">
                <span className="hotel-name">{element.title}</span>
          <p>{element.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }


export default MainContainer;