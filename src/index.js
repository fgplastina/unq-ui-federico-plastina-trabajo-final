import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game';
import {RoundProvider} from './context/providerRound'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RoundProvider>
      <Game/>
    </RoundProvider>
  </React.StrictMode>,
);
