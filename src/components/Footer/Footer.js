import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="contact-title">
      </div>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/uJ4bcqrtGto"
          title="Armado de la máquina recicladora de filamento | Instituto Santa Ana"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="contact-title">
      </div>
      <div className="contact-info">
        <div className="footer-content">
          <div className="map-section">
            <iframe
              title="Map"
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1644.87042491206!2d-58.6442606020544!3d-34.45872574825269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92ad8f398517174e!2sInstituto+Santa+Ana!5e0!3m2!1ses!2sar!4v1474979722594`}
            />
          </div>
        </div>
      </div>
      <div className="text-white text-center p-1 derechosreservados" style={{ backgroundColor: '#12442F !important' }} style={{color: '#fff !important' }}>
          Copyright © 2024 Instituto Santa Ana, todos los derechos reservados.
        </div>
    </footer>
  )
}

export default Footer