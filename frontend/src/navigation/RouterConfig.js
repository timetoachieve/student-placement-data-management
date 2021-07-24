import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROOT, SCHEDULE } from './CONSTANTS';
import { CompanyListScreen, CompanyScheduleScreen } from 'pages';

export function RouterConfig () {
    return <div>
        <Switch>
            {/* Public Routes */}
            <Route exact path={ROOT} component={CompanyListScreen} />
            <Route path={SCHEDULE} component={CompanyScheduleScreen} />
            {/* Private Routes */}
            {/* 404 Page */}
        </Switch>
    </div>;
}
