import CityInterface from "../interfaces/CityInterface";

const endpoint = "https://geo.api.gouv.fr/communes";
const args =  "&fields=nom,centre,codeDepartement,departement,region&format=json&geometry=centre"

export function getCityDataByName(name: string) : Promise<CityInterface> {
	return fetch(`${endpoint}?nom=${name}${args}`, {
		headers: {
			'Accept': 'application/json'
		}
	})
		.then(response => {
		console.log(`response status`, response.status);
		return response.json();
		})
		.then(data => {
		console.log(`data : `, data);
		return data[0];
		})
		.catch(error => {
		console.log(`erreur attrapée : `, error);
		})
}