import React from 'react'
import "./dashboard.css"
import SectionDivider from '../sectionDivider/SectionDivider'

const Dashboar = () => {
  return (
    <div className="dash__container">
      <div className="dash__content">
        <div>
        <div className="dash__title">Navegação</div>
          <SectionDivider />
          <ul className="dash__section">
            <li className="dash__list-section">Inicio</li>
            <li className="dash__list-section">Sobre mim</li>
            <li className="dash__list-section">Ferramentas</li>
            <li className="dash__list-section">Contato</li>
          </ul>
        </div>

        <div>
          <div className="dash__title">Social</div>
          <ul>
            <li className="dash__list-social">Github</li>
            <li className="dash__list-social">Linkedin</li>
            <li className="dash__list-social">Instagram</li>
            <li className="dash__list-social">Gmail</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboar