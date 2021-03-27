import React from 'react';

function Players() {

    return (
        <div className = 'players'>
            <div className = 'player'>
                <div> O player:</div>
                <select>
                    <option id = '1' value="Human" style="height:21px;">Human</option>
                    <option id = '' value="Computer" style="height:21px;">Computer</option>
                </select>
            </div>
            <div className = 'player'>
                <div> X player:</div>
                <select>
                    <option id = '2' value="Human" style="height:21px;">Human</option>
                    <option id = '' value="Computer" style="height:21px;">Computer</option>
                </select>
            </div>
            <button>OK</button>
        </div>
    )
}

export default Players