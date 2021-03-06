const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const rutaPaises = async (req, res, next) => {
    let {
        activity,
        continent,
        type,
        order,
        page,
        name
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
                      }
            },
            include: {
                model: Activity,
                through: {
                    attributes: []
                }
            }
        });
        dbCountries = dbCountries.sort((a,b) =>{
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        })
        res.send({
            result: dbCountries,
            count: dbCountries.length
        })
    }else{
        // Encontrar por actividad Turística
        if(activity !== "allActivities"){
            dbCountries = await Country.findAll({
                include: {
                    model: Activity,
                    where: { id: activity },
                    through: {
                        attributes: []
                            }
                    }
                })
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
            // Para hacer el paginado desde el front
            result = allCountries;
        }


        res.send({
            result: result,
            count: allCountries.length
        })
    }
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

const rutaPrueba = async(req, res, next) => {
    const { nombre, actividad } = req.query;
    if(nombre && nombre !== ""){
        dbCountries = await Country.findAll({
            where: {
                name: {
                        [Op.iLike]: `%${nombre}%`
                      }
            },
            include: {
                model: Activity,
                through: {
                    attributes: []
                }
            }
        });
        allCountries= dbCountries;
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


//     let { activ } =  req.query
//     // Encontrar por actividad Turística
//     if(activ !== "allActivities"){
//         dbCountries = await Country.findAll({
//             include: {
//                 model: Activity,
//                 where: { id: activ},
//                 through: {
//                     attributes: []
//                         }
//                 }
//         })
//         allCountries = dbCountries;
//     }else{
//         dbCountries = await Country.findAll({
//             include: {
//                 model: Activity,
//                 through: {
//                     attributes: []
//                 }
//             }
//         });
//         allCountries = dbCountries;
//     }
    res.json(allCountries);
    // res.json(allCountries)
}

module.exports = {
    rutaPaises,
    rutaIdPais
}