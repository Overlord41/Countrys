import './css/CardDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { action_drop_detail_country } from '../redux/actions/actions';

export const CardDetail = (props) => {
    const dispatch = useDispatch();
    const CardDetailInfo = useSelector(store => store.detailCountry);
    const aream2 = (props.data.area)/1000;
    return (
        <div className='CardDetail'>
            <div className='intoCardDetail'>
                <img src={CardDetailInfo.flag} alt='Bandera' />
                <div className='infoDetail'>
                    <p>COD: {CardDetailInfo.id}</p>
                    <p>País: {CardDetailInfo.name}</p>
                    <p>Capital: {CardDetailInfo.capital}</p>
                    <p>Subregión: {CardDetailInfo.subregion}</p>
                    <p>Area: {aream2} km2</p>
                    <p>Población: {CardDetailInfo.population}</p>
                    <br/>
                    <p>Actividades turísticas: </p>
                    <br/>
                        {
                            (CardDetailInfo.activities.length!==0)?
                            <ol>
                                {
                                CardDetailInfo.activities.map((el,index) => {
                                    return <li key={index}>- {el.name}</li>
                                })
                            }
                            </ol>
                            :<p>No hay actividades</p>
                        }
                    <br/>
                    <div className='buttonReturn' onClick={()=> { dispatch(action_drop_detail_country())}}>Regresar</div>
                </div>
            </div>
        </div>
    )
}
