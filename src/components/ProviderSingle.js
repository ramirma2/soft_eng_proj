import React from "react";


function ProviderSingle({details}){
    return (
        <div className="search-single">
            <h2>{details.provider_name}</h2>
            {details.practitioners.map((doc, i) => { return <h3 key={i}>{doc}</h3>})}
            <p>{details.practice_type.join(', ')}</p>
            <p>{details.location.street_address}</p>
            <p>{details.location.city}</p>
            <p>{details.location.state + " " + details.location.zip}</p>
        </div>
    )
}

export default ProviderSingle;