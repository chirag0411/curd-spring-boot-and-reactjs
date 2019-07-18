import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userProfileActions from '../../actions/userProfileActions';

export class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        let { dispatch } = this.props;
        this.state = {

        }
        this.userProfileActions = bindActionCreators(userProfileActions, dispatch);
        // this.onClickAddNewCategory = this.onClickAddNewCategory.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    componentDidMount() {

    }

    componentWillMount() {
        this.userProfileActions.getAllUsers();
    }
    render() {
        return (
            <div className="content-wrapper">
                chirag don
            </div>
        );
    }
}

function mapStateToProps(state) {
    //const { logindata, profile } = state;
    return {
    };
}

export default connect(mapStateToProps)(UserProfile);
