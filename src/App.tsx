import React, { useState, useEffect, createContext, useContext } from 'react'
import { fetchPoke } from './pokeApi.service'
import ThemeContext, { ThemeProvider } from './themeContext';
import useSearchPoke from './useSearchPoke'
import './App.css';



const functionalUpdate = (previousState: number) => {
  if (previousState === 10) return previousState;

  return previousState + 1;
}
function App() {
  const [name, imgUrl, searchTerm, setSearchTerm] = useSearchPoke()
  
  const theme = useContext(ThemeContext);

  console.log(theme);
  return (
    <ThemeProvider >


      <div className="App" style={theme.currentTheme} >
        <button onClick={() => theme.changeTheme()}>Change theme</button>
        <input type={'text'} value={searchTerm} onChange={(e) => {
          setSearchTerm(e.target.value);
        }} />
        <h5>{name}</h5>
        <img src={imgUrl} alt="" />
      </div>
    </ThemeProvider>
  );
}

export default App;
