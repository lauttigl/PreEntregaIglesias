import React,{ useState, useEffect} from 'react'



const Counter = ({initial, stock, onAdd}) => {
    const [cuenta, setCuenta] = useState(initial);
return (
    <div>  
    <button disabled={cuenta <=0}onClick={ () =>setCuenta (cuenta - 1)} className="btn"> - </button>
    <span className='text-lg'>{cuenta}</span>
    <button  disabled={cuenta >= stock}onClick={ () =>setCuenta (cuenta + 1)} className="btn btn-active"> + </button>
    <p><button  disabled={cuenta == 0}  className="btn btn-active" onClick={() => onAdd(cuenta)} >Añadir al carrito</button></p>
    </div>
)
}

export default Counter