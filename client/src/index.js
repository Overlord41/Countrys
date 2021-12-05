import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Home from './Home.jsx';
import { Countries } from './components/Countries';
import store from './redux/store/store.js'
import { Activity } from './components/Activity/Activity.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='countries' element={<Countries/>}/>
        <Route path='activity' element={<Activity/>} />
      </Routes>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
