import React from "react";
import CityInterface from "./CityInterface";

interface CitiesPropsInterface{
    city: CityInterface,
    setCities: React.Dispatch<React.SetStateAction<CityInterface[]>>
}

export default CitiesPropsInterface;