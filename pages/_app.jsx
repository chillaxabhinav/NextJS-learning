import React from 'react';
import App from 'next/app';

class MyApp extends App {
    render(){
        const {Component, pageProps} = this.props;

        return (
            <>  
                <Component {...pageProps} />

                <style jsx>
                    {`
                        *{
                            box-sizing : border-box;
                        }
                    `}
                </style>
            </>
        )
    }
}

export default MyApp;