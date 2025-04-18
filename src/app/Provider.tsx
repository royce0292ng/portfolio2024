"use client";

import Footer from '@/components/Footer';
import Topbar from '@/components/Topbar';
import { HeroUIProvider } from "@heroui/react";
import React from 'react'

export function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {  
    return (
    <HeroUIProvider className='min-h-screen dark text-foreground bg-background'>
        <Topbar/>
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer/>
    </HeroUIProvider>
  )
}

export default Providers