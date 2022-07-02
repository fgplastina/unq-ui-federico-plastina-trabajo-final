import React, { useState, useContext, useEffect } from 'react';
import { RoundContext } from '../../context/providerRound'
import { ResultPanel } from '../../components/Panel/ResultPanel'
import  { SelectedOption } from '../../components/Game/SelectedOption'
import  { PlayerOption } from '../../components/Game/PlayerOption'
import './style.css'

export const plays = [
  {
    name: 'scissors',
    image: '',
    wins: ['paper', 'lizard'],
    losses: ['rock', 'spock']
  },
  {
    name: 'rock',
    image: '',
    wins: ['scissors', 'lizard'],
    losses: ['paper', 'spock']
  },
  { 
    name: 'lizard',
    image: '',
    wins: ['spock', 'paper'],
    losses: ['scissors', 'rock']
  },
  {
    name: 'spock',
    image: '',
    wins: ['scissors', 'rock'],
    losses: ['lizard', 'paper']
  },
  {
    name: 'paper',
    image: '',
    wins: ['rock', 'spock'],
    losses: ['scissors', 'lizard']
  }
]

const GamePage = () => {

  const addPointToPlayStatParam = (param) => {
    setPlayStats({...playStats, [param]: playStats[param] + 1 });
  };

  const [currentPlayerPlay, setCurrentPlayerPlay] = useState({});

  const [currentMachinePlay, setCurrentMachinePlay] = useState({});

  const {value, setValue}= useContext(RoundContext);

  const [playStats, setPlayStats] = useState({
    wins: 0,
    draws: 0,
    losses: 0,
  });

  function handleRandomPlayMachine(){
    let play = generateRandom();
    setCurrentMachinePlay(play);
    console.log(currentMachinePlay);
  }

  function generateRandom(){
    let random = Math.floor(Math.random() * (4 - 0 + 1 ) + 0);
    return plays[random];
  }

  function thereIsCompletePlay(){
    return currentPlayerPlay.losses && currentMachinePlay.losses
  }

  function userWon(){
    return thereIsCompletePlay() ? currentMachinePlay.losses.includes(currentPlayerPlay.name) : false;
  }

  function userLost(){
    return thereIsCompletePlay() ? currentMachinePlay.wins.includes(currentPlayerPlay.name) : false;
  }

  //TODO:definir un effect y llamar a handleRandomMachine. setear dependencia currentPlayerPlay
  useEffect(() => {
      handleRandomPlayMachine();
  }, [currentPlayerPlay]);

  //TODO: Otro effect que compruebe si el state de las play estan llenos, si esta lleno que calcule que sume un punto al que gano o perdio
  //
  useEffect(() => {
    if (userWon()){
      addPointToPlayStatParam('wins');
    }
    else if (userLost()) {
      addPointToPlayStatParam('losses');
    }
    else {
      addPointToPlayStatParam('draws')
    }

    //add wait time?
    setCurrentPlayerPlay('');
    setCurrentMachinePlay('');

  }, [currentMachinePlay]);

  return (
    <div className='container my-5 vh-100 d-flex justify-content-center flex-column '>
      <h1 className='title-game text-center'>Round {value}</h1>
      <ResultPanel className='result-panel align-items-center d-flex justify-content-center flex-column' wins={playStats.wins} losses={playStats.losses} draws={playStats.draws}/>
      <div className='align-items-center d-flex justify-content-center flex-column text-center'>
        <div className='selected-options'>
          <SelectedOption currentPlayerPlay={currentPlayerPlay} currentMachinePlay={currentMachinePlay}/>
        </div>
        <div className='options'>
          <PlayerOption setCurrentPlayerPlay={setCurrentPlayerPlay} />
        </div>
      </div>
    </div>
  )
}

export default GamePage;
