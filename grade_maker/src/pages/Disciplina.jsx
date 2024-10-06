import React, { useState } from 'react';
import FormDisc from '../components/Forms/FormDisc';
import TableDisc from '../components/tables/TableDisc';
import '../components/global.css';
import { Heading } from '@chakra-ui/react';

const DisciplinaPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleDisciplinaAdded = () => {
        setRefreshKey(oldKey => oldKey + 1);
        setIsOpen(false);
    };

    return (
        <div className="page-container">
            <div className="content-wrapper">
                <Heading as="h1" className="page-title">Disciplina</Heading>
                <div className="button-container">
                    <button className="add-button" onClick={() => setIsOpen(true)}>
                        Adicionar Disciplina
                    </button>
                </div>
                <FormDisc 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    onDisciplinaAdded={handleDisciplinaAdded}
                />
                <TableDisc key={refreshKey} />
            </div>
        </div>
    );
};

export default DisciplinaPage;