import React, { Component } from "react";
import Chart from "../component/chart";
import GoogleMap from "../component/GoogleMap";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather = (cityData) => {
    if (!cityData) {
      return null;
    }
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const humid = cityData.list.map((weather) => weather.main.humidity);
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
          <p>{name}</p>
        </td>
        <td>
          <Chart data={temps} color="red" unit="K" />
        </td>
        <td>
          <Chart data={pressure} color="green" unit="hPa" />
        </td>
        <td>
          <Chart data={humid} color="blue" unit="%" />
        </td>
      </tr>
    );
  };
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}
const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
