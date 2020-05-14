import React from 'react';

function Citizen(props) {
    console.log(props)
    return <div>
        <h1>Citizen no. {props.citizen.id}</h1>
        <p>FirstName: {props.citizen.firstName} Lastname: {props.citizen.lastName}</p>
        <span>Email: </span>
        <p>{props.citizen.email}</p>
        <span>School:</span>
        <p>{props.citizen.school}</p>
    </div>
}

export default Citizen;