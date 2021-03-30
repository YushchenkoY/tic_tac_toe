import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {calculateWinner} from "./helpers";


const PLAYER_1 = "X";
const PLAYER_2 = "O";
const initialStateBoard = Array(9).fill(null);
const initialStateIsX = true;
const initialStateHistory = [];
const initialScore = {
  [PLAYER_1]: 0,
  [PLAYER_2]: 0,
};

export function useBoard() {
  const [history, setHistory] = useState(initialStateHistory);
  const [board, setBoard] = useState(initialStateBoard);
  const [isX, setIsX] = useState(initialStateIsX);
  const [score, setScore] = useState(initialScore);
  
  
  /**
   * USE MEMOS
   */
  const winner = useMemo(() => {
    return calculateWinner(board);
  }, [board]);
  
  const isGameFinish = useMemo(() => {
    return board.every(el => el !== null);
  }, [board]);
  
  const status = useMemo(() => {
    if (winner) {
      return (<span>Winner is {winner}</span>)
    }
    
    if (isGameFinish === true && winner === null) {
      return (<span>DRAW</span>)
    }
    
    return (<span> Next {isX ? PLAYER_1 : PLAYER_2}</span>)
  }, [winner, isGameFinish, board]);
  
  
  /**
   * USE EFFECTS
   */
  useEffect(() => {
      if (winner) {
        setScore(score => ({
          ...score,
          [winner]: score[winner] + 1
        }));
      }
    },
    [winner]
  );
  
  /**
   * USE CALLBACKS
   */
  const upDateGame = useCallback((i) => {
    const newBoard = [...board];
    if (winner || newBoard[i]) return null;
    newBoard[i] = isX ? PLAYER_1 : PLAYER_2;
    setHistory(history => ([
      ...history,
      newBoard,
    ]));
    setBoard(newBoard);
    setIsX(!isX);
    
  }, [board, winner, isX]);

  const onClickNewGame = useCallback(() => {
    setBoard(initialStateBoard);
    setHistory(initialStateHistory);
  }, []);
  
  const onClickReset = useCallback(() => {
    setBoard(initialStateBoard);
    setIsX(initialStateIsX);
    setScore(initialScore);
    setHistory(initialStateHistory);
  }, []);
  
  return {
    history,
    setHistory,
    board,
    winner,
    isGameFinish,
    status,
    upDateGame,
    onClickNewGame,
    onClickReset,
    score,
    PLAYER_1,
    PLAYER_2
  };
}

export default useBoard;
