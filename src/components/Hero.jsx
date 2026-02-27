import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ['React Developer', 'Frontend Specialist', 'Full Stack Creator']

  useEffect(() => {
    let currentText = ''
    let currentIndex = 0
    const currentRole = roles[roleIndex]

    const typeInterval = setInterval(() => {
      if (currentIndex < currentRole.length) {
        currentText += currentRole[currentIndex]
        setText(currentText)
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            currentText = currentText.slice(0, -1)
            setText(currentText)
            if (currentText === '') {
              clearInterval(deleteInterval)
              setRoleIndex((prev) => (prev + 1) % roles.length)
            }
          }, 50)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [roleIndex])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-name">Sailendra Kondapalli</h1>
          <p className="hero-title">Freelance Web Developer</p>
          <div className="hero-typing">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-tagline">"I Build Fast, Modern & High-Converting Websites."</p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
          </motion.button>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </motion.div>
      </div>
    </section>
  )
}
