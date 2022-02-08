import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Ayudar from './components/ayudar/ayudar';
import Banner from './components/banner/banner';
import Contacto from './components/contacto/contacto';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Inquilinos from './components/inquilinos/inquilinos';
import NavBar from './components/navBar/navbar';
import Reciclaje from './components/reciclar/reciclaje';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Banner />
        <NavBar />
        <Routes>
         
          <Route path="/" element={<Home/>}/>
            
          
          <Route path="/reciclaje" element={<Reciclaje />}/>
            
          
          <Route path="/propietarios" element={<Inquilinos />}/>
          <Route path="/ayudar" element={<Ayudar />}/>
            
          <Route path="/contacto" element={<Contacto />}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
