import React, {useState} from 'react';
import './Board.css'
import calculateWinner from './How_is_winner';

const initialStateBoard = Array(9).fill(null)
const initialStateIsX = true


function Board() {
    const [board, setBoard] = useState(initialStateBoard)
    const [isX, setIsX] = useState(initialStateIsX);
    const winner = calculateWinner(board);

    const upDateGame = (i, char) => {
        const newBoard = [...board]
        if (winner || newBoard[i]) return null
        newBoard[i] = isX ? 'X' : 'O'
        setBoard(newBoard)
        setIsX(!isX)
    }


    const startNewGame = () => {
        return (
            <button className = 'start__btn' onClick = { () => {setBoard(initialStateBoard)}}> START NEW GAME </button>
        )
    }



    return (
    <> 
        {startNewGame()}
        <div className = 'table'>
            <biv className = 'line'>
                <div className = 'cell' onClick = { () => upDateGame(0) } >{board[0]}</div>
                <div className = 'cell' onClick = { () => upDateGame(1) } >{board[1]}</div>
                <div className = 'cell' onClick = { () => upDateGame(2) } >{board[2]}</div>
            </biv>
            <biv className = 'line'>
                <div className = 'cell' onClick = { () => upDateGame(3) } >{board[3]}</div>
                <div className = 'cell' onClick = { () => upDateGame(4) } >{board[4]}</div>
                <div className = 'cell' onClick = { () => upDateGame(5) } >{board[5]}</div>
            </biv>
            <biv className = 'line'>
                <div className = 'cell' onClick = { () => upDateGame(6) } >{board[6]}</div>
                <div className = 'cell' onClick = { () => upDateGame(7) } >{board[7]}</div>
                <div className = 'cell' onClick = { () => upDateGame(8) } >{board[8]}</div>
            </biv>
            <div>Winner is {winner}</div>
        </div>
    </ >
)
}

export default Board