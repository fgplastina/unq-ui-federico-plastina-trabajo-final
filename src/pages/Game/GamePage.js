import React, {useState, useContext} from 'react';
import {RoundContext} from '../../context/providerRound'
import './style.css'

const GamePage = () => {
  
  const {value, setValue}= useContext(RoundContext);

  const [playStats, setPlayStats] = useState({
    win: 0,
    draw: 0,
    loose: 0,
  });

  const addPointToPlayStatParam = (param) => {
    setPlayStats({...playStats, [param]: playStats[param] + 1 });
  };

  return (
    <div className='container my-5  vh-100 d-flex justify-content-center flex-column '>
      <h1 className='title-game text-center'>Round 1</h1>
      <div className='align-items-center d-flex justify-content-center flex-column text-center'>
        <div className='selected-options'>
          <img src='' />
          <img src='' />
        </div>
        <div className='result-panel'>
        </div>
        <div className='options'>
          <input type="image" src="" style="border: double;" height="80" width="70"/>
        </div>
      </div>
    </div>
  )
}

export default GamePage;
