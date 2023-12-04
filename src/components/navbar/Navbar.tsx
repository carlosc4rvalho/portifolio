import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.navbarContent}>
        <button onClick={onClose}>Fechar</button>
        {/* Adicione links ou outros elementos da barra de navegação aqui */}
      </div>
    </div>
  );
};

export default Navbar;
