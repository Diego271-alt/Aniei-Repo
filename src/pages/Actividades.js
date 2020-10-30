import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Actividades.css'
import icon from '../icons/deplegeable menu.png'


class Actividades extends React.Component{
  

    render(){
            return(
                <div className="Main">
                    <div className="Activiti">
                    <div className="Unidades">
           
                        <ul class="collapsible expandable">
    <li>
      <div class="collapsible-header">Unidad 1 </div>
      <div class="collapsible-body"><span>Ejercicio 1</span></div>
      <div class="collapsible-body"><span>Ejercicio 2</span></div>
      <div class="collapsible-body"><span>Ejercicio 3</span></div>
    
    </li>
    <li>
      <div class="collapsible-header">Unidad 2</div>
      <div class="collapsible-body"><span>Ejercicio 2.</span></div>
    </li>
    <li>
      <div class="collapsible-header">Undiad 3</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header">Undiad 4</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header">Undiad 5</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
        
                              

                    </div>

                    <div className="Content">
                        <div className="Actividad">
                            <div className=" Actividad-contenido">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wpISo9TNjfU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            </div>
                            <div className="Actividad-instrucciones">
                                <h2>TITLE OF ACTIVITI</h2>
                                <p >Loremhas ke a type specimen book. It habut also the leap into electronic typesetting, remaining essentially unchanged. It was p</p>
                            </div>

                        </div>
                
                    </div>
      
                    </div>
                    <div className="Actividadrespuesta">
                        <div className="Actividad2">
                        <h2> Intruccciones especificas</h2>
                            <div className="testAct">
                                <input type="text" placeholder="Ingresa aquí tu texto "></input>
                                <button type="submit"> Enviar</button>
                            </div>

                        </div>
                        </div>
                
                </div>
            )




    }
}
export default Actividades;

