const axios = require('axios');
const { Country } = require('../db');


const updateCountries = async() => {
    const countries = await axios.get('https://restcountries.com/v3/all');
    countries.data.map( e => {
        if(Array.isArray(e.capital)){
            Country.create (
                {
                id: e.cca3,
                name: e.name.common,
                flag: e.flags[0],
                continents: e.continents[0],
                capital: e.capital[0],
                subregion: e.subregion,
                area: e.area,
                population: e.population
            })
        }
        else{
            Country.create (
                {
                id: e.cca3,
                name: e.name.common,
                flag: e.flags[0],
                continents: e.continents[0],
                capital: e.capital,
                subregion: e.subregion,
                area: e.area,
                population: e.population
            })
        }
    })
    console.log("datos cargados");
}

module.exports = {
    updateCountries
}