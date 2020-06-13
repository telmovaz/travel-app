import React from 'react';
import heartEmpty from '../../utils/heart.svg';
import heartFilled from '../../utils/heart-filled.svg';
import { connect } from 'react-redux';
import './LikeButton.scss';
import { addToFavourites } from '../../store/actions/hotels-actions';


export class LikeButton extends React.Component {
    handleClick = () => {
        
        const {hotel, addToFavourites} = this.props;
        addToFavourites(hotel);
    }

    isFav = (hotelId) => {
        return this.props.favourites.find ((hotel) => {
            return hotel.id === hotelId;
        })
    }

    render() {
        const { hotel } = this.props;
        return(
        <div className = "fav-button" onClick={this.handleClick}>
            <img className = "fav-icon" src={this.isFav(hotel.id) ? heartFilled : heartEmpty} alt=""></img>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
        favourites: state.favourites
    
})

const mapDispatchToProps = (dispatch) => ({
    
        addToFavourites: (hotel) => dispatch(addToFavourites(hotel))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);