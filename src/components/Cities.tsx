import e from "express";
import { useState } from "react";
import CitiesPropsInterface from "../interfaces/CitiesPropsInterface";
import { deleteCity, getCities, updateCity } from "../services/CityService";
import FormCity from "./FormCity";

const Cities = (props: CitiesPropsInterface) =>{

    const[updateVisible, setUpdateVisible] = useState(false);


    const handleClickDelete = async (cityId: number) => {
		await deleteCity(cityId);
		const fetched_posts = await getCities();
		props.setCities(fetched_posts);
	}

    const handleClickUpdate = async (e: any) => {
        e.preventDefault();
        console.log(props.city.id);
		await updateCity(props.city.id, e.target.city.value);
		const fetched_posts = await getCities();
		props.setCities(fetched_posts);
        setUpdateVisible(false);
	}

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <p className="p-0">{props.city.nom}</p>
            <p className="p-0">{props.city.departement.code} {props.city.departement.nom}</p>
            <div className="btn-group">
                <button type="button" className="btn btn-warning" onClick={() => setUpdateVisible(value => value = !value)}>Modifier</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClickDelete(props.city.id)}>Supprimer</button>
            </div>
            <div className={updateVisible ? "w-100" : "d-none"}>
                <FormCity handleClickAddCity={handleClickUpdate} label="Nouvelle ville" />
            </div>
        </li>
    )
}

export default Cities;