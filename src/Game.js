import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound'
import GamePage from './pages/Game/GamePage'
import MainPage from './pages/MainPage/MainPage'
import { Header } from './components/Header/Header'

function Game() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/game" element={<GamePage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Game;
