import React from 'react';
import { TabMenu } from 'primereact/tabmenu';

import { Menubar } from 'primereact/menubar';
        
import { useNavigate } from 'react-router-dom';
import './NavBar.css'
function NavBar() {
    const navigate = useNavigate()


    const items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: () => {
           navigate("/");
        }
      },
      {
        label: 'Disciplinas',
        icon: 'pi pi-fw pi-book',
        command: () => {
         navigate("/disciplina");
        }
      },
      {
        label: 'Professores',
        icon: 'pi pi-fw pi-user',
        command: () => {
         navigate("/professor");
        }
      },
      {
        label: 'Cursos',
        icon: 'pi pi-briefcase',
        command: () => {
         navigate("/curso");
        }
      },

      {
        label: 'Disponibilidades',
        icon: 'pi pi-clock',
        command: () => {
         navigate("/disponibilidade");
        }
      }


    ];
  
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <TabMenu
              model={items}
               className='custom-tabmenu'
               style={{
                //backgroundColor: '#22c55e',  // Cor green-500
                color: '#f8fafc'  // Ajuste a cor do texto para contraste
                }}
               
            />
        </div>
    )
  }
  
  export default NavBar;