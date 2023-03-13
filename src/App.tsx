import React, { useEffect, useState } from 'react';
import './App.css';
import { addCity, getCities } from './services/CityService';
import CityInterface from './interfaces/CityInterface';
import Cities from './components/Cities';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const handleClickAddPost = async () => {
		await addCity("Nantes");
		const fetched_posts = await getCities();
		setCities(fetched_posts);
	}

  return (
    <div className="App">
      <main className='App-header'>
        <h1 className='text-info mb-5'>Liste des villes</h1>
        <Cities cities={cities} setCities={setCities}/>
      </main>      
    </div>
  );
}

export default App;
