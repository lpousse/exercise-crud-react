import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { addCity, getCities } from './services/CityService';
import CityInterface from './interfaces/CityInterface';

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
      {cities.map(city => <p key={city.id}>{city.nom}</p>)}
      <button onClick={handleClickAddPost}>Ajouter</button>
    </div>
  );
}

export default App;
