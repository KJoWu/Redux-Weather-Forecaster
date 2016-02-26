import axios from 'axios'; 

const API_KEY="80cafa91ee47a8959a08213fd4a84838";
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){ //city is a string
	const url= `${ROOT_URL}&q=${city},us`; //finalized request url
	const request = axios.get(url); //like ajax request

	return {
		type:FETCH_WEATHER,
		payload: request //additional data describing action

	};
}