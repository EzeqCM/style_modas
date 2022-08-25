import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material"
export default function Home() {
  return (
    <div className='painel'>
        <Link to="/masculino" className='Link'>
        MASCULINO
        </Link>
      <Link to="/feminino" className='Link'>
        FEMININO
        </Link>
      <Link to="/Infantil" className='Link'>
        INFANTIL
        </Link>
      <Link to="/Calcados" className='Link'>
        CALÇADOS
        </Link> 
    </div>
  )
}
