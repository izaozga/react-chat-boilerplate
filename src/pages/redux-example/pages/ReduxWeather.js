import React, { useRef } from "react";
import { connect } from "react-redux";
import { getCurrentWeather } from "../../../store/actions/weatherActions";
import { bindActionCreators } from "redux";

const ReduxWeather = (props) => {
  const inputRef = useRef();

  const getWeather = () => {
    props.getWeather(inputRef.current.value);
  };

  if (props.weatherLoading) {
    return <div>Loading data ...</div>;
  }
  if (props.weatherError) {
    return <div>An error occurred. Please refresh the page.</div>;
  }

  return (
    <div>
      <h1>Redux Thunk.</h1>
      {props.weather ? (
        <>
          <h2>City: {props.weather.name}</h2>
          <h2>
            Temperature: {Math.round(props.weather.main.temp - 273.15)} &#8451;
          </h2>
        </>
      ) : (
        <h2>Request Weather.</h2>
      )}
      <input ref={inputRef} />
      <button onClick={getWeather}>Get weather</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  weather: state.weatherReducer.weather,
  weatherError: state.weatherReducer.error,
  weatherLoading: state.weatherReducer.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getWeather: getCurrentWeather,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReduxWeather);
