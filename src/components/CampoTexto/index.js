import { useState } from 'react'
import './CampoTexto.css'

// Puedes nombrar el parámetro props como desees, ya que no es una palabra reservada en JavaScript ni en React.Sin embargo, es una convención ampliamente aceptada y recomendada para mejorar la legibilidad del código y la comprensión de que estas propiedades son pasadas al componente. Props = propiedades
const CampoTexto = (props) => {
    const placeholderModificador = `${props.placeholder}...`
    
    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value)
    }

    return <div className='campo-texto'>
        <label>{props.titulo}</label>
        {/* {props.titulo} Le da a cada uno de los espacios de la lista el nombre, puesto y foto, respectivamente, igual que {placeholderModificador}, ambos se conectan a Formulario.js */}
        <input
            placeholder={placeholderModificador}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
        {/* el props.required está vinculado al Formulario.js, si se escribe aquí solo required TODO será requerido, pero si en algún momento se quiere que sean solo unos en particular, se le coloca el required en el props del Formulario.js y aquí se coloca entre llaves */}
    </div>
}

export default CampoTexto;