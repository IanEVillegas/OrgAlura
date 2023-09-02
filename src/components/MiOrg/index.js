import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    /* Funcionalidad 
    Estado - hooks
    useState */
    //const[nombreVariable, funcionActualiza] = useState(valorInicial)
    //const [nombre, actualizarNombre] = useState()
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;