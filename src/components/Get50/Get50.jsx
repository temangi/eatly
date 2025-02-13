"use client"
import Image from "next/image"
import tamak from "@/assets/tamak.svg"
import scss from "./style.module.scss"
import { useState } from "react"

function Get50() {

    const [value , setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("email",JSON.stringify(value))
        setValue(0)

    }
  return (
    <section className={scss.get}>
        <main>
            <h1>GET 50%</h1>
            <form onSubmit={() => handleSubmit(e)}>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="email" placeholder=' Enter Your Email Address' required />
                <button type="submit">subscribe</button>
            </form>
        </main>
        <Image className={scss.tamak} src={tamak} alt="cake" />
    </section>
  )
}

export default Get50