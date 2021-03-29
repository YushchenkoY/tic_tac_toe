import React, {useState} from 'react';
import CalculateWinner from './CalculateWinner';
import Status from './Status';

const initialStateBoard = Array(9).fill(null)
const initialStateIsX = true
const initialStateX = 0
const initialStateO = 0

function Board() {
    const [board, setBoard] = useState(initialStateBoard)
    const [isX, setIsX] = useState(initialStateIsX);
    const winner = CalculateWinner(board);
    const [counterX, setCounterX] = useState(initialStateX);
    const [counterO, setCounterO] = useState(initialStateO)

    const gameFinish = Status(board);
    console.log("status -" + gameStatus)




    const upDateGame = (i, char) => {
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



    // СЧИТАЕТ ТОЛЬКО ДО РЕЗУЛЬТАТА 1:1
    const score = () => {
        if (winner == 'X') { counterX =+ 1
        }
        else if (winner == 'O') {counterO =+ 1
        }

        return (
            <span>{counterX} : {counterO}</span>
        )

    }    
    // const score = () => { 
    //     if (winner) { 
    //         if (winner == 'X') { 
    //             let newX = counterX + 1
    //             return setCounterX(newX)
    //         } else if (winner == 'O'){ 
    //             let newO = counterO + 1
    //             return setCounterO(newO)
    //         } 
    //     return (
    //         <span>{counterX} : {counterO}</span>
    //     )}
    // }

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
        <div className = 'horizon'>
            <div>
                <span className = 'first player'>Player X</span>
                {/* ХОЧУ ВЫВОД ИСТОРИИ ХОДОВ  */}
            </div>

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
            <div>
                <span className = 'first player'>Player O</span>
                {/* ХОЧУ ВЫВОД ИСТОРИИ ХОДОВ  */}
            </div>

        </div>
        {score()}
        <button className = 'btn' onClick = { () => {setBoard(initialStateBoard)}}> START NEW GAME </button>
        <button className = 'btn' onClick = { () => reset() }> RESET </button>
    </ div > )
}

export default Board