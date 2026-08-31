import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './footer';
import Header from './header';
import C2f from './C2f';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/header" element={<Header/>}/>
        <Route path="/" element={<App/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
      </BrowserRouter>
      {/* <C2f/> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
