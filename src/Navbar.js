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
                <ul>
                    {
                        this.props.array.map((item, index)=> {
                        return <li>{item}</li>
                        })
                    }
                </ul>
                : 
                <a>Hamburger</a>
        )
    };
    _toggleMenu = () => {
        this.setState.isOpen = true
    }

}


export default Navbar;