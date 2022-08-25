import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Paginas/Home';
import Masculino from './Paginas/Masculino';
import Feminino from './Paginas/Feminino';
import Infantil from './Paginas/Infantil';
import Calcados from './Paginas/Calcados';

export default function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/masculino" element ={<Masculino />} />
            <Route path= "/feminino" element ={<Feminino />} />
            <Route path= "/infantil" element ={<Infantil />} />
            <Route path= "/Calcados" element ={<Calcados />} />
        </Routes>
    </BrowserRouter>
  )
}




































