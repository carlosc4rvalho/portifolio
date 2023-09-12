import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact__container" id="contact">
      <div className="contact__title">Envie-me uma mensagem!</div>
      <p className="contact__subtitle">Tem uma pergunta ou proposta, ou apenas quer dizer um oi? Vá em frente.</p>
      <form action="">
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <input type="text" />

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact