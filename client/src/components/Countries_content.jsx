import './css/Countries_content.css';
import { useSelector, useDispatch } from 'react-redux';
import { action_change_filter } from '../redux/actions/actions';
import { ContentPaginate } from './ContentPaginate';
import { CardDetail } from './CardDetail';

export const Countries_content = () => {

    const countryDetail = useSelector(store => store.detailCountry);
    const dispatch = useDispatch();
    // const infoStore = useSelector(store => {
    //     return {
    //         countries: store.countries,
    //         nmCountries: store.numCountries
    //     }
    // } )

    // console.log(infoStore)

    //Lista Continentes
    const listaContinentes = [
        'Todos',
        'Asia',
        'Europe',
        'Africa',
        'Oceania',
        'South America',
        'North America',
        'Antarctica'
    ]

    return (
        <>
            <label>Orden: </label>
            <select id='orderASC' onChange={() => {
                dispatch(action_change_filter(1));
            }}>
                <option value='asc'>asc</option>
                <option value='des'>des</option>
            </select>

            <label> Tipo: </label>
            <select id='typeOrder' onChange={() => {
                dispatch(action_change_filter(1));
            }}>
                <option value='AZ' >A-Z</option>
                <option value='population'>población</option>
            </select>

            <label> Continente: </label>
            <select id='idContinent' onChange={() => {
                dispatch(action_change_filter(1));
            }}>
                {
                    listaContinentes.map(el => <option value={el}>{el}</option>)
                }
            </select>

            <label> Actividad: </label>
            <select id='idActividad' onChange={() => {
                dispatch(action_change_filter(1));
            }}>
                <option value='allActivities'></option>
                <option>Acampada</option>
                <option>Múltiple</option>
            </select>
            {
                (countryDetail===undefined)?<ContentPaginate /> : <CardDetail data={countryDetail} />
            }
        </>
    )
}