import React from 'react';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import './style.css'

const NotFound = () => {
  let navigate = useNavigate(); 
  return (
    <div className="row d-flex justify-content-center center flex-column p-5 container-not-found">
      <div className="sub-container-not-found text-center">
        <h3 className='mt-4 mb-4'>Page not found</h3>
        <h2 className='mb-4'>404</h2>
        
          <Button className='mb-4' variant="outline-secondary" onClick={() => navigate('/')}>Go home</Button>{' '}
      </div>
    </div>
)
}
export default NotFound;
