import React, {useState, useContext} from 'react';
import {RoundContext} from '../../context/providerRound'
import { ResultPanel } from '../../components/Panel/ResultPanel'
import  { SelectedOption } from '../../components/Game/SelectedOption'
import  { PlayerOption } from '../../components/Game/PlayerOption'
import './style.css'

const GamePage = () => {
  
  const {value, setValue}= useContext(RoundContext);

  const [playStats, setPlayStats] = useState({
    wins: 0,
    draws: 0,
    losses: 0,
  });

  const addPointToPlayStatParam = (param) => {
    setPlayStats({...playStats, [param]: playStats[param] + 1 });
  };
          //<!--> <input type="image" src="" style="border: double;" height="80" width="70"/> </-->
  return (
    <div className='container my-5 vh-100 d-flex justify-content-center flex-column '>
      <h1 className='title-game text-center'>Round {value}</h1>
      <ResultPanel className='result-panel text-center' wins={playStats.wins} losses={playStats.losses} draws={playStats.draws}/>
      <div className='align-items-center d-flex justify-content-center flex-column text-center'>
        <div className='selected-options'>
          <SelectedOption />
          <SelectedOption />
        </div>
        <div className='options'>
          <PlayerOption />
        </div>
      </div>
    </div>
  )
}

export default GamePage;
