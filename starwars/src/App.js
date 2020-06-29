import React from 'react';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const Headline = styled.h1`
  font-size: 3.5rem;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  color: white;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Headline className="Header">Star Wars Characters</Headline>
      <Character />
    </div>
  );
}

export default App;
