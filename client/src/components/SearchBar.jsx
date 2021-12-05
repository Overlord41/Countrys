import './css/SearchBar.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { action_drop_detail_country, action_get_country_for_name } from '../redux/actions/actions';

export const SearchBar = () => {
    const dispatch = useDispatch()
    const useBtnSearch = () => {
        dispatch(action_get_country_for_name());
        dispatch(action_drop_detail_country());
    }
    return (
        <div className='SearchNav'>
            <Link className="AgregarAct" to="../activity">Agregar Actividad</Link>
            <input type='text' id='idSearchName'/>
            <button onClick={useBtnSearch} >Buscar</button>
        </div>
    )
}