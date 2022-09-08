import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Paginas/Header';
import Masculino from './Paginas/Masculino';
import Feminino from './Paginas/Feminino';
import Infantil from './Paginas/Infantil';
import Calcados from './Paginas/Calcados';

export default function Rotas() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path= "/masculino" element ={<Masculino />} />
            <Route path= "/feminino" element ={<Feminino />} />
            <Route path= "/infantil" element ={<Infantil />} />
            <Route path= "/Calcados" element ={<Calcados />} />
        </Routes>
    </BrowserRouter>
  )
}




































