// src/components/MainLayout.jsx
import React, { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={styles.layoutContainer}>
      {/* Passa o estado e a função para a Sidebar */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        style={{
          ...styles.contentContainer,
          marginLeft: isSidebarOpen ? '250px' : '70px', // Ajusta a margem do conteúdo principal
        }}
      >
        <NavBar toggleSidebar={toggleSidebar} />
        <main style={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
};

const styles = {
  layoutContainer: {
    display: 'flex',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    transition: 'margin-left 0.3s',
  },
  mainContent: {
    padding: '20px',
    transition: 'margin-left 0.3s',
  },
};

export default MainLayout;
