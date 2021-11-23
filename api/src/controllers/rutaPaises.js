const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const rutaPaises = async (req, res, next) => {
    let {
        name,
        activity,
        continent,
        type,
        order,
        page
    } = req.query

    let dbCountries = [];
    let allCountries=[]
    page = page ? page : 1
    const CountryXpage = 10;


    //Encontrar por Nombre
    if(name && name !== ""){
        dbCountries = await Country.findAll({
            where: {
                name: {
                        [Op.iLike]: `%${name}%`
                      },
                include: {
                    model: Activity,
                    through: {
                        attributes: []
                    }
                }
            }
        });
        allCountries = dbCountries;
    }else{
        dbCountries = await Country.findAll({
            include: {
                model: Activity,
                through: {
                    attributes: []
                }
            }
        });
        allCountries = dbCountries;
    }

    //Encontrar por actividad Turística
    // if(activity !== "allActivities"){
    //     dbCountries = await Country.findAll({
    //         include: {
    //             model: Activity,
    //             where: {
    //                 name: {
    //                         [Op.iLike]: `%${activity}%`
    //                       },
    //             through: {
    //                 attributes: []
    //                     }
    //             }
    //         }
    //     })
    //     allCountries = dbCountries;
    // }else{
    //     dbCountries = await Country.findAll({
    //         include: {
    //             model: Activity,
    //             through: {
    //                 attributes: []
    //             }
    //         }
    //     });
    //     allCountries = dbCountries;
    // }

    //Ordenamiento por tipo AZ o población
    if(type=='AZ'){
        //Ordenamiento A-Z
        if(order === "asc" || !order || order === ""){
            allCountries = allCountries.sort((a,b) =>{
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
        }else if(order === "des"){
            allCountries = allCountries.sort((a,b) =>{
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
    }else if(type=='population'){
        //Ordenamiento por población
        if(order === "asc" || !order || order === ""){
            allCountries = allCountries.sort((a,b) =>{
                return a.population - b.population;
            })
        }else if(order === "des"){
            allCountries = allCountries.sort((a,b) =>{
                return b.population - a.population
            })
        }
    }

     let result = [];
    //Paginado
    if(continent === 'Todos'){
        result = allCountries.slice((CountryXpage * (page -  1)) , (CountryXpage * (page -  1)) + CountryXpage )
    }else{
        // Para hacer el paginado den el front
        result = allCountries;
    }


    res.send({
        result: result,
        count: allCountries.length
    })
}


const rutaIdPais = async (req, res, next) => {
    const idPais = req.params.id;
    try{
        const infoPais = await Country.findOne({
            where: {
                id: idPais
            },
            include: {
                model: Activity,
                // attributes: { exclude: ["id"] },
                through: {
                    attributes: []
                }
            }
        })
        res.json(infoPais);
    }catch(error){
        next(error)
    }
}

module.exports = {
    rutaPaises,
    rutaIdPais
}