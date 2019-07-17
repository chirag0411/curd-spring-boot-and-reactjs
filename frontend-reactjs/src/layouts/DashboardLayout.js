import React, { lazy } from 'react';

const NavbarHeader = lazy(() => import('../commonComponents/NavbarHeader.react'));
const MainSidebar = lazy(() => import('../commonComponents/MainSidebar.react'));
const DashboardFooter = lazy(() => import('../commonComponents/DashboardFooter.react'));
const ControlSidebar = lazy(() => import('../commonComponents/ControlSidebar.react'));

export default class DashboardLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <NavbarHeader></NavbarHeader>
                <MainSidebar></MainSidebar>
                {this.props.children}
                <DashboardFooter></DashboardFooter>
                <ControlSidebar></ControlSidebar>
            </div>
        )
    }
}