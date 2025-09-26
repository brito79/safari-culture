import Footer from '@/components/ui/Footer'
import Navigation from '@/components/ui/Navigation'
import React, { ReactNode } from 'react'

function CampsLayout( { children } : Readonly<
{children : ReactNode}>) {
  return (
    <header className=''>
        <Navigation />
        {children}
        <Footer />
    </header>
  )
}

export default CampsLayout