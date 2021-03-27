import React from 'react';
import logo from '../../img/logo.png';

class Navbar extends React.Component {
    constructor () {
        super()
    }
    render(){

        return (
            <div className = 'navbar'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

export default Navbar