import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const ResultPanel = ({wins, losses, draws}) => {
  return  (
    <div  className='container mb-4 d-flex justify-content-center '>
      <Row className='container text-center'>
         <Col className='wins'>
         <span className="text ">{wins === 1 ? 'Win: ' : 'Wins: '}</span>
         <span className="number">{wins}</span>
        </Col>
         <Col className='losses'>
         <span className="text">{losses === 1 ? 'Loss: ' : 'Losses: '}</span>
         <span className="number">{losses}</span>
        </Col>
         <Col className='draws'>
         <span className="text">{draws === 1 ? 'Draw: ' : 'Draws: '}</span>
         <span className="number">{draws}</span>
        </Col>
      </Row>
    </div>

  )
}
