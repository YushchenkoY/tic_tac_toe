import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {calculateWinner} from "./helpers";
import { BoardItem, HistoryItem, IScoreState } from './types';

const PLAYER_1: string = "X";
const PLAYER_2: string = "O";
const initialStateBoard = Array(9).fill(null);
const initialStateIsX = true;
const initialStateHistory: HistoryItem[] = [];

const initialScore: IScoreState = {
  [PLAYER_1]: 0,
  [PLAYER_2]: 0,
};

export function useBoard() {
  const [history, setHistory] = useState<HistoryItem[]>(initialStateHistory);
  const [board, setBoard] = useState<BoardItem[]>(initialStateBoard);
  const [isX, setIsX] = useState(initialStateIsX);
  const [score, setScore] = useState<IScoreState>(initialScore);


  /**
   * USE MEMOS
   */
  const winner = useMemo<string | null>(() => {
    return calculateWinner(board);
  }, [board]);

  const isGameFinish = useMemo(() => {
    return board.every(el => el !== null);
  }, [board]);

  const status = useMemo(() => {
    if (winner) {
      return (<span>Winner is {winner}</span>)
    }

    if (isGameFinish && winner === null) {
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
