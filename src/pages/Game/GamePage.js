// Third party imports
import React, { useState, useContext, useEffect, useRef } from 'react';
import {Button, Modal }from 'react-bootstrap/'
import { useNavigate } from 'react-router-dom'

// Project import
import { RoundContext } from '../../context/providerRound'
import { ResultPanel } from '../../components/Panel/ResultPanel'
import  { SelectedOption } from '../../components/Game/SelectedOption'
import  { PlayerOption } from '../../components/Game/PlayerOption'
import './style.css'

// Assets import
import Lizard from '../../assets/lizard_f.png'
import Scissors from '../../assets/scissors_f.png'
import Rock from '../../assets/rock_f.png'
import Spock from '../../assets/spock_f.png'
import Paper from '../../assets/paper_f.png'

// style import 
export const plays = [
  {
    name: 'scissors',
    image: Scissors,
    wins: ['paper', 'lizard'],
    losses: ['rock', 'spock']
  },
  {
    name: 'rock',
    image: Rock,
    wins: ['scissors', 'lizard'],
    losses: ['paper', 'spock']
  },
  { 
    name: 'lizard',
    image: Lizard,
    wins: ['spock', 'paper'],
    losses: ['scissors', 'rock']
  },
  {
    name: 'spock',
    image: Spock,
    wins: ['scissors', 'rock'],
    losses: ['lizard', 'paper']
  },
  {
    name: 'paper',
    image: Paper,
    wins: ['rock', 'spock'],
    losses: ['scissors', 'lizard']
  }
]

const GamePage = () => {

  let navigate = useNavigate(); 

  // bootstrap const
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const addPointToPlayStatParam = (param) => {
    setPlayStats({...playStats, [param]: playStats[param] + 1 });
  };


  // project const
  const idSetTimeoutPlayer= useRef();

  const idSetTimeoutMachine = useRef();

  const [currentRound, setRound] = useState(0);

  const [currentPlayerPlay, setCurrentPlayerPlay] = useState({});

  const [currentMachinePlay, setCurrentMachinePlay] = useState({});

  const {value} = useContext(RoundContext);

  const [playStats, setPlayStats] = useState({
    wins: 0,
    draws: 0,
    losses: 0,
  });
  
  const hasPlayerPlay = Boolean(Object.entries(currentPlayerPlay).length)

  const handleMachinePlayWithSetTimeOut = () => {
      idSetTimeoutPlayer.current = setTimeout(() => {
      handleRandomPlayMachine();
    }, 2000)
  }

  function getWinner(){
    if(playStats.wins > playStats.losses && playStats.wins > playStats.draws){
      return 'won'
    }
    else if (playStats.losses > playStats.wins && playStats.losses > playStats.draws){
      return 'lost'
    }
    else {
      return 'draw'
    }
  }

  function handleRandomPlayMachine(){
    let play = generateRandom();
    setCurrentMachinePlay(play);
    
  }

  function generateRandom(){
    let random = Math.floor(Math.random() * (4 - 0 + 1 ) + 0);
    return plays[random];
  }

  function thereIsCompletePlay(){
    return currentPlayerPlay.losses && currentMachinePlay.losses
  }

  function userWonPlay(){
    return currentMachinePlay.losses.includes(currentPlayerPlay.name);
  }

  function userLostPlay(){
    return currentMachinePlay.wins.includes(currentPlayerPlay.name);
  }

  function gameHasEnded(){
    return value <= currentRound;
  }

  function handleGameIfEnded(){
    if(gameHasEnded()){
      handleShow();
    }
  }
  
  useEffect(() => {
    if(hasPlayerPlay){
      handleMachinePlayWithSetTimeOut();
    }
    return () => {
        clearTimeout(idSetTimeoutPlayer.current);
    }
  }, [currentPlayerPlay]);

  useEffect(() => {
    idSetTimeoutMachine.current = setTimeout(() => {
     if (thereIsCompletePlay()) {
       if (userWonPlay()){
         addPointToPlayStatParam('wins');
       }
       else if (userLostPlay()) {
         addPointToPlayStatParam('losses');
       }
       else {
         addPointToPlayStatParam('draws')
       }
       setRound(currentRound + 1);
       setCurrentPlayerPlay('');
       setCurrentMachinePlay('');
     }
    }, 2000)

    return () =>{
        clearTimeout(idSetTimeoutMachine.current);
    }

  }, [currentMachinePlay]);

  useEffect(() =>{
    handleGameIfEnded()
  }, [currentRound])

  return (
    <div className='container vh-100 d-flex justify-content-center flex-column'>
    <>
      <Modal show={show}>
        <Modal.Header className="game-modal text-center justify-content-center">
          <Modal.Title >Game over!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="game-modal text-center justify-content-center">You have {getWinner()}!</Modal.Body>
        <Modal.Footer  className="game-modal text-center justify-content-center">
          <Button  variant="outline-success" onClick={() => navigate('/')}>
            Play again!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      <div className='game-menu-container'>
      <h1 className='title-game text-center mb-3 mt-3'>
        Round {currentRound < value ? currentRound + 1 : currentRound }
      </h1>
        <div className='result-panel text-center items-align-center justify-content-center'>
            <ResultPanel className='result-panel align-items-center d-flex justify-content-center flex-column' wins={playStats.wins} losses={playStats.losses} draws={playStats.draws}/>

        </div>
      <div className='align-items-center d-flex justify-content-center flex-column text-center mb-2'>
        <div className='selected-options '>
          <SelectedOption currentPlayerPlay={currentPlayerPlay} currentMachinePlay={currentMachinePlay} />
        </div>
        <div className='options mt-5 mb-4'>
          <PlayerOption setCurrentPlayerPlay={setCurrentPlayerPlay} currentPlayerPlay={currentPlayerPlay}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default GamePage;
