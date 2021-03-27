import React from 'react';
import Board from '../functional/Board';
import Navbar from '../functional/Navbar'
import Players from './Players';

function Playing_field() {
    return (
        <div className="Playing_field">
            <Navbar />
            <Board />
            {/* <Players /> */}
        </div>
    );
    }
    
export default Playing_field;