import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {calculateWinner} from './helpers';
import useBoard from './useBoard';

function Board() {
  
  
  const {
    board,
    history,
    status,
    upDateGame,
    onClickNewGame,
    onClickReset,
    PLAYER_1,
    PLAYER_2,
    score,
  } = useBoard();
  
  return (
    <div className='vertically'>
      {status}
      <div className='horizon'>
        <div>
          <span className='first player'>Player X</span>
        </div>
        
        <div className='table'>
          <div className='line'>
            {board.map((el, idx) => (
              <div key={idx} className='cell' onClick={() => upDateGame(idx)}>{el}</div>
            ))}
          </div>
        </div>
        <div>
          <span className='first player'>Player O</span>
        </div>
      </div>
      <span>{score[PLAYER_1]} : {score[PLAYER_2]}</span>
      <button className='btn' onClick={onClickNewGame}>START NEW GAME</button>
      <button className='btn' onClick={onClickReset}>RESET</button>
        
        <div className='history'>
            {history.map(historyItem => (
              <div className='historyItem'>
                  {historyItem.map(cell => (
                    <div className='historyCell'>{cell}</div>
                  ))}
              </div>
            ))}
        </div>
    </ div>)
}

export default Board
