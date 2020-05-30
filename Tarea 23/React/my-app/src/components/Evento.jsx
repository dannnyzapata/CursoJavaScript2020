import React, {Fragment, useState} from 'react'

const Evento = () => {

    const [texto, setTexto] = useState("Este es un texto desde el estado");

    const cambiarTexto = () =>{
        //console.log("Funcion cambiar texto");
        setTexto("Texto modificado")
    }

    return (
        <Fragment>
            <h1>{texto}</h1>
            <button onClick={cambiarTexto}>Cambiar texto</button>
        </Fragment>
    )
}  

export default Evento
