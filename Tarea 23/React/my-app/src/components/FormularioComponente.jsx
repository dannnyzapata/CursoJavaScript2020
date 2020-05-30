import React, {useState} from 'react'

const FormularioComponente = () => {
    const [nombre, setNombre] = useState("Hola mundo")
    return (
        <div>
            <form>
                {nombre}
                <br></br>
                <input type="text" 
                    placeholder="Ingresa tu nombre"
                    onChange = {(e) => setNombre(e.target.value)}>

                </input>
            </form>
        </div>
    )
}

export default FormularioComponente
