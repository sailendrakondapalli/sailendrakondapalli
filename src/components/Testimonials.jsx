import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Testimonials.css'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Saravana Travels',
      role: 'Travel Agency Owner',
      text: 'Sailendra built us a stunning travel website that perfectly showcases our tour packages. Very professional and delivered on time!',
      rating: 5,
    },
    {
      name: 'Write Your Own Script',
      role: 'Women Empowerment Coach',
      text: 'My website looks absolutely amazing! Sailendra understood my vision and created something that truly represents my brand and mission.',
      rating: 5,
    },
    {
      name: 'JCM Second Prime',
      role: 'Fitness Trainer & Motivator',
      text: 'Excellent work! The website captures the energy and motivation I bring to my 40+ clients. Fast delivery and great communication throughout.',
      rating: 5,
    },
    {
      name: 'Aslen',
      role: 'Business Owner',
      text: 'Sailendra delivered exactly what I imagined. The design is clean, modern and professional. Highly recommend his services!',
      rating: 5,
    },
    {
      name: 'Happy Client',
      role: 'Entrepreneur',
      text: 'Very professional and fast delivery. The website exceeded my expectations. Will definitely work with Sailendra again!',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Client Testimonials</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
