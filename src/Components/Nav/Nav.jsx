import { React, useEffect } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export function Nav() {


    useEffect(() => {
    }, []);

    return (
        <div className="nav">
            <h1 className="nav-title">DOG APP</h1>
            <NavLink to="/home"><div className='navlink'>CUCHA</div></NavLink>
            <NavLink to="/create"><div className='navlink'>CREAR PERRO</div></NavLink>
        </div>
    );
}

export default Nav;