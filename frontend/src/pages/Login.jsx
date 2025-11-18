// frontend/src/pages/Login.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx' // <-- 1. Importe o useAuth
import './Login.css'
import logo from '../assets/FknGreenLogo300w.png'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('') // <-- 2. Estado para mensagem de erro
  
  const { login } = useAuth() // <-- 3. Pegue a função login do contexto
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') // Limpa erros anteriores

    // Chama a função de login do Contexto
    const sucesso = await login(email, password)

    if (sucesso) {
      navigate('/dashboard') // Se deu certo, entra
    } else {
      setError('Credenciais inválidas. Tente "admin" e "admin".') // Se deu errado, avisa
    }
  }

  return (
    <div className="login-container-fullscreen">
      <div className="login-branding">
        <img src={logo} alt="Logo FKN" className="login-logo" />
      </div>

      <div className="login-form-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login do Portal</h2>

          {/* 4. Exibe a mensagem de erro se existir */}
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
    </div>
  )
}

export default Login