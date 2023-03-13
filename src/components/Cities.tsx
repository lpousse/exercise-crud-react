import { useState } from "react";
import CitiesPropsInterface from "../interfaces/CitiesPropsInterface";

const Cities = (props: CitiesPropsInterface) =>{

    return(
        <ul className="list-group w-50">
            {                            
            props.cities.map(city => {
                
                return(
                    <li key={city.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <p className="p-0">{city.nom}</p>                        
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning">Modifier</button>
                            <button type="button" className="btn btn-danger">Supprimer</button>
                        </div>
                    </li>
                )
            })
            }
        </ul>
    )
}

export default Cities;