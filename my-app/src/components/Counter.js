import React,{ useState, useEffect} from 'react'


const Counter = () => {
    const [cuenta, setCuenta] = useState(0);
return (
    <div>
        
<button  onClick={ () =>setCuenta (cuenta + 1)} className="btn btn-active">Agregar</button>
<h2>{cuenta}</h2>
<button onClick={ () =>setCuenta (cuenta - 1)} className="btn">Quitar</button>


        
    </div>
)
}

export default Counter