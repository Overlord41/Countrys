import {
    GET_COUNTRIES,
    GET_ACTIVITYS,
    GET_COUNTRY_DETAIL,
    POST_ACTIVITY,
    GET_COUNTRIES_PAGE,
    GET_COUNTRIES_DEFAULT,
    CHANGE_FILTER,
    GET_DETAIL_COUNTRY
}
    from "./action_type";
import axios from 'axios';

export const get_countries_default = () =>{
    return async(dispatch) => {
        let datosServer = await axios.get(`http://localhost:3001/countries?type=AZ&order=asc&continent=Todos`);
        dispatch({
            type: GET_COUNTRIES_DEFAULT,
            payload: datosServer.data
        })
    }
}

export const action_get_countries_page = (page) => {
    return async(dispatch) => {
        const orden = document.getElementById('orderASC').value;
        const typeContinent = document.getElementById('idContinent').value;
        const typeOrden = document.getElementById('typeOrder').value;

        let datosServer = await axios.get(`http://localhost:3001/countries?page=${page}&order=${orden}&type=${typeOrden}&continent=${typeContinent}`)
        let dataCountriesPage = {
            data: datosServer.data,
            page: page
        }
        dispatch({
            type: GET_COUNTRIES_PAGE,
            payload: dataCountriesPage
        })
    }
}

export const action_change_filter = (page) => {
    return async(dispatch) => {
        const orden = document.getElementById('orderASC').value;
        const typeContinent = document.getElementById('idContinent').value;
        const typeOrden = document.getElementById('typeOrder').value;
        let datosServer = await axios.get(`http://localhost:3001/countries?page=${page}&order=${orden}&type=${typeOrden}&continent=${typeContinent}`)
        if(typeContinent!== 'Todos'){
            let dataCountries = (datosServer.data.result).filter(e=> e.continents == typeContinent);
            let dataCountriesPage = {
                data: {
                    result: dataCountries,
                    count: dataCountries.length
                },
                page: page,
                typeContinent : typeContinent,
                typeOrden: typeOrden
            }
            dispatch({
                type: CHANGE_FILTER,
                payload: dataCountriesPage
            })
        }else{
            let dataCountriesPage = {
                data: datosServer.data,
                page: page,
                typeContinent : typeContinent,
                typeOrden: typeOrden
            }
            dispatch({
                type: CHANGE_FILTER,
                payload: dataCountriesPage
            })
        }
    }
}

export const action_get_detail_country = (data) => {
    return {
        type: GET_DETAIL_COUNTRY,
        payload: data
    }
}

export const action_drop_detail_country = () => {
    return {
        type: GET_DETAIL_COUNTRY
    }
}