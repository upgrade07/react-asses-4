import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Image from './components/Image';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from './components/Students';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <App />
    
    <Routes>
      <Route path='/' element ={<Image></Image>}></Route>
      <Route path='/home' element ={<Image></Image>}></Route>
      <Route path='/students' element ={<Students/>}></Route>
      <Route path='/about' element ={<Footer/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
  </>
);
<script src="https://kit.fontawesome.com/d3b61aca54.js" crossorigin="anonymous"></script>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
