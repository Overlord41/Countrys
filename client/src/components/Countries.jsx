import './css/Countries.css'
import { Countries_content } from './Countries_content'
import { SearchBar } from './SearchBar'
import { get_countries_default } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

export const Countries = () => {
    const dispatch = useDispatch();
    return (
        <div className='Countries'>
            <div className='Elements'>
                <SearchBar/>
                <br/>
                <div className="claseInicio" onClick={() => dispatch(get_countries_default())} >Inicio</div>
                <Countries_content />
            </div>
        </div>
    )
}
