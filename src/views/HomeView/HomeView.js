import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from 'axios';
import rates from '../../utils/data/rates'
import data from "../../utils/data/data";
import preloader from "../../utils/Spin-1s-200px.gif";

class HomeView extends React.Component {
  state = {
    hotels: [],
    sort: true,
    dataFromApi: null,
    currency: "USD",
  };

  convertPrice = value => {
    this.setState({
      currency: value,
    })
  }

  filterHotels = name => {
    const filteredHotels = this.state.hotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({
      hotels: name.length > 0 ? filteredHotels : this.state.dataFromApi,
    });
    console.log(filteredHotels);
  };

  filterHotelsPrice = (price) => {
    const filteredHotels = this.state.dataFromApi.filter(hotel => {
      return hotel.price >= parseInt(price);
    });

    this.setState({
      hotels: price.length > 0 ? filteredHotels : this.state.dataFromApi,
    });
  }

  sortHotels = () => {
    let aMoreB;
    let bMoreA;

    if (this.state.sort) {
      aMoreB = 1;
      bMoreA = -1;
    }else {
      aMoreB = -1;
      bMoreA = 1;
    }

    return this.state.dataFromApi.sort((a,b) => {
      if  (a.title > b.title) {
        return aMoreB;
      }else if (b.title > a.title) {
        return bMoreA;
      } else {
        return 0;
      }
    })
  }

  switchSort = () => {
    this.setState({
      sort: !this.state.sort,
      hotels: this.sortHotels()
    })
  }



  componentDidMount() {
    axios.get('https://nodejs-mysql-it-academy.herokuapp.com/hotels').then((res) => {
      let preloader = document.querySelector("#preloader");
        preloader.parentNode.removeChild(preloader);
      this.setState({
        dataFromApi: res.data
      })
      this.switchSort();
    })
   
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currency !== this.state.currency) {
      const dataCopy = JSON.parse(JSON.stringify(data));
    
      const hotelsNew = dataCopy.map((hotel) => {
        hotel.price = Math.ceil(hotel.price * rates[this.state.currency])
        return hotel;
        
        

      });

      this.setState({
        hotels: hotelsNew,
      });
      
    }
      
      
  }
  
  


  render() {
    return (
      <div>
        <Header filterHotels={this.filterHotels} filterHotelsPrice={this.filterHotelsPrice}/>
        <div className="Wrapper">
        <Sidebar className="Sidebar"/>
        <div id="preloader"><img src={preloader} alt="preloader" /></div>
          <MainContainer data={this.state.hotels} switchSort={this.switchSort} sort={this.state.sort} convertPrice={this.convertPrice}/>
        </div>
      </div>
    );
  }
}

export default HomeView;
