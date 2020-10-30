import React from 'react';
import { Link } from 'react-router-dom';
import image from '../icons/pp.jpg'



const Menu = () =>(
    <nav id='menu'>
       <Link  to="/Actividades">
            Curso 
        </Link>
        <Link to="/Actividades">
            Actividades
        </Link>
        <Link to="/Calificaciones">
            Calificaciones
        </Link>
        <Link id="User" to="/User">
        <img className="User" src={image}/>
           <div className="datos">
               <h4 id="user">Diego Romero Mora <br></br>    <p id="type">Visual</p></h4>
           </div>
        </Link>


    </nav>
    );
export default Menu;

