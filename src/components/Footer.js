import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () =>(
    <nav id='Footer'>
       <Link to="/Actividades">
            About us 
        </Link>
        <Link  to="/Actividades">
            Q&A
        </Link>
        <Link to="/Calificaciones">
            Support
        </Link>


    </nav>
    );
export default Footer;
