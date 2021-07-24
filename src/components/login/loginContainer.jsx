import React from 'react';
import { getAuth } from '../../reducer/auth-reducer';
import {Login} from './login';
import { connect } from 'react-redux';

class LoginComponent extends React.Component {
    render() {
        return (
            <Login
                {...this.props}
                authSend={this.authSend}

            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.AuthReducer.isAuth,
        error: state.AuthReducer.error,
    }
}

export const LoginContainer = connect(mapStateToProps, {
    getAuth,
})(LoginComponent)

