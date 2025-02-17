import iceCream from '../../../assets/MainMenu/Icecream.svg'
import Pizza from '../../../assets/MainMenu/Pizza.svg'
import Asian from '../../../assets/MainMenu/Hotdog.svg'
import Doughnut from '../../../assets/MainMenu/Doughnut.svg'
import scss from './Categoty.module.scss'

export const arr = [
    {
        img: Pizza,
        title: "Pizza",
        clas : scss.pizza
    },
    {
        img: Asian,
        title: "Asian",
        clas: scss.asian
    },
    {
        img: Doughnut,
        title: "Donat",
        clas: scss.doughnut
    },
    {
        img: iceCream,
        title: "Ice",
        clas: scss.iceCream
    },
]

export const price = ["$0","$25","$50","$100","$500","$1000",]