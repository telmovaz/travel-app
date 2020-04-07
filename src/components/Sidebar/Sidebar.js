import React from 'react';
import './Sidebar.scss';
import sidebar_data from '../../utils/data/sidebar_data.js';
import btnimage from '../../utils/more.png';

class Sidebar extends React.Component {
 


    render() {
        return (

    <div className="Sidebar">
      <h1>More than just hotels</h1>
        
        {sidebar_data.map(element => {
            return (
                <div>
            <div className="sidebar-wrapper">
                <div className="sidebar-thumb"><img src={element.image} alt=""/></div>
                <div className="sidebar-text">
                    <div className="sidebar-text-title">{element.title}</div>
                    <div className="sidebar-text-location">{element.location}</div>
                    <div className="sidebar-text-price">{element.price}</div>
                </div>
                <div className="sidebar-button">                  
                <img src={btnimage} alt="" />
                </div>
            </div>
            
            </div>);
        })}
        </div>
   


        )
    }
}

export default Sidebar;