import React from 'react';

import NavBar from './components/navbar';
import Home from './components/home';
import Sobre from './components/sobre';
import Contato from './components/contato';
import Projetos from './components/projetos';

import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
