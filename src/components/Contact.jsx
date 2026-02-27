import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openWhatsApp = () => {
    window.open('https://wa.me/918143724405', '_blank')
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-content-center">
            <motion.div
              className="contact-info-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Let's Work Together</h3>
              <p>I'm available for freelance projects. Let's create something amazing together!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:sailendrakondapalli@gmail.com">sailendrakondapalli@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">📱</span>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+918143724405">+91 8143724405</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">⏰</span>
                  <div>
                    <h4>Availability</h4>
                    <p>24/7 available</p>
                  </div>
                </div>
              </div>

              <motion.button
                className="whatsapp-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openWhatsApp}
              >
                <span>💬</span> Connect on WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <footer className="footer">
        <p>© 2024 Sailendra Kondapalli. All rights reserved.</p>
      </footer>
    </section>
  )
}
