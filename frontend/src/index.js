import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss'
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter >
    <Header />
      <App /> 
    <Footer />
  </BrowserRouter>

);
