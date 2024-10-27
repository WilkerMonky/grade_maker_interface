import React, { useState } from 'react';
import FormProf from '../../components/Forms/FormProf';
import TableProf from '../../components/tables/TableProf';
import '../../components/global.css';
import { Heading } from '@chakra-ui/react';

const Professor = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleProfessorAdded = () => {
        setRefreshKey(oldKey => oldKey + 1);
        setIsOpen(false);
    };

    return (
        <div className="page-container">
            <div className="content-wrapper">
                <Heading as="h1" className="page-title">Professor</Heading>
            </div>
        </div>
    );
};

export default Professor;