import React, { Component } from "react";
import { connect } from "react-redux";

import SparklinesFunc from "./SparklinesShow";
import GoogleMap from "../components/googleMap";

class weatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list
			.map(weather => weather.main.temp)
			.map(temp => temp - 273);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const coor = cityData.city.coord;

		return (
			<tr key={name}>
				<td>
					<GoogleMap lat={coor.lat} lon={coor.lon} />{" "}
				</td>
				<td>
					<SparklinesFunc data={temps} color="orange" unit="C" />
				</td>
				<td>
					<SparklinesFunc data={pressure} color="green" unit="hPa" />
				</td>
				<td>
					<SparklinesFunc data={humidity} color="blue" unit="%" />
				</td>
			</tr>
		);
	}
	render() {
		return (
			<div>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>City</th>
							<th>Tempature</th>
							<th>Pressure</th>
							<th>Humidity</th>
						</tr>
					</thead>
					<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { weather: state.weather };
}

export default connect(mapStateToProps)(weatherList);
