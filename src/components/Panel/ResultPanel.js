import React from 'react';

export const ResultPanel = ({wins, losses, draws}) => {
  return  (
    <div  className='container my-5 d-flex justify-content-center flex-column'>
      <div className="result-panel d-flex justify-content-center flex-column align-items-center">
       <div className="wins">
         <span className="text column">{wins === 1 ? 'Win' : 'Wins'}</span>
         <span className="number">{wins}</span>
       </div>
       <div className="losses column">
         <span className="text">{losses === 1 ? 'Loss' : 'Losses'}</span>
         <span className="number">{losses}</span>
       </div>
       <div className="draws column">
         <span className="text">{draws === 1 ? 'Draw' : 'Draws'}</span>
         <span className="number">{draws}</span>
       </div>
       </div>
    </div>

  )
}
