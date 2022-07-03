import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Header = () => {

  const navigate = useNavigate();

  return (
    <nav className=" d-flex justify-content-between align-items-center  container-header  px-5">
      <span
        onClick={() => navigate('/')}
        className="logo-header"
        aria-hidden="true"
      >
        Sheldon's game 
      </span>
    </nav>
  );
};
