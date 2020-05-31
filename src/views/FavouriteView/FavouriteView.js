import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Hotel from '../../components/Hotel/Hotel';
import {removeFromFavourites} from '../../store/actions/hotels-actions'

const FavouriteView = () => {
    const [inputValue, setInputValue] = useState('');
    const hotels = useSelector((state) => {
            return state.favourites
    })

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const dispatch = useDispatch();

    const removeHotel = (id) => {
        dispatch(removeFromFavourites(id))
    }
 
    return(
        <>
            <h1>Favourite list</h1>
            <input type='text' onChange={handleChange}/>
            
            {
            // hotels.map((hotel) => {
            //    // return <p>{hotel.title}</p>;
            //    return <Hotel data={hotel} />
            // })
        }

        {
            hotels.filter((hotel) => {
                return hotel.title.toLowerCase().includes(inputValue.toLowerCase())
            }).map((hotel) => {
            return <p onClick={() => {removeHotel(hotel.id)}}>{hotel.title}</p>
            })
        }
        </>
    )
}

export default FavouriteView;