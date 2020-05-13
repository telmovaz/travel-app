import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import HotelView from '../../views/HotelView/HotelView';
import './Hotel.scss';

const Hotel  = ({data}) => {
    return(
        <div>
        <Link to={"hotel/" + data.id}>
        <div className="hotel" key={data.id}>
          
          <img src={data.image} alt="alt text" />
          <div className="hotel__info">
            <span className="hotel-name">{data.title}</span>
      <p>{data.location}</p>
      <p>{data.price}</p>
          </div>
        </div>
        </Link>
        </div>
    )
}

export default Hotel;