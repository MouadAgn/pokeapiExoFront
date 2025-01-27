import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MesPokemons from './Components/MesPokemons';
import MonPokedex from './Components/MonPokedex';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/'/>
      <Route path='/h' element={<MesPokemons/>}/>
      <Route path='/MonPokedexx' element={<MonPokedex/>}/>
    </Routes>
    </>
  );
}

export default App;
