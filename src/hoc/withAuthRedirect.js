import React, { Component } from 'react';
import { Redirect } from 'react-router';

export const WithAuthRedirect = (Component) => {
    
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={"/Login"}/>
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent;
}