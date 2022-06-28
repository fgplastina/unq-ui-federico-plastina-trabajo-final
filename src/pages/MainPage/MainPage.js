import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {RoundContext} from '../../context/providerRound'
import './style.css'

const MainPage = () => {
  let navigate = useNavigate(); 



  const {value, setValue}= useContext(RoundContext);

  function handleStart() {}
  function handleRules() {}
  function handleChangeValueRound(event) {
    setValue(event.target.value)
  }

  function routeChange(new_path){ 
    console.log(new_path)
    let path = new_path; 
    navigate(path);
  }


  return (
    <div className='container vh-100 d-flex justify-content-center flex-column '>
      <h1 className='tittle-main text-center '>Sheldon's best game</h1>
      <div className='align-items-center d-flex justify-content-center flex-column text-center'>
        <div className='round-container d-flex justify-content-center align-items-center'>
          <span className='label-round '>
              rounds
          </span>
          <select name="round" className='value-rounds' value={value.round} onChange={handleChangeValueRound}>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className='d-flex justify-content-center flex-column text-center'> 
          <Button className='mb-3' variant="outline-success" onClick={() => navigate('/game')}>Game start</Button>{' '}
          <Button className='mb-3' variant="outline-danger" onClick={() => navigate('/rules')}>Rules</Button>{' '}
        </div>
      </div>
    </div>
  );
};
  



export default MainPage;
