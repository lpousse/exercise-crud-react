import CityInterface from "../interfaces/CityInterface";
import { getCityDataByName } from "./ApiGeoService";

const endpoint = "http://localhost:3000/cities";

export function getCities() {
	return fetch(endpoint)
		.then(response => {
			console.log(`response status`, response.status);
			return response.json();
		})
		.catch(error => console.log("Error: ", error));
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
		.catch(error => console.log("Error: ", error));
}

export function deleteCity(postId:number) {
	return fetch(`${endpoint}/${postId}`, {
			method: "DELETE",
		})
		.catch(error => console.log("Error: ", error));
}

export function updateCity(updatedId: number, updatedName: string) {
	const saveCityData = (cityData: CityInterface) => {
		return fetch(`${endpoint}/${updatedId}`, {
			method: "PUT",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({...cityData, "id": updatedId})
		  })
	}

	return getCityDataByName(updatedName)
		.then(saveCityData)
		.catch(error => console.log("Error: ", error));
}