import React from "react";

type FormProps = {
    handleClickAddCity: (e: any) => void;
}
const FormCity = ({ handleClickAddCity}: FormProps) => {
    return(
        <form
            onSubmit={handleClickAddCity}
            action=""
            className="w-50 ms-auto me-auto my-3 input-group gap-2 align-items-center">
            <label className=" form-label" htmlFor="addCity">Ajouter une Ville</label>
            <input className="w-25 " type="text" id="addCity" name="city" />
            <input className="btn btn-success" type="submit" value="Ajouter" />
        </form>
    );
}

export default FormCity;