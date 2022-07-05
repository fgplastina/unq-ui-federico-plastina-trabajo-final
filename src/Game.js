import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound'
import GamePage from './pages/Game/GamePage'
import MainPage from './pages/MainPage/MainPage'
import { Rules } from './pages/Rules/Rules'
import { Header } from './components/Header/Header'

function Game() {
  return (
    <BrowserRouter>
      <Header />
      <Routes basename={'/unq-ui-federico-plastina-trabajo-final'}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<MainPage/>}/>
        <Route path={`${process.env.PUBLIC_URL}/game`} element={<GamePage/>}/>
        <Route path={`${process.env.PUBLIC_URL}/rules`} element={<Rules />}/>
        <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Game;
