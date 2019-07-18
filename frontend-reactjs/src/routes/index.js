import React, { lazy, Suspense } from 'react';
import { Route } from "react-router-dom";
import { CombSpinner } from "react-spinners-kit";
//import {Cookies} from 'react-cookie';

//Layouts
export const CoreLayout = lazy(() => import('../layouts/coreLayout'));
export const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));

//public Components
export const LoginView = lazy(() => import('../accountViews/LoginView.react'));

//private Components
export const UserProfile = lazy(() => import('../containers/user-profile/UserProfile.react'));

const styleSuspenseDiv = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
};

/* const loggedIn = function () {
    if (Cookies.get('userToken')) {
            Cookies.save("userToken", Cookies.get('userToken'), { maxAge: 1800 });
        Cookies.set("userID", Cookies.get('userID'), {maxAge: 1800 });
        return true;
    } else return false;
}
const requireAuth = function (nextState, replace) {
    if (!loggedIn()) {
            replace({
                pathname: '/'
            })
        }
        } */

export default (
    <Suspense fallback={<div style={styleSuspenseDiv}><CombSpinner size={170} color="RED" /></div>}>
        <Route component={CoreLayout}>
            <Route name="login-view" exact path="/" component={LoginView} />
            <Route name="user-profie" exact path="/1" render={() => <DashboardLayout><UserProfile /></DashboardLayout>} />
            {/* <Route exact path="/about-us" render={() => <DashboardLayout><UserProfile /></DashboardLayout>} onEnter={requireAuth}/> */}
        </Route>
    </Suspense>
);