// const ApiKey = "6028f96e52f3c38962b38fc58ada20fa";
// import axios from "axios";
// const rootUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${ApiKey}`;
// export const FETCH_WEATHER = "FETCH_WEATHER";

// export default function index(city) {
// 	const url = `${rootUrl}&q=${city},us`;
// 	const request = axios.get(url);

// 	return {
// 		type: FETCH_WEATHER,
// 		payload: request
// 	};
// }
import axios from "axios";

const API_KEY = "6028f96e52f3c38962b38fc58ada20fa";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ind`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
