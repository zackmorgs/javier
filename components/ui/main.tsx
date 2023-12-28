"use client";

import React, { ReactNode, HTMLAttributes } from 'react';
import ReactGA from "react-ga4";
import Script from 'next/script'

const GA_Stuff = {
    gtmId: 'G-VVRCVF2QG4'
}

ReactGA.initialize(GA_Stuff.gtmId);

interface MainProps {
    children: ReactNode;
    // Include any other props you expect
    [key: string]: any; // This line is for any additional props
}

export default function Main({ children, ...rest }: MainProps) {
    return (
        <>
            <main>
                {children}
            </main>
            {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-VVRCVF2QG4" />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
 
                    gtag('config', 'G-VVRCVF2QG4');
                `}
            </Script> */}
        </>
    )
}