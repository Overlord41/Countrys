import './css/SearchBar.css';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
    return (
        <div className='SearchNav'>
            <Link className="AgregarAct" to="../activity">Agregar Actividad</Link>
            <input type='text'/>
            <button>Buscar</button>
        </div>
    )
}