import React,{ useState, useEffect} from 'react'



const Counter = ({initial, stock, onAdd}) => {
    const [cuenta, setCuenta] = useState(initial);
return (
    <div>  
    <button disabled={cuenta <=0}onClick={ () =>setCuenta (cuenta - 1)} className="btn"> - </button>
    <span className='text-lg'>{cuenta}</span>
    <button  disabled={cuenta >= stock}onClick={ () =>setCuenta (cuenta + 1)} className="btn btn-active"> + </button>
    <label htmlFor="my-modal" disabled={cuenta == 0} onClick={() => onAdd(cuenta)}  className="btn">Añadir al carrito</label>
    <input type="checkbox" id="my-modal" className="modal-toggle" />
    <div className="modal">
    <div className="modal-box">
    <h2 className="text-3xl text-center">El producto se agregó al carrito!</h2>
    <div className="modal-action">
    <label htmlFor="my-modal" className="btn">Seguir comprando</label>
    </div>
    </div>
    </div>
    </div>
)
}

export default Counter