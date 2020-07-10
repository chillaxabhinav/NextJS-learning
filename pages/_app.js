import React from 'react';
import App from 'next/app';
import My from '../components/My/my';
import Another from '../components/Another/another';

class MyApp extends App {

    yo = true;

    render(){
        let my;
        if(this.yo){
            my = (<My/>)
        }
        else{
            my = (<Another/>)
        }

        const {Component, pageProps} = this.props;

        return (
            <>  
                {my}
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