import { useState } from "react";
import CitiesPropsInterface from "../interfaces/CitiesPropsInterface";
import { deleteCity, getCities, updateCity } from "../services/CityService";

const Cities = (props: CitiesPropsInterface) =>{

    const handleClickDelete = async (cityId: number) => {
		await deleteCity(cityId);
		const fetched_posts = await getCities();
		props.setCities(fetched_posts);
	}

    const handleClickUpdate = async (cityId: number) => {
		await updateCity(cityId, "Nice");
		const fetched_posts = await getCities();
		props.setCities(fetched_posts);
	}

    return(
        <ul className="list-group w-50">
            {                            
            props.cities.map(city => {
                
                return(
                    <li key={city.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <p className="p-0">{city.nom}</p>
                        <p className="p-0">{city.departement.code} {city.departement.nom}</p>
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning" onClick={() => handleClickUpdate(city.id)}>Modifier</button>
                            <button type="button" className="btn btn-danger" onClick={() => handleClickDelete(city.id)}>Supprimer</button>
                        </div>
                    </li>
                )
            })
            }
        </ul>
    )
}

export default Cities;