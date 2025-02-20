import React from 'react'
import Header from "@/components/Header/Header.jsx"
import Footer from '@/components/Footer/Footer.jsx'
import Pricing from '@/components/Pricing/Pricing'
import Dashboard from '@/components/Dashboard/Dashboard'

function page() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default page