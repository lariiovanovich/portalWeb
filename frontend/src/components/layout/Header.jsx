// src/components/layout/Header.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/FknGreenLogo300w.png' // Importando o mesmo logo

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        {/* Lado Esquerdo: Logo */}
        <Link to="/dashboard" className="logo-link">
          <img src={logo} alt="Logo FKN" className="header-logo" />
        </Link>

        {/* Lado Direito: Navegação */}
        <nav className="header-nav">
          <Link to="/dashboard" className="nav-button">
            #####
          </Link>
          <Link to="#" className="nav-button">
            #####
          </Link>
          <Link to="#" className="nav-button">
            #####
          </Link>
          <button className="nav-button-logout">
            Sair
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header