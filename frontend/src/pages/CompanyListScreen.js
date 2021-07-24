import React from 'react';
import { Navbar, TableView } from 'components';

const columns = [
    {
        id: 'name',
        label: 'Company Name',        
    },
    {
        id: 'departments',
        label: 'Departments'
    },
    {
        id: 'cgpa',
        label: 'CGPA'
    },
    {
        id: 'backlog',
        label: 'Backlog'
    },
    {
        id: 'stipend',
        label: 'Stipend'
    },
    {
        id: 'deadline',
        label: 'Last Date',
    },
    {
        id: 'status',
        label: 'Status'
    },
    {
        id: 'description',
        label: 'Description'
    },
    {
        id: 'apply',
        label: 'Apply'
    }
];

const rows = [
];

export function CompanyListScreen () {
    return <Navbar>
        <TableView columns={columns} rows={rows} />
    </Navbar>
}
