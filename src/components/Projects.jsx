import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Projects.css'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      title: 'Travel Related Website',
      description: 'Tourism and travel booking platform with stunning visuals.',
      tech: ['React', 'CSS3', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
      liveUrl: 'https://keralamemorytravels.vercel.app/',
    },
    {
      id: 2,
      title: 'Beauty Related Website',
      description: 'Spa and beauty parlour service showcase platform.',
      tech: ['React', 'JavaScript', 'Modern UI'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
      liveUrl: 'https://tanujabeautyparlor.vercel.app/',
    },
    {
      id: 3,
      title: 'Design & Architecture Website',
      description: 'Designer and architect portfolio with creative layouts.',
      tech: ['React', 'CSS3', 'Portfolio Design'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
      liveUrl: 'https://designsegnoo.vercel.app/',
    },
    {
      id: 4,
      title: 'Events & Catering Website',
      description: 'Marriage, birthday events and catering services platform.',
      tech: ['React', 'Modern Design', 'Event Management'],
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      liveUrl: 'https://syvenevents.vercel.app/',
    },
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-view"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.button
                      className="btn-details"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
