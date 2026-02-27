import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import CustomCursor from './components/CustomCursor'
import ParticlesBackground from './components/ParticlesBackground'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <ParticlesBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
