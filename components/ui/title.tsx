import React, { ReactNode } from 'react';
import { Rye } from 'next/font/google';

const rye = Rye({
    subsets: ['latin'],
    weight: ['400']
});


interface TitleProps {
    children: ReactNode;
}

export function TitleXL({ children }: TitleProps) {
    return (
        <h1 className={`${rye.className} uppercase text-4xl md:text-6xl font-bold leading-tighter`}>{children}</h1>
    )
}

export function TitleLg({ children }: TitleProps) {
    return (
        <h2 className={`uppercase text-3xl mt-2 font-bold leading-tighter`}>{children}</h2>
    )
}

export function TitleMd({ children }: TitleProps) {
    return (
        <h3 className="font-bold text-2xl">{children}</h3>
    )
}

export function TitleSm({ children }: TitleProps) {
    return (
        <h4 className="text-xl font-bold">{children}</h4>
    )
}