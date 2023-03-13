import React, { useEffect, useState } from 'react';
import './App.css';
import { addCity, getCities } from './services/CityService';
import CityInterface from './interfaces/CityInterface';
import City from './components/City';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormCity from './components/FormCity';

function App() {
  const [cities, setCities] = useState([] as CityInterface[]);

  useEffect(() => {
    (async() => {
			// Récupération des posts
			const fetched_cities = await getCities();
			console.log('fetched_posts', fetched_cities);
			setCities(fetched_cities);
		})();
  }, []);

  const handleClickAddCity = async (e: any) => {
    e.preventDefault()
		await addCity(e.target.city.value);
		const fetched_posts = await getCities();
		setCities(fetched_posts);
	}
  

  return (
    <div className="App">

      <main className='App-header'>
        <h1 className='text-info mb-5'>Liste des villes</h1>
        <div className='w-50 ms-auto me-auto'>
          <FormCity handleClickAddCity={handleClickAddCity} label="Ajouter une Ville"/>
        </div>
        <ul className="list-group w-50">
          {cities.map(city => <City key={city.id} city={city} setCities={setCities}/>)}
        </ul>
      </main>   
    </div>
  );
}

export default App;
