import {
    GET_COUNTRIES_PAGE,
    GET_COUNTRIES_DEFAULT,
    CHANGE_FILTER,
    GET_DETAIL_COUNTRY,
    GET_ACTIVITIES,
    GET_COUNTRY_FOR_NAME,
    DROP_NAME_SEARCH
}
    from "./action_type";
import axios from 'axios';

export const get_countries_default = () =>{
    return async(dispatch) => {
        let datosServer = await axios.get(`http://localhost:3001/countries?type=AZ&order=asc&continent=Todos&activity=allActivities`);
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
        const getActivity = document.getElementById('idActividad').value;
        let datosServer = await axios.get(`http://localhost:3001/countries?page=${page}&order=${orden}&type=${typeOrden}&continent=${typeContinent}&activity=${getActivity}`)
        if(typeContinent !== 'Todos'){
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
    return async(dispatch) => {
        const dataDetails = await axios.get(`http://localhost:3001/countries/${data}`)
        console.log(dataDetails.data);
        dispatch({
            type: GET_DETAIL_COUNTRY,
            payload: dataDetails.data
        })
    }
}

export const action_drop_detail_country = () => {
    return {
        type: GET_DETAIL_COUNTRY
    }
}

export const action_get_activities = () => {
    return async(dispatch) => {
        const dataActivities = await axios.get('http://localhost:3001/activity');
        dispatch({
            type: GET_ACTIVITIES,
            payload: dataActivities.data
        })
    }
}

export const action_get_country_for_name = () => {
    return async(dispatch) => {
        const NameCountry = document.getElementById('idSearchName').value;
        const dataForNameCountry = await axios.get(`http://localhost:3001/countries?name=${NameCountry}`)
        dispatch({
            type: GET_COUNTRY_FOR_NAME,
            payload: {
                data: dataForNameCountry.data,
                nameCountry: NameCountry
            }
        })
    }
}

export const action_drop_name_search = () => {
    return {
        type: DROP_NAME_SEARCH
    }
}