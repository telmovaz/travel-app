import React from "react";
import axios from "axios";
import Hotel from "../../components/Hotel/Hotel"

class UserHotelsView extends React.Component {
  state = {
    dataFromApi: [],
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

    const options = {
      headers: {
        "Content-type": "multipart/form-data",
        "x-access-token": token,
      },
    };
    axios
      .get("https://nodejs-mysql-it-academy.herokuapp.com/my-hotels", options)
      .then((res) => {
        this.setState({ dataFromApi: res.data });
        console.log(this.state.dataFromApi)
      });
  }
  render() {
      
    return (
      <div>
          {this.state.dataFromApi.map((element) => {
              return (
                  <div>
                <Hotel data={element}/>
                </div>
              )
          })
  }
      </div>
    );
  }
}

export default UserHotelsView;
