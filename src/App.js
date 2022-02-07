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
       <Banner/>
       <NavBar/>
       <Routes>
         <Route path="/">
           <Home/>
         </Route>
         <Route path="/reciclaje">
           <Reciclaje/>
         </Route>
         <Route path="/propietarios">
           <Inquilinos/>
         </Route>
         <Route path="/ayudar">
            <Ayudar/>
         </Route>
         <Route>
           <Contacto/>
         </Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
