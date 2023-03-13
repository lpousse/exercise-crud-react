import React from "react";
import CityInterface from "./CityInterface";

interface CitiesPropsInterface{
    cities: CityInterface[],
    setCities: React.Dispatch<React.SetStateAction<CityInterface[]>>
}

export default CitiesPropsInterface;