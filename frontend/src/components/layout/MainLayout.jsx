// src/components/layout/MainLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx' // Importa nosso Header
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="app-layout">
      {/* 1. O Header fica fixo no topo */}
      <Header />

      {/* 2. O conteúdo da página (ex: Dashboard) será renderizado aqui */}
      <main className="app-content">
        <Outlet /> 
      </main>
    </div>
  )
}

export default MainLayout