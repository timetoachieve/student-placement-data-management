import React, { useEffect } from 'react';
import { Navbar, TableView } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { listCompanies } from 'redux/actions/companyActions';

export function CompanyListScreen () {
    const dispatch = useDispatch();
    const companyList = useSelector((state) => state.companyList);
    const { loading, error, companies } = companyList;

    useEffect(() => {
        dispatch(listCompanies());
    }, [dispatch]);

    return <Navbar>
        {
            loading ? 'Loading...' : error ? error :
            <TableView columns={companies.columns} rows={companies.rows} />
        }
    </Navbar>
}
