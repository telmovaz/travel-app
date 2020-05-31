import React, {useEffect} from "react";
import Hotel from "../../components/Hotel/Hotel";
import {useSelector, useDispatch} from 'react-redux';
import { getUserHotels } from '../../store/actions/hotels-actions'


const UserHotelsView = () => {
  
    const hotels = useSelector((state) => state.userHotels);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUserHotels());
    }, []);
      
    return (
      <div>
          {hotels.map((element) => {
              return (
                  <div>
                <Hotel data={element}/>
                </div>
              )
          })
  }
      </div>
    );
  
};

export default UserHotelsView;
