import React from "react";

type FormProps = {
    handleClickAddCity: (e: any) => void;
    label: string;
}
const FormCity = ({ handleClickAddCity, label}: FormProps) => {
    return(
        <form
            onSubmit={handleClickAddCity}
            className="my-3 input-group gap-2 align-items-center">
            <label className=" form-label" htmlFor="addCity">{label}</label>
            <input className="w-25 " type="text" id="addCity" name="city" />
            <input className="btn btn-success" type="submit" value="Ajouter" />
        </form>
    );
}

export default FormCity;