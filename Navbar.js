import React from 'react'

import './Navbar.css';
//import {Link} from 'react-router-dom';

const links = ["About", "Discography", "Concert Tours", "Latters"];


export const Navbar = (props) => {
    const { routes } = props; 
    return (
        <nav className="navbar-container">
            <ul className="navbar-top">
                { routes==null ? links.map((link, index)=><li><a href={link}>{link}</a></li>):
                 (routes.map((route, index)=><li><a href={route}>{route}</a></li>))}
            </ul>
        </nav>
    )
}
