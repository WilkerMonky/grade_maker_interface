import React from 'react';
import { Center } from '@chakra-ui/react';

const Header = ({ children }) => {
  return (
<header style={{ 
  backgroundColor: '#3B0164', 
  padding: '0px', 
  color: '#fff', 
  textAlign: 'center', 
  display: 'flex', 
  justifyContent: 'right', 
  alignItems: 'right',
  width: '100%' 
}}>
  {children}
</header>

  );
};

export default Header;
