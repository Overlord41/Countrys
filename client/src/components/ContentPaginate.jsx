import React from 'react'
import { CardCounty } from './CardCounty'
import './css/ContentPaginate.css';
import { useSelector, useDispatch } from 'react-redux';
import { BtnPaginado } from './BtnPaginado';
import { action_change_filter, action_drop_name_search, action_get_detail_country, get_countries_default } from '../redux/actions/actions';

export const ContentPaginate = () => {
    const countriesStore = useSelector(store => store.countries);
    const numCountriesStore = useSelector(store => store.numCountries);
    const numButtons = Math.ceil(numCountriesStore/10);
    const nameCountry = useSelector(store => store.nameCountry)

    const dispatch = useDispatch();

    let cantidad = [];
    for(let i=1; i<=numButtons; i++){
        cantidad.push(i);
    }

    const changePage = (data) =>{
        dispatch(action_change_filter(data));
    }

    const searchDetails = (data) => {
        dispatch(action_get_detail_country(data));
    }

    const dropSearch = () =>{
        dispatch(action_drop_name_search());
        dispatch(get_countries_default());
    }

    return (
        <>
        <div className='Prueba1'>
            {
                (nameCountry)&&
                <div className='styleBusqueda'><h2>Buscaste: "{nameCountry}" </h2><button onClick={dropSearch}>X</button></div>
            }
            {countriesStore.map(e=> {
                    return (<CardCounty key={e.id} id={e.id} name={e.name} flag={e.flag} continents={e.continents} searchDetails={searchDetails} />)
                })
            }
        </div>
        <div className='btnsPaginado'>
            {
                cantidad.map((el,index)=>{
                    return(
                        <BtnPaginado key={index}  changeP={changePage} page={el}/>
                    )
                })
            }
        </div>
        </>
    )
}
