import React from 'react'
import { AddActivity } from './AddActivity'
import { CombineActCountry } from './CombineActCountry'
import './css/Activity.css'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { action_get_activities } from '../../redux/actions/actions';

export const Activity = () => {
    const dispatch = useDispatch();
    return (
        <div className='ActivityGeneral'>
            <div className='ContainerForm'>
                <AddActivity />
                <CombineActCountry />
                <Link className='btnRegresar' to='../countries' onClick={()=>{
                        dispatch(action_get_activities());
                }}>Regresar</Link>
            </div>
        </div>
    )
}
