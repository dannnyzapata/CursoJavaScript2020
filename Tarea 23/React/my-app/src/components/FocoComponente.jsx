import React,{useState,useEffect} from 'react'

const FocoComponente = (props) => {

    const [estadoFoco, setEstadoFoco] = useState(false)
    const [ubicacion, setUbicacion] = useState(false)
    const control = () =>{
        console.log("Click");
        setEstadoFoco(estadoFoco => !estadoFoco);
    }

    useEffect(() => {
        setUbicacion(props.ubicacion);
    });
    return (
        <div>
            {estadoFoco ? "Prendido" : "Apagado"}
            <img src ={estadoFoco ? "/images/focoOn.png" : "/images/focoOff.png"}
            alt="Foco apagado"
            onClick={control}></img>
            <br></br>
            <p>{ubicacion}</p>
        </div>
    )
}

export default FocoComponente
