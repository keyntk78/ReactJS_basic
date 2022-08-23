import React from "react";
import './nav.scss'

class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">Todos</a>
                <a href="#about">About</a>
            </div>
        )
    }
}

export default Nav