import img1 from '../../assets/dishes/img1.svg'
import img2 from '../../assets/dishes/img2.svg'
import img3 from '../../assets/dishes/img3.svg'
import scss from "@/components/Dishes/Dishes.module.scss"

export const dishes = [
    {
        img: img1,
        type: "Healthy",
        clas : scss.type,
        title: "Chicken Hell",
        time: "24min",
        rating: "4.9" ,
        price: "$12" ,
        cent: ".99" 

    },
    {
        img: img2,
        type: "Trending",
        clas : scss.trending,
        title: "Swe Dish",
        time: "34min",
        rating: "4.9" ,
        price: "$19" ,
        cent: ".99"

    },
    {
        img: img3,
        type: "Supreme",
        clas : scss.supreme,
        title: "Swe Dish",
        time: "34min",
        rating: "4.9" ,
          price: "$19" ,
        cent: ".99"

    },
    {
        img: img1,
        type: "Healthy",
        clas : scss.type,
        title: "Chicken Hell",
        time: "24min",
        rating: "4.9" ,
          price: "$12" ,
        cent: ".99"

    },
    {
        img: img2,
        type: "Trending",
        clas : scss.trending,
        title: "Swe Dish",
        time: "34min",
        rating: "4.9" ,
         price: "$19" ,
        cent: ".99"

    },
]