import { GET_COUNTRIES, GET_ACTIVITYS, GET_COUNTRY_DETAIL, POST_ACTIVITY, GET_COUNTRIES_PAGE, GET_COUNTRIES_DEFAULT, CHANGE_FILTER, GET_DETAIL_COUNTRY, DROP_DETAIL_COUNTRY } from "../actions/action_type";

const initialState = {
    countries: [],
    activities: [],
    detailCountry: undefined,
    page: 1,
    typeOrden: 'AZ',
    numCountries: undefined
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
            if(action.payload.typeContinent == 'Todos' ){
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
        default:
            return state
    }
}