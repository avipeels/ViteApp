import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching users:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="page">
      <h1>Welcome to Vite + React + Fastify</h1>
      <div className="card">
        <h2>Users from API</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <h1>About</h1>
      <p>This is a sample application using Vite, React, and Fastify.</p>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching users:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="page">
      <h1>Users</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ToggleWrapper() {
  const [isToggled, setIsToggled] = useState(false)
  const [count, setCount] = useState(0)

  const handleToggle = () => {
    setIsToggled(!isToggled)
    setCount(count + 1)
  }

  return (
    <div className="page">
      <h1>Toggle Component</h1>
      <div className="card">
        <h2>Interactive Toggle</h2>
        <div className="toggle-container">
          <button 
            onClick={handleToggle}
            className={`toggle-button ${isToggled ? 'active' : ''}`}
          >
            {isToggled ? 'ON' : 'OFF'}
          </button>
          <p className="toggle-status">
            Status: <span className={isToggled ? 'status-on' : 'status-off'}>
              {isToggled ? 'Enabled' : 'Disabled'}
            </span>
          </p>
          <p className="toggle-count">
            Toggle count: {count}
          </p>
        </div>
      </div>
    </div>
  )
}

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/users" className="nav-link">Users</Link>
      <Link to="/toggle" className="nav-link">Toggle</Link>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <div className="logo-container">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src="/assets/react.svg" className="logo react" alt="React logo" />
            </a>
          </div>
          <Navigation />
        </header>
        
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/toggle" element={<ToggleWrapper />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
