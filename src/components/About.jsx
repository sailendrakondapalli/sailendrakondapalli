import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '4+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: 'Fast', label: 'Delivery' },
    { number: 'Modern', label: 'UI Specialist' },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-wrapper">
                <img src="/sailendra.jpg" alt="Sailendra Kondapalli" />
              </div>
            </motion.div>

            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="about-description">
                I am a freelance web developer specializing in modern, fast, and conversion-focused websites. 
                I help businesses grow online with premium UI, smooth performance, and strong branding.
              </p>
              
              <div className="internship-badge">
                <span className="badge-icon">💼</span>
                <div className="badge-content">
                  <h4>Software Development Intern</h4>
                  <p>Krify Software Technologies</p>
                  <span className="badge-duration">December 2023 - May 2024 (6 months)</span>
                </div>
              </div>

              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🌐</span>
                  <span>Travel, Beauty, Design & Event websites delivered</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✨</span>
                  <span>100% happy clients</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🚀</span>
                  <span>Static & dynamic website expert</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">⚛️</span>
                  <span>React & Node.js developer</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about-stats-section"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
