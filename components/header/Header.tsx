import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
                <div>
                    <a className={styles.logo} href="#home">&copy; Code by Carlos</a>
                </div>

                <ul className={styles.navMenu}>
                    <li>
                        <a className={styles.item} href="#home">Inicio</a>
                    </li>
                    <li>
                        <a className={styles.item} href="#about">Sobre mim</a>
                    </li>
                    <li>
                        <a className={styles.item} href="#projects">Projetos</a>
                    </li>
                    <li>
                        <a className={styles.item} href="#contact">Contato</a>
                    </li>
                </ul>

                <div className={styles.menuHamburger}>
                    <MenuIcon />
                </div>
            </nav>
        </header>
    );
}

export default Header;
