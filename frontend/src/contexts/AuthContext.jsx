
import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext(null) 

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)


  const login = async (email, password) => {

    if (email === 'admin' && password === 'admin') {
      
      setUser({ 
        id: '1', 
        name: 'Administrador', 
        email: 'admin@fkn.com.br', 
        role: 'ADMIN' 
      })
      return true 
      
    } else {

      return false 
    }
  }

  const logout = () => {
    setUser(null)
  }

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider.')
  }
  return context
}