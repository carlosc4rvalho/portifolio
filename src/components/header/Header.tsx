import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Carlos Carvalho</a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">                              
                               Inicio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">                           
                               Sobre mim
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                Ferramentas e tecnologias
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                Projetos
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;