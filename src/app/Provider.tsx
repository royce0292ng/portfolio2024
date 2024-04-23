"use client";

import Footer from '@/components/Footer';
import Topbar from '@/components/Topbar';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react'

export function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {  
    return (
    <NextUIProvider className='min-h-screen dark text-foreground bg-background'>
        <Topbar/>
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer/>
    </NextUIProvider>
  )
}

export default Providers