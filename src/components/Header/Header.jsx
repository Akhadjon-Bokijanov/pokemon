import React from 'react'
import { Link } from 'react-router-dom';
import './HeaderStyle.css';

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/">
                <div className="app-name">Pokemon App</div>
            </Link>
            <div className="header-items">
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/my-pokemons">
                    <div>My pokemons</div>
                </Link>
            </div>
        </div>
    )
}

export default Header
