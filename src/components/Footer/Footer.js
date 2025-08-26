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
      <div className="text-white text-center p-1 derechosreservados" style={{ backgroundColor: '#12442F', color: '#fff' }}>
          Copyright © 2024 Instituto Santa Ana, todos los derechos reservados.
          </div>
    </footer>
  )
}

export default Footer