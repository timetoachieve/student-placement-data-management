import React from 'react';
import { Navbar, TableView } from 'components';

const columns = [
    {
        id: 'date',
        label: 'Date',        
    },
    {
        id: 'time',
        label: 'Time'
    },
    {
        id: 'venue',
        label: 'Venue'
    },
    {
        id: 'company',
        label: 'Company'
    },
    {
        id: 'task',
        label: 'Task Scheduled'
    }
];

const rows = [
];

export function CompanyScheduleScreen () {
    return <Navbar>
        <TableView columns={columns} rows={rows} />
    </Navbar>;
}
