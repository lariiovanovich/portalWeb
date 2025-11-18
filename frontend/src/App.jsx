// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'

// Layouts e Páginas
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import MainLayout from './components/layout/MainLayout.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx' // <-- 1. Importe

function App() {
  return (
    <Routes>
      {/* Rota pública de Login */}
      <Route path="/login" element={<Login />} />

      {/* Rotas Privadas (Protegidas) */}
      <Route element={<ProtectedRoute />}> {/* <-- 2. Rota "pai" protegida */}
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Outras rotas privadas aqui... */}
          <Route index element={<Navigate to="/dashboard" />} />
        </Route>
      </Route>
      
      {/* Redirecionamento genérico */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App