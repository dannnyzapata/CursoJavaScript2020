import React, { useState } from 'react'

const ContadorComponent = () => {

    const [count,setCount] = useState(0);

    const aumentar = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <h3>
                {
                    count >= 18 ? "Mayor de edad" : "Menor de edad"
                }
            </h3>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}

export default ContadorComponent
