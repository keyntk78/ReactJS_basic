import React from "react";
import './nav.scss';
import {Link, NavLink} from "react-router-dom";

class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
                <NavLink to="/" activeClassName="active">
                    Home
                </NavLink>
                <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default Nav