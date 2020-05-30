import React from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_API_URL = `http://api.openweathermap.org/data/2.5/weather`;
class Weather extends React.Component {
  /* This results exactly the same as using constructor.
    This can happen thanks to babel.
  */
  state = {
    apiData: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    // this.getWeatherData("Poznan");
  }

  getWeatherData = async (city) => {
    const url = `${BASE_API_URL}?q=${city}&appid=${API_KEY}`;
    try {
      const response = await axios.get(url);
      this.setState({
        apiData: response.data,
        loading: false,
      });
    } catch (e) {
      console.error(e);
      this.setState({
        error: true,
        loading: false,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <div>Loading data ...</div>;
    }
    if (this.state.error) {
      return <div>An error occurred. Please refresh the page.</div>;
    }

    const { name = "", main = {} } = this.state.apiData;
    const celcTemp = main.temp
      ? Math.round(main.temp - 273.15)
      : "No temp available.";
    return (
      <div>
        <div>
          {name} is {celcTemp} &#8451;
        </div>
      </div>
    );
  }
}

export default Weather;
