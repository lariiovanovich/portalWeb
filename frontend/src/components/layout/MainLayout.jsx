import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx' 
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="app-layout">
      <Header />

      <main className="app-content">
        <Outlet /> 
      </main>
    </div>
  )
}

export default MainLayout