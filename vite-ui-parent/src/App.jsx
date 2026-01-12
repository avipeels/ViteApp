import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

import ToggleWrapper from './components/ToggleWrapper/ToggleWrapper';

function Home() {

  return (
    <div className="page">
      <h1>Welcome to Vite + React + Fastify</h1>
    </div>
  )
}


function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/toggle" className="nav-link">Toggle</Link>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toggle" element={<ToggleWrapper />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
