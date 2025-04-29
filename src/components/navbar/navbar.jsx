import React from 'react'
import Logomaquina from "./logomaquina.png"

export default function navbar() 
{
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={Logomaquina} alt="Logo" width="80"class="d-inline-block align-text-top me-2 ms-3"/>
      Máquina recicladora de filamento
    </a>
  </div>
</nav>
    </div>
  )
}
