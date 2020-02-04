import React from 'react';
import { linkSync } from 'fs';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }
    render (){
        return (
            this.state.isOpen ?
                <React.Fragment>
                    <a onClick={this._toggleMenu}>🥞</a>
                    <ul>
                        {
                            this.props.array.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </React.Fragment>
                :
                <a onClick={this._toggleMenu}>🍔</a>
        );
    }

    _toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('menu toggled!');
        });
    } 
}


export default Navbar;