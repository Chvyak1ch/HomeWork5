import React from "react";

const MySelect = ({ whoSelect, option, defaultValue}) => {

    return(
    <select id="selectArray" onChange={whoSelect}>
        <option disabled value="">{defaultValue}</option>
        {option.map(option => 
            <option key={option.name} value={option.value}>
                {option.name}
            </option>
        )}
    </select>
    );
};

export default MySelect;