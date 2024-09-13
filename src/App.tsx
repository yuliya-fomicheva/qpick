import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { BasketContextProvider } from './context';


function App() {

  
  return (
    <div className="App container">
      <BasketContextProvider>
        <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
      </BasketContextProvider>

    </div>
  );
}

export default App;
