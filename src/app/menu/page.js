import React from 'react'
import Header from "@/components/Header/Header.jsx"
import Footer from '@/components/Footer/Footer.jsx'
import MainMenu from '@/components/MainMenu/MainMenu'
import Food from '@/components/Food/Food'
import RestaurantMenu from "@/components/RestaurantMenu/RestaurantMenu"

function page() {
  return (
    <>
    <Header/>
    <MainMenu/>
    <RestaurantMenu/>
    <Food/>
    <Footer/>
    </>
  )
}

export default page