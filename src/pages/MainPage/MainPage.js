import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button'
import {RoundContext} from '../../context/providerRound'
import './style.css'

const MainPage = () => {

  const {value, setValue}= useContext(RoundContext);

  function handleStart() {}
  function handleRules() {}
  function handleChangeValueRound(event) {
    setValue(event.target.value)
  }

  return (
    <div className='container vh-100 d-flex justify-content-center flex-column '>
      <h1 className='tittle-main text-center '>Sheldon's game</h1>
      <div className='align-items-center d-flex justify-content-center flex-column text-center'>
        <div className='round-container d-flex justify-content-center align-items-center'>
          <span className='label-round '>
              round
          </span>
          <select name="round" className='value-rounds' value={value.round} onChange={handleChangeValueRound}>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className='d-flex justify-content-center flex-column text-center'> 
          <Button className='mb-3' variant="outline-success">Game start</Button>{' '}
          <Button className='mb-3' variant="outline-danger">Rules</Button>{' '}
        </div>
      </div>
    </div>
  );
};
  



export default MainPage;
