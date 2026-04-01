import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const projectsData = {
    1: {
      title: 'Travel Related Website',
      description: 'Tourism and travel booking platform with stunning visuals.',
      fullDescription: 'A comprehensive travel website showcasing tourism packages, destinations, and booking services. Features beautiful imagery, smooth navigation, and responsive design to attract travelers looking for memorable experiences.',
      tech: ['React', 'CSS3', 'Responsive Design', 'Modern UI'],
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=800&fit=crop',
      liveUrl: 'https://keralamemorytravels.vercel.app/',
      challenges: [
        'Creating an immersive visual experience with optimized images',
        'Implementing smooth navigation across multiple tour packages',
        'Designing mobile-responsive layouts for travelers on-the-go'
      ],
      testimonial: 'The website perfectly captures the essence of travel and has increased our bookings significantly!',
      gallery: [
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'
      ]
    },
    2: {
      title: 'Beauty Related Website',
      description: 'Spa and beauty parlour service showcase platform.',
      fullDescription: 'An elegant website for a premium spa and beauty parlour, featuring service catalogs, pricing, appointment booking, and gallery showcasing transformations. Designed to attract clients seeking professional beauty and wellness services.',
      tech: ['React', 'JavaScript', 'Modern UI', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop',
      liveUrl: 'https://tanujabeautyparlor.vercel.app/',
      challenges: [
        'Creating a luxurious and calming visual aesthetic',
        'Showcasing services with detailed descriptions and pricing',
        'Building an intuitive appointment booking interface'
      ],
      testimonial: 'Our online presence has never looked better. Clients love the website!',
      gallery: [
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop'
      ]
    },
    3: {
      title: 'Design & Architecture Website',
      description: 'Designer and architect portfolio with creative layouts.',
      fullDescription: 'A stunning portfolio website for designers and architects, showcasing creative projects, design philosophy, and professional services. Features a modern, minimalist design that lets the work speak for itself.',
      tech: ['React', 'CSS3', 'Portfolio Design', 'Grid Layouts'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop',
      liveUrl: 'https://designsegnoo.vercel.app/',
      challenges: [
        'Creating a portfolio layout that highlights creative work',
        'Implementing smooth image galleries and project showcases',
        'Balancing aesthetics with fast loading performance'
      ],
      testimonial: 'This portfolio has helped me land multiple high-value clients. Exceptional work!',
      gallery: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop'
      ]
    },
    8: {
      title: 'Business / Brand Website',
      description: 'Professional business website with modern branding and design.',
      fullDescription: 'A sleek and professional business website built to establish a strong online brand presence. Features modern design, clear service sections, and a compelling call-to-action to convert visitors into clients.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
      liveUrl: 'https://aslen.in/',
      challenges: [
        'Creating a strong brand identity through design',
        'Building a fast-loading, SEO-friendly structure',
        'Designing clear service sections with strong CTAs'
      ],
      testimonial: 'Sailendra delivered exactly what I imagined. The design is clean, modern and professional!',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop'
      ]
    }
      description: 'Marriage, birthday events and catering services platform.',
      fullDescription: 'A comprehensive website for event planning and catering services, featuring event packages for marriages, birthdays, and other celebrations. Includes venue options, catering menus, and booking system to help clients plan their special occasions with ease.',
      tech: ['React', 'Modern Design', 'Event Management', 'Responsive'],
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop',
      liveUrl: 'https://syvenevents.vercel.app/',
      challenges: [
        'Showcasing diverse event packages and catering options',
        'Creating an emotional and elegant design for celebrations',
        'Implementing inquiry and booking management system'
      ],
      testimonial: 'The website is beautiful and has helped us attract more event clients!',
      gallery: [
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop'
      ]
    }
  }

  const project = projectsData[id]

  if (!project) {
    return (
      <div className="project-detail">
        <div className="not-found">
          <h2>Project Not Found</h2>
          <button onClick={() => navigate('/')}>Go Back Home</button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Home
      </button>

      <motion.div
        className="project-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={project.image} alt={project.title} />
        <div className="project-hero-content">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="live-site-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 View Live Site
          </motion.a>
        </div>
      </motion.div>

      <div className="project-detail-container">
        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Project Overview</h2>
          <p>{project.fullDescription}</p>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2>Technologies Used</h2>
          <div className="tech-list">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Challenges Solved</h2>
          <ul className="challenges-list">
            {project.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2>Gallery</h2>
          <div className="project-gallery">
            {project.gallery.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="project-section testimonial-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>Client Testimonial</h2>
          <blockquote>"{project.testimonial}"</blockquote>
        </motion.section>
      </div>
    </motion.div>
  )
}
