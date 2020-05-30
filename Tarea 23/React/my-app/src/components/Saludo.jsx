import React from 'react'

const Saludo = () => {

    const saludo ="Marce"
    const imagen = "http://fing.uach.mx/util/2013/01/27/blason.png"
    return (
        <div>
            <h2>Bienvenida {saludo} </h2>
            <img src={imagen} alt="imagen"></img>
        </div>
    )
}

export default Saludo
