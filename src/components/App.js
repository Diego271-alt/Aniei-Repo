import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Actividades from '../pages/Actividades';
import Menu from './menu'
import Calificaciones from '../pages/Calificaciones'
import Footer from './Footer';

const Tareas= () => <div>tAREAS</div>


const App = () =>(
  <BrowserRouter>
    <Menu/>
    <Route exact path='/Actividades' component= {Actividades}/>
    <Route exact path='/Calificaciones' component= {Calificaciones}/>
    <Footer/>

  </BrowserRouter>

);

export default App;