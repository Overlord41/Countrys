import React from 'react'
import './css/CombineActCountry.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const CombineActCountry = () => {
    const [listActivities, setListActivities] = useState();
    const [listPaises, setListPaises] = useState();
    const [cantPais, setCantPais] = useState([""]);
    const [successCreate, setsuccessCreate] = useState("");


    const cargarActividades = async() => {
            const dataActivities = await axios.get('http://localhost:3001/activity');
            setListActivities(dataActivities.data);
    }

    const cargarPaises = async() => {
        const dataPaises = (await (await axios.get('http://localhost:3001/countries?type=AZ&order=asc&continent=Ninguno&activity=allActivities')).data.result);
        setListPaises(dataPaises);
    }


    const crearPais = (e) => {
        e.preventDefault();
        setCantPais([...cantPais, ""]);
    }

    const sendCombineCountry = async(e) => {
        e.preventDefault();
        const ActividadSelec = document.getElementById('nActivities').value;
        const arrayDatosPais = [];
        for(let i=1; i<=cantPais.length; i++){
            arrayDatosPais.push({ idCountry: document.getElementById(`Npais-${i}`).value })
        }
        try{
            await axios({
                method: 'post',
                url: 'http://localhost:3001/activity/combine',
                data: {
                    idActivity: ActividadSelec,
                    countries: arrayDatosPais
                }
            }).then(resp =>{
                setsuccessCreate(resp.data);
            })
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        cargarActividades();
        cargarPaises();
    }, [])

    useEffect(() => {
        setTimeout(() => {setsuccessCreate("")},3000)
        setCantPais([""]);
        document.getElementById('Npais-1').value = "AFG"
    }, [successCreate])

    return (
        <div className='combineActCountry'>
            <h3>Formulario asignación de actividades</h3>
            <form onSubmit={sendCombineCountry}>
                <label>Seleccione Actividad: </label>
                <select id="nActivities" onClick={cargarActividades}>
                    {
                    (listActivities!==undefined)&&
                    listActivities.map(e=>{
                        return (
                            <option key ={e.id} value={e.id}>{e.name}</option>
                        )
                    })}
                </select>
                <br/>
                <label>Seleccione País: </label>
                <br/>
                {
                    cantPais.map((e, index) => {
                        return <div key={index}><select id={`Npais-${index + 1}`}>
                        {
                            (listPaises!==undefined)&&
                                listPaises.map((e,index)=>{
                                    return (
                                        <option key={index} value={e.id}>{e.name}</option>
                                    )
                            })
                        }
                        </select></div>
                    })
                }
                <button onClick={crearPais}>+</button>
                <br/>
                <input type="submit" value="Enviar"/>
                {successCreate!==""&&<p>{successCreate}</p>}
            </form>
        </div>
    )
}
