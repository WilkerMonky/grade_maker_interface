import React, { useState} from 'react';
import FormCurso from '../components/Forms/FormCurso';
import TableCurso from '../components/tables/TableCurso';
import '../components/global.css';
import { Heading } from '@chakra-ui/react';

const CursosPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleCursoAdded = () => {
        setRefreshKey(oldKey => oldKey + 1);
        setIsOpen(false);
    };


    return (
        <div className="page-container">
            <div className="content-wrapper">
                <Heading as="h1" className="page-title">Cursos</Heading>
                <div className="button-container">
                    <button className="add-button" onClick={() => setIsOpen(true)}>
                        Adicionar Curso
                    </button>
                </div>
                <FormCurso 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    onCursoAdded={handleCursoAdded}
                />
                <TableCurso key={refreshKey} />
            </div>
        </div>
    );
};

export default CursosPage;