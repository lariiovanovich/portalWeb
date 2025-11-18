// frontend/src/pages/Login.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx' 
import './Login.css'
import logo from '../assets/FknGreenLogo300w.png'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const { login } = useAuth() 
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') 

    const sucesso = await login(email, password)

    if (sucesso) {
      navigate('/dashboard') 
    } else {
      setError('Credenciais inválidas. Tente "admin" e "admin".') 
    }
  }

  return (
    <div className="login-page">
      
      <header className="login-header">
        <img src={logo} alt="Logo FKN" className="header-logo-img" />
      </header>

      <main className="login-body">
        {/* Adicionado um wrapper para o título e o formulário */}
        <div className="login-card"> {/* Nova div para agrupar título e form */}
          <h2 className="login-title">Login do Portal</h2> {/* H2 com nova classe */}

          <form className="login-form" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}

            <div className="input-group">
              <label htmlFor="email">Usuário</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login