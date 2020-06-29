// Write your Character component here

import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard'
import axios from 'axios';

export default function Character() {
    const [characters, setCharacter] = useState([]);

    useEffect(() => {
        axios
          .get("https://swapi.dev/api/people/")
          .then((response) => {
            console.log("response from api", response);
            setCharacter(response.data.results);
          })
          .catch((err) => {
            console.log("No data returned", err);
          });
    }, []);


    return (
        <div className= 'characters'>
            {characters.map(character => {
                return (
                    <CharacterCard
                
                        key={character.id}
                        name={character.name}
                        height={character.height}
                        mass={character.mass}
                        hair_color={character.hair_color}
                        skin_color={character.skin_color}
                        eye_color={character.eye_color}
                        gender={character.gender}
                    />
                );
            })}
        </div>
    )
}
