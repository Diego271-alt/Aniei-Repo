import React, {Component} from 'react';
import axios from 'axios'

class Usuarios extends Component {

  constructor (){
    super();
    this.state={
      usuarios: []
    }
  }

  async componentDidMount(){

      const response= await axios.get('http://jsonplaceholder.typicode.com/users')
      console.log(response.data)
      
    this.setState({
        usuarios: response.data
    })
  }
   filas= () => (
    this.state.usuarios.map((usuario) => (
        <tr key={usuario.id}>
          <td>
            {usuario.name}
          </td>
          <td>
            {usuario.email}
          </td>
          <td>
            {usuario.website}
          </td>
        </tr>
    
    ))
   );

  render(){
    
  return (

    <div className='margen'>
        <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre: </th>
            <th>Correo: </th>
            <th>Link: </th>
          </tr>
        </thead>
        <tbody>
          {this.filas()}
  
        </tbody>
      </table>
  
    </div>
  
    
    )
  }
}

export default Usuarios