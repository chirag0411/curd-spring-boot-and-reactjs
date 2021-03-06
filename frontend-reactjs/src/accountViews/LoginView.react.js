import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
export class LoginView extends React.Component {

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
            <div className="login-box">
                <div className="login-logo">
                    <a href={'/'}><b>Worth4</b>Tech</a>
                </div>
                <Link to={'/123'}>123</Link>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email"></input>
                                <div className="input-group-append input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password"></input>
                                <div className="input-group-append input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember"></input>
                                        <label htmlFor="remember">Remember Me </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href={'/'} className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                                </a>
                            <a href={'/'} className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                                </a>
                        </div>

                        <p className="mb-1">
                            <a href={'/'}>I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href={'/'} className="text-center">Register a new membership</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //const { logindata, profile } = state;
    return {
    };
}

export default connect(mapStateToProps)(LoginView);
