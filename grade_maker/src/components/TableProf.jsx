import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const TableProf = () => {
    // Definindo o estado com alguns produtos de exemplo
    const [products, setProducts] = useState([
        { code: 'P001', name: 'Product 1', category: 'Category A', quantity: 10 },
        { code: 'P002', name: 'Product 2', category: 'Category B', quantity: 15 },
        { code: 'P003', name: 'Product 3', category: 'Category C', quantity: 20 }
    ]);

    return (
        <div className='card'>
            <DataTable value={products} tableStyle={{ minWidth: '50rem', width: '100%' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
};

export default TableProf;
