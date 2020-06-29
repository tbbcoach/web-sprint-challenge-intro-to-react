import React from 'react';
import styled from 'styled-components';

const Hair = styled.p`
font-size: 1.25rem;
text-decoration: underline;
background-color: white;
margin: 0 40%;
border-radius: 60px;
`
const Skin = styled.p`
font-size: 1.25rem;
text-decoration: underline;
background-color: white;
margin: 0 40%;
border-radius: 60px;
`

const Eye = styled.p`
font-size: 1.25rem;
text-decoration: underline;
background-color: white;
margin: 0 40%;
border-radius: 60px;
`

const Gender = styled.p`
  font-size: 1.25rem;
  text-decoration: underline;
  background-color: white;
  margin: 0 40%;
  border-radius: 60px;
`

const Name = styled.h2`
font-size: 2rem;
text-decoration: underline red dashed;
`
const Height = styled.h3`
font-size: 1.5rem;
border: 2px white;
border-radius: 25px;
background-color: lime;
margin: 2% 30%;
`



const CharacterCard = (props) => {

    return (
        <div>
            <Name>Name: {props.name}</Name>
            <Height>Height: {props.height}cm,  Mass: {props.mass}kgs</Height>
            <Hair>hair color - {props.hair_color}</Hair>
            <Skin>skin color -  {props.skin_color}</Skin>
            <Eye>eye color -  {props.eye_color}</Eye>
            <Gender>gender: {props.gender}</Gender>
        </div>
    )
}

export default CharacterCard;