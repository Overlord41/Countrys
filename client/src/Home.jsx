import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { useDispatch} from 'react-redux';
import { action_get_activities, get_countries_default } from './redux/actions/actions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(get_countries_default());
    dispatch(action_get_activities());
  },[dispatch])

  return (
    <div className='Home1'>
      <p>🆃🆁🅰🆅🅴🅻  🅽🅾🆆</p>
      <br/>
      <Link  className='btnIngresar' to='countries'>Ingresar</Link>
    </div>
  )
}

export default Home;