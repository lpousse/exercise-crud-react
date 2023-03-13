import CityInterface from "../interfaces/CityInterface";
import { getCityDataByName } from "./ApiGeoService";

const endpoint = "http://localhost:3000/cities";

export function getCities() {
	return fetch(endpoint)
		.then(response => {
		console.log(`response status`, response.status);
		return response.json();
		})
		.then(data => {
		console.log(`data : `, data);
		return data;
		})
		.catch(error => {
		console.log(`erreur attrapée : `, error);
		})
}

export function addCity(cityName: string) {
	const saveCityData = (cityData: CityInterface) => {
		return fetch(endpoint, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(cityData)
		});
	};

	return getCityDataByName(cityName)
		.then(saveCityData)
		.then(res => res.json())
		.then(data => console.log(data))
		.catch((res) => console.log(res));
}

export function deleteCity(postId:number) {
	return fetch(`${endpoint}/${postId}`, {
	  method: "DELETE",
	})
	.then(response => {
	  console.log(`response status`, response.status);
	  return response.json();
	})
	.then(data => {
	  console.log(`data : `, data);
	  return data;
	})
	.catch(error => {
	  console.log(`erreur attrapée : `, error);
	  return error;
	})
}

export function updateCity(postId: number, updatedPost: CityInterface) {
	return fetch(`${endpoint}/${postId}`, {
	  method: "PUT",
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(updatedPost)
	})
	.then(response => {
	  console.log(`response status`, response.status);
	  return response.json();
	})
	.then(data => {
	  console.log(`data : `, data);
	  return data;
	})
	.catch(error => {
	  console.log(`erreur attrapée : `, error);
	  return error;
	})
}