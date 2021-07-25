import React, { useEffect, useState } from 'react';
import { Navbar, TableView } from 'components';
import axios from 'axios';



export function CompanyScheduleScreen () {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/schedules');
                setLoading(false);
                setSchedule(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log(schedule);
    const { columns, rows } = schedule;
    console.log(columns);
    console.log(rows);

    return <Navbar>
        {
            loading ? 'Loading...' : error ? error :
            <TableView columns={columns} rows={rows} />
        }
    </Navbar>;
}
