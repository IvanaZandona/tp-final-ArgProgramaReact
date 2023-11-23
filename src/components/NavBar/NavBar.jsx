import '../components.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/taskform" >Gestionar lista de tareas ⇨ </Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default NavBar;
