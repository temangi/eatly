import React from 'react'
import Header from "@/components/Header/Header.jsx"
import Footer from '@/components/Footer/Footer.jsx'
import MainMenu from '@/components/MainMenu/MainMenu'
import Food from '@/components/Food/Food'

function page() {
  return (
    <>
    <Header/>
    <MainMenu/>
    <Food/>
    <Footer/>
    </>
  )
}

export default page