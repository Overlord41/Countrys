import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { useDispatch} from 'react-redux';
import { get_countries_default } from './redux/actions/actions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(get_countries_default());
  },[dispatch])

  return (
    <div className='Home1'>
      <h1>Este es el Home 1</h1>
      <Link  className='btnIngresar' to='contries'>Ingresar</Link>
    </div>
  )
}

export default Home;