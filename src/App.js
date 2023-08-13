import { useState } from 'react';
//import logo from './logo.svg'; importación del logotipo
import './App.css';//importación del css. Ambas importaciones tienen su manera de hacerse
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  //Ternario --> condición ? seMuestra : no seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      {/* {Header()}
       <Header></Header> Cualquiera de estas tres funcionan igual, trabajan con la importación de Header, en este caso */}
      <Header /> 
      {mostrarFormulario && <Formulario />}
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {/* {mostrarFormulario === true ? <Formulario /> : <div></div> } */}
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
