import React, { useState } from 'react';
import FormDispo from '../components/Forms/FormDispo';
import TableDispo from '../components/tables/TableDispo';
import '../components/global.css';
import { Heading } from '@chakra-ui/react';

const DisponibilidadePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleDisponibilidadeAdded = () => {
        setRefreshKey(oldKey => oldKey + 1);
        setIsOpen(false);
    };

    return (
        <div className="page-container">
            <div className="content-wrapper">
                <Heading as="h1" className="page-title">Disponibilidade</Heading>
                <div className="button-container">
                    <button className="add-button" onClick={() => setIsOpen(true)}>
                        Adicionar Disponibilidade
                    </button>
                </div>
                <FormDispo 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    onDisponibilidadeAdded={handleDisponibilidadeAdded}
                />
                <TableDispo key={refreshKey} />
            </div>
        </div>
    );
};

export default DisponibilidadePage;