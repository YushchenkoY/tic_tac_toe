import React, {useState, useEffect} from 'react';
import CalculateWinner from './CalculateWinner';

const initialStateBoard = Array(9).fill(null);
const initialStateIsX = true;
const initialStateX = 0
const initialStateO = 0


function Board() {
    const [board, setBoard] = useState(initialStateBoard)
    const [isX, setIsX] = useState(initialStateIsX);
    const winner = CalculateWinner(board);
    const [counterX, setCounterX] = useState(initialStateX);
    const [counterO, setCounterO] = useState(initialStateO)

    const gameFinish = board.every((el) => el !== null);


    const upDateGame = (i) => {
        const newBoard = [...board]
        if (winner || newBoard[i]) return null
        newBoard[i] = isX ? 'X' : 'O'
        setBoard(newBoard)
        setIsX(!isX)
    }

    const status = () => {
        if (winner) { 
            return (<span>Winner is {winner}</span> )
        } else if (gameFinish === true && winner === null) {
            return (<span>DRAW</span>)
        } else {
            return (<span> Next  { isX ? 'X' : 'O' }</span>)
        }
    }

    useEffect(() => {
        if (winner == 'X') { 
            setCounterX(counterX + 1);
        } else if (winner == 'O') { 
            setCounterO(counterO + 1);
        }
    }, [winner])


    const reset = () => {
        return (
                setBoard(initialStateBoard),
                setIsX(initialStateIsX),
                setCounterX(initialStateX),
                setCounterO(initialStateO)
        )
    }

    return (
    <div className = 'vertically'> 
        {status()}
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
        </div>
        <div className = 'functional'>
            <span>{counterX} : {counterO}</span>
            <button className = 'btn' onClick = { () => {setBoard(initialStateBoard)}}> START NEW GAME </button>
            <button className = 'btn' onClick = { () => reset() }> RESET </button>
        </div>
    </ div > 
    )
}

export default Board