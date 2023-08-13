import './ListaOpciones.css'

const ListaOpciones = (props) => {
//* .map es para arreglos, por lo que si se declara en algo que no sea un arreglo dará un error (arreglo.map is not a function) en el caso de ser mal declarado como este ejemplo: const arreglo = {}
//! Método map -> arreglo.map( (equipo, index) => {
// return <option></option>
//! })
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejarCambio = (event) => {
        console.log("cambio", event.target.value)
        props.actualizarEquipo(event.target.value)
    }

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { equipos.map( (equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones;