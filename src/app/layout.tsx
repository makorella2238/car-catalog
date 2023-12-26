import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import './globals.css'
import React from "react";
import ReactQueryProvider from "@/ReactQueryProvider";

const mont = Montserrat({subsets: ['latin'], variable: '--mont-family'})

export const metadata: Metadata = {
    title: 'Car Catalog',
    description: 'Car Catalog shop ',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <ReactQueryProvider>
            <html lang="en">
            <body className={ mont.variable }>{ children }</body>
            </html>
        </ReactQueryProvider>
    )
}
