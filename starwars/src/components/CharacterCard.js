import React from 'react';

const CharacterCard = (props) => {

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Height: {props.height} Mass: {props.mass}</h3>
            <p>hair_color - {props.hair_color} skin_color {props.skin_color} eye_color {props.eye_color} gender {props.gender}</p>
        </div>
    )
}

export default CharacterCard;