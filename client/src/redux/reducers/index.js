import { GET_ACTIVITIES, GET_COUNTRIES_PAGE, GET_COUNTRIES_DEFAULT, CHANGE_FILTER, GET_DETAIL_COUNTRY, DROP_DETAIL_COUNTRY, GET_COUNTRY_FOR_NAME, DROP_NAME_SEARCH } from "../actions/action_type";

const initialState = {
    countries: [],
    activities: undefined,
    detailCountry: undefined,
    page: 1,
    typeOrden: 'AZ',
    numCountries: undefined,
    nameCountry: undefined
}

export const rootRecuder = (state = initialState, action) =>{
    switch(action.type){
        case GET_COUNTRIES_DEFAULT:
            return {
                ...state,
                numCountries:action.payload.count,
                countries:action.payload.result
            }
        case GET_COUNTRIES_PAGE:
            return {
                ...state,
                numCountries:action.payload.data.count,
                countries: action.payload.data.result,
                page:action.payload.page
            }
        case CHANGE_FILTER:
            if(action.payload.typeContinent === 'Todos' ){
                return {
                    ...state,
                    numCountries:action.payload.data.count,
                    countries: action.payload.data.result,
                    page:action.payload.page,
                    typeOrden: action.payload.typeOrden

                }
            }else{
                let result = (action.payload.data.result).slice((10 * (action.payload.page -  1)) , (10 * (action.payload.page -  1)) + 10);
                return {
                    ...state,
                    numCountries:action.payload.data.count,
                    countries: result,
                    page:action.payload.page,
                    typeOrden: action.payload.typeOrden
                }
            }
        case GET_DETAIL_COUNTRY:
            return {
                ...state,
                detailCountry: action.payload
            }
        case DROP_DETAIL_COUNTRY:
            return {
                ...state,
                detailCountry: undefined
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case GET_COUNTRY_FOR_NAME:
            return {
                ...state,
                nameCountry: action.payload.nameCountry,
                countries: action.payload.data.result,
                numCountries: action.payload.data.count
            }
        case DROP_NAME_SEARCH:
            return {
                ...state,
                nameCountry: undefined
            }
        default:
            return state
    }
}