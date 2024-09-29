// src/components/SideBar.jsx
import React from 'react';

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      <button onClick={toggleSidebar} style={styles.toggleButton}>
        ☰
      </button>
      <div style={{ ...styles.sidebar, left: isOpen ? '0' : '-180px' }}>
        <h2 style={styles.sidebarTitle}>Menu</h2>
        <ul style={styles.sidebarList}>
          <li><a href="#home" style={styles.sidebarLink}>Home</a></li>
          <li><a href="#services" style={styles.sidebarLink}>Serviços</a></li>
          <li><a href="#about" style={styles.sidebarLink}>Sobre</a></li>
          <li><a href="#contact" style={styles.sidebarLink}>Contato</a></li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  toggleButton: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    backgroundColor: '#06826C',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1000,
  },
  sidebar: {
    height: '100%',
    width: '250px',
    position: 'fixed',
    top: '0',
    left: '-250px', // Fora da tela inicialmente
    backgroundColor: '#06826C',
    color: 'black',
    overflowX: 'hidden',
    transition: '0.3s',
    paddingTop: '60px',
    zIndex: 999,
  },
  sidebarTitle: {
    paddingLeft: '20px',
    margin: '0 0 20px 0',
  },
  sidebarList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  sidebarLink: {
    display: 'block',
    color: '#fff',
    padding: '10px 20px',
    textDecoration: 'none',
    transition: '0.3s',
  },
};

export default SideBar;
