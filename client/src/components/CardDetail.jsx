import './css/CardDetail.css';
import { useDispatch } from 'react-redux';
import { action_drop_detail_country } from '../redux/actions/actions';

export const CardDetail = (props) => {
    const dispatch = useDispatch();
    const aream2 = (props.data.area)/1000;
    return (
        <div className='CardDetail'>
            <img src={props.data.flag} />
            <p>COD: {props.data.id}</p>
            <p>País: {props.data.name}</p>
            <p>Capital: {props.data.capital}</p>
            <p>Subregión: {props.data.subregion}</p>
            <p>Area: {aream2} km2</p>
            <p>Población: {props.data.population}</p>
            <p>Actividades turísticas: Hacer un Map</p>
            <div className='buttonReturn' onClick={()=> { dispatch(action_drop_detail_country())}}>Regresar</div>
        </div>
    )
}
