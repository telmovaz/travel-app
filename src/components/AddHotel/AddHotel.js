import React from 'react';
import axios from 'axios';
import './AddHotel.scss';


class AddHotel extends React.Component {
    state = {
        title: null,
        image: null,
        type: null,
        location: null,
        price: null
    }

    setValue = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    addNewHotel = () => {
        const body = {
            title: this.state.title,
            image: this.state.image,
            type: this.state.type,
            location: this.state.location,
            price: this.state.price
        }
        axios.post('https://nodejs-mysql-it-academy.herokuapp.com/add-hotel', body).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    
    }

    render() {
        return (
            <div className="add-container">
                
                <form>
                    <input type="text" placeholder="Title" onChange={event => {this.setValue('title', event.target.value)}}/><br />
                    <input type="text" placeholder="Image" onChange={event => {this.setValue('image', event.target.value)}}/><br />
                    <input type="text" placeholder="Price" onChange={event => {this.setValue('price', event.target.value)}}/><br />
                    <input type="text" placeholder="Location" onChange={event => {this.setValue('location', event.target.value)}}/><br />
                    <select onChange={event => {this.setValue('type', event.target.value)}}>
                        <option>Normal</option>
                        <option>Plus</option>
                        <option>Premium</option>
                    </select>
                    <input type="button" value="Add hotel" onClick={this.addNewHotel}/>
                </form>

            </div>
        )
    }
}

export default AddHotel;