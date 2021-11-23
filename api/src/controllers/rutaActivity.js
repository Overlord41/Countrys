const { Activity } = require('../db');

const postActivity = async(req, res, next) => {
    const actividad = req.body;
    try{
        await Activity.findOrCreate({
            where: {name: actividad.name},
            defaults: {
                dificult: actividad.dificult,
                duration: actividad.duration,
                temporada: actividad.temporada
            }
        })
        res.send('Actividad agregada con éxito');
    }catch(error){
        next(error);
    }
}

const postAddActivityCountry = async(req, res, next) => {
    const actividadCountry = req.body;
    try{
        const activityNew = await Activity.findOne({ where: { id: actividadCountry.idActivity } });
        actividadCountry.countries.map((elem) => {
            activityNew.addCountry(elem.idCountry);
        })
        res.send('Actividad asignada a países OK');
    }catch(error){
        next(error);
    }
}


module.exports = {
    postActivity,
    postAddActivityCountry
}