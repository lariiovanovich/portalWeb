// src/components/layout/Header.jsx
import React from 'react'
import { Link, useNavigate } from 'react-router-dom' // Importamos Link e useNavigate
import { useAuth } from '../../contexts/AuthContext.jsx'
import './Header.css'
import logo from '../../assets/FknGreenLogo300w.png' // Apenas dois ../

function Header() {
  const { logout, user } = useAuth() // Pega a função de logout e os dados do usuário
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login') // Redireciona para o login após deslogar
  }

  return (
    <header className="app-header">
      <div className="header-content">
        {/* Lado Esquerdo: Logo */}
        <Link to="/dashboard" className="logo-link">
          {/* ATENÇÃO: Verifique o caminho do logo. Se houver erro, pode ser '../' ou '../../' */}
          <img src={logo} alt="Logo FKN" className="header-logo" />
        </Link>

        {/* Lado Direito: Navegação */}
        <nav className="header-nav">
          <span className="user-name">Olá, {user ? user.name.split(' ')[0] : 'Usuário'}</span>
          
          <Link to="/dashboard" className="nav-button">
            Contratos
          </Link>
          
          
          <button className="nav-button-logout" onClick={handleLogout}>
            Sair
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header