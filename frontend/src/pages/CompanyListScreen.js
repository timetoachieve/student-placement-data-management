import React, { useEffect, useState } from 'react';
import { Navbar, TableView } from 'components';
import axios from 'axios';

export function CompanyListScreen () {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {            
            try {
                setLoading(true);
                const { data } = await axios.get('/api/companies');
                setLoading(false);
                setCompanies(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log(companies);
    const { columns, rows } = companies;
    console.log(columns);
    console.log(rows);

    return <Navbar>
        {
            loading ? 'Loading...' : error ? error :
            <TableView columns={columns} rows={rows} />
        }
    </Navbar>
}
