import React, { useEffect, useState } from 'react';
import { Navbar, TableView } from 'components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listSchedule } from 'redux/actions/companyActions';

export function CompanyScheduleScreen () {
    const dispatch = useDispatch();
    const scheduleData = useSelector((state) => state.schedule);
    const {loading, error, schedule} = scheduleData

    useEffect(() => {
        dispatch(listSchedule());
    }, [dispatch]);

    return <Navbar>
        {
            loading ? 'Loading...' : error ? error :
            <TableView columns={schedule.columns} rows={schedule.rows} />
        }
    </Navbar>;
}
