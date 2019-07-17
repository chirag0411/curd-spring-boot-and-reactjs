import React from 'react';
import { connect } from 'react-redux';

export class DashboardFooter extends React.Component {

    constructor(props) {
        super(props);
        //let { dispatch } = this.props;
        this.state = {
        };
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    render() {
        return (
            <footer className="main-footer">
                <strong>Copyright &copy; 2019 <a href={'/'}>Worth 4 Tech</a>.</strong> All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b>4.0
            </div>
            </footer>
        )
    }
}

function mapStateToProps(state) {
    //const { logindata, profile } = state;
    return {
    };
}

export default connect(mapStateToProps)(DashboardFooter);
