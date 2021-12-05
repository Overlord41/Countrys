import React from 'react';
import './css/AddActivity.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const AddActivity = () => {
    const [actividad, setActividad] = useState({
        name: "",
        dificult: 1,
        duration: 1,
        temporada: 'Verano'
    })

    const [successdata, setSuccessdata] = useState("");


    const changeData = (event) => {
        setActividad({
            ...actividad,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        restoreActivity();
    }, [])

    useEffect(() => {
        setTimeout(() => {setSuccessdata("")},3000)
    }, [successdata])

    const restoreActivity = () =>{
        setActividad({
            name: "",
            dificult: 1,
            duration: 1,
            temporada: 'Verano'
        })
        document.getElementById('idNombre').value="";
        document.getElementById('dificult').value=1;
        document.getElementById('idDuration').value=1;
        document.getElementById('idTempo').value='Verano';
    }

    const cargarActividad = async(e) =>{
        e.preventDefault();
        try{
            axios({
                method: 'post',
                url: 'http://localhost:3001/activity/add',
                data: {
                    name: actividad.name,
                    dificult: actividad.dificult,
                    duration: actividad.duration,
                    temporada: actividad.temporada
                }
            }).then(resp =>{
                setSuccessdata(resp.data);
            })
            restoreActivity();
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className='addActivity'>
        <h2>Crear actividad turística</h2>
            <form onSubmit={ cargarActividad }>
                <label>Nombre: </label>
                <input type='text' id='idNombre' name='name' onChange={changeData}/>
                <br/>
                <label>Dificultad: </label>
                <input type="range" id='dificult' min="1" max="5" name='dificult' onChange={changeData} />
                <label> {actividad.dificult}</label>
                <br/>
                <label>Duración: </label>
                <input type='number' min={1} id='idDuration' name='duration' onChange={changeData}/>
                <label> mins</label>
                <br/>
                <label>Temporada: </label>
                <select id='idTempo' name='temporada' onChange={changeData}>
                    <option value='Verano'>Verano</option>
                    <option value='Otoño'>Otoño</option>
                    <option value='Invierno'>Invierno</option>
                    <option value='Primavera'>Primavera</option>
                </select>
                <br/>
                <input type='submit' value='Enviar' disabled={actividad.name===""&& 'disabled'} />
            </form>
            {successdata!==""&&<p>{successdata}</p>}
        </div>
    )
}
