import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactGA from 'react-ga';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
//import { Cookies } from 'react-cookie';
import App from '../App';

ReactGA.initialize('UA-103436958-1');
const fireTracking = function () {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

/* const loggedIn = function () {
    if (Cookies.get('userToken')) {
        Cookies.save("userToken", Cookies.get('userToken'), { maxAge: 1800 });
        Cookies.set("userID", Cookies.get('userID'), { maxAge: 1800 });
        return true;
    } else return false;
} */
/* const requireAuth = function (nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/'
        })
    }
} */

const hashHistory = createHashHistory();
export default (
    <CookiesProvider>
        <HashRouter history={hashHistory} onChange={fireTracking}>
            <Switch>
                <Route exact path="/" component={App} />
                {/* <Route path="/city:*" component={App} />
            <Route path="/*" component={() => 'NOT FOUND'} /> */}
            </Switch>
        </HashRouter>
    </CookiesProvider>
);

/*
<Route component={CoreLayout}>
    <Route name='login' path='/' component={LoginView} />
    <Route name='firsttime-reset-pass' path='/firsttime-reset-pass' component={ResetPassword} />
    {/* <Route name='create-account' path='/create-account' component={CreateAccount}/> */
/* <Route component={DashboardLayout}>
    <Route name='user-excel-upload' path='/user-excel-upload' component={UserExcelUpload} onEnter={requireAuth} />

</Route>
</Route >
    <Route path="*" component={NotFound} /> * / */