import {Component} from 'react';
import cookies from 'nookies';
import React from 'react';
import Router from 'next/router';


const authenticate = (context) => {
    const {token} = cookies.get(context);
    if(context.req && !token){
        context.res.writeHead(302, {location : '/signin'});
        context.end();
        return;
    }
    if(!token){
        Router.push('/signin');
    }
    return token;
}


const withAuthenticate = (WrappedComponent) => {
    return class extends Component {
        static getInitialProps = async (context) =>{
            const componentProps;
            const token = authenticate(context);
            if(WrappedComponent.getInitialProps){
                componentProps = await WrappedComponent.getInitialProps(context);
            }
            return {
                ...componentProps, token
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props}/>
            )
        }
    }
}

export default withAuthenticate;