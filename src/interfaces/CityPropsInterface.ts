import React from "react";
import CityInterface from "./CityInterface";

interface CityPropsInterface{
    city: CityInterface,
    setCities: React.Dispatch<React.SetStateAction<CityInterface[]>>
}

export default CityPropsInterface;