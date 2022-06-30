import React, {useState, useContext} from 'react';
import {RoundContext} from '../../context/providerRound'
import { ResultPanel } from '../../components/Panel/ResultPanel'
import  { SelectedOption } from '../../components/Game/SelectedOption'
import  { PlayerOption } from '../../components/Game/PlayerOption'
import './style.css'

export const jugadas = [
  {
    name: 'tijera',
    image: '',
    wins: ['papel'],
    losses: ['piedra',]
  },
  {
    name: 'tijera',
    image: '',
    wins: '',
    losses: ''
  },
  { 
    image: '',
    name: 'tijera',
    wins: '',
    losses: ''
  },
  {
    name: 'tijera',
    image: '',
    wins: '',
    losses: ''
  },
  {
    name: 'tijera',
    image: '',
    wins: '',
    losses: ''
  }
]

const GamePage = () => {

  const [currentPlayerPlay, setCurrentPlayerPlay] = useState({});
  const [currentMachinePlay, setCurrentMachinePlay] = useState({});

  const {value, setValue}= useContext(RoundContext);


  useEffect(() => {
    try {     
      someFunction();
    } catch (error) {
      setCurrentPlayerPlay('');
      setCurrentMachinePlay('');
    }  
  }, []);


  //TODO:definir un effect y llamar a handleRandomMachine. setear dependencia currentPlayerPlay
  function handleRandomMachine(){
    let jugada = generateRandom();
    setCurrentPlayerPlay(jugada);
  }

  function generateRandom(){

  }

  const [playStats, setPlayStats] = useState({
    wins: 0,
    draws: 0,
    losses: 0,
  });

  //TODO: Otro effect que compruebe si el state de la jugada estan llenos, si esta lleno que calcule que sume un punto al que gano o perdio
  const addPointToPlayStatParam = (param) => {
    setPlayStats({...playStats, [param]: playStats[param] + 1 });
  };

  return (
    <div className='container my-5 vh-100 d-flex justify-content-center flex-column '>
      <h1 className='title-game text-center'>Round {value}</h1>
      <ResultPanel className='result-panel text-center' wins={playStats.wins} losses={playStats.losses} draws={playStats.draws}/>
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
