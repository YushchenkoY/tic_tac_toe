import React from 'react';
import './Board.css'

class Board extends React.Component{
    constructor() {
        super()
        this.state = {
            game: [
                null, null, null,
                null, null, null,
                null, null, null,
            ],
            isX: true
        }
    }

    upDate = (i, char) => {
        let newGameState = [...this.state.game]
        newGameState[i] = char
        this.setState( {game: newGameState,
                        isX: !this.state.isX}
        )
    }

    render (){

        return (
            <div className = 'table'>
                <biv className = 'line'>
                    <div className = 'cell' onClick={() => this.upDate(0, this.state.isX !== true ? 'X' : 'O')} >{this.state.game[0]}</div>
                    <div className = 'cell' onClick={() => this.upDate(1, this.state.isX !== true ? 'X' : 'O')} >{this.state.game[1]}</div>
                    <div className = 'cell' onClick={() => this.upDate(2, this.state.isX !== true ? 'X' : 'O')} >{this.state.game[2]}</div>
                </biv>
                <biv className = 'line'>
                    <div className = 'cell' onClick={() => this.upDate(3, this.state.isX !== true ? 'X' : 'O')} >{this.state.game[3]}</div>
                    <div className = 'cell' onClick={() => this.upDate(4, this.state.isX !== true ? 'X' : 'O')} >{this.state.game[4]}</div>
                    <div className = 'cell' onClick={() => this.upDate(5, this.state.isX !== true ? 'X' : 'O')} >{this.state.game[5]}</div>
                </biv>
                <biv className = 'line'>
                    <div className = 'cell' onClick={() => this.upDate(6, this.state.isX !== true ? 'X' : 'O')} >{this.state.game[6]}</div>
                    <div className = 'cell' onClick={() => this.upDate(7, this.state.isX !== true ? 'X' : 'O')} >{this.state.game[7]}</div>
                    <div className = 'cell' onClick={() => this.upDate(8, this.state.isX !== true ? 'X' : 'O')} >{this.state.game[8]}</div>
                </biv>
            </div>
        )
    }
}

export default Board