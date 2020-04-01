import React from "react";
import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import data from "./utils/data/data.js";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends React.Component {
  state = {
    hotels: []
  };

  filterHotels = name => {
    const filteredHotels = this.state.hotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({
      hotels: name.length > 0 ? filteredHotels : data
    });
    console.log(filteredHotels);
  };

  componentDidMount() {
    this.setState({
      hotels: data
    });
  }

  render() {
    return (
      <div className="App">
        <Header filterHotels={this.filterHotels} />
        <div className="Wrapper">
          <Sidebar className="Sidebar"/>
          <MainContainer data={this.state.hotels} />
        </div>
      </div>
    );
  }
}

export default App;
