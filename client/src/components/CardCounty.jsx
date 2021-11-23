import './css/CardCounty.css'
import { useSelector } from 'react-redux';


export const CardCounty = (props) => {
    const mostrarOrden = useSelector(store => store.typeOrden)
    return (
        <div className='tarjetaCountry'>
            <h2>{props.name}</h2>
            <br/>
            <div className='imagenBandera'>
                <img src={props.flag} />
            </div>
            <h4>{props.continents}</h4>
            {
                (mostrarOrden=='population')&&<p> Población: {props.population}</p>
            }
            <br/>
            <div className='buttonDetalles' onClick={() => {props.searchDetails(props)}}>Detalles</div>
        </div>
    )
}