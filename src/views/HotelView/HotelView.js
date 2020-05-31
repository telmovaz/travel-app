import React, { useState, useEffect} from 'react';
import axios from 'axios';

const getHotelData = (id, setHotel) => {
    const API = "https://nodejs-mysql-it-academy.herokuapp.com/hotels/";
    axios.get(API + id).then(
        (response) => {
            setHotel(response.data)
        }
        )
        .catch((error) => {
            console.log(error)
        })
}

const HotelView = (props) => {
    const [hotel, setHotel] = useState({});

    useEffect(() => {
        const { id } = props.match.params
        getHotelData(id, setHotel)
    }, [])

    return Object.keys(hotel).length > 0 && (
        <div className='hotel-view'>
            {hotel.title}
        </div>
    )
}


export default HotelView;


