import Header from './Header';
import { Center, Box } from '@chakra-ui/react';
import SideBar from './SideBar';
import logo from '../assets/logo1.png';

let NavBar = () => {
    return (
        <Header children={            
            <Box p="4">
                <Center>
                    <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
                </Center>
            </Box>}>
        </Header>
    );
}

export default NavBar;
