import React from 'react'
import ImageSlider from './ImageSlider'
import carousel_image1 from '../images/carousel_image1.jpg'
import carousel_image2 from '../images/carousel_image2.jpg'
import carousel_image3 from '../images/carousel_image3.jpg'
import carousel_image4 from '../images/carousel_image4.jpg'
import carousel_image5 from '../images/carousel_image5.jpg'


export default function Carousel(){
    const slides = [
        carousel_image1,
        carousel_image2,
        carousel_image3,
        carousel_image4,
        carousel_image5,
    ]

    return (
        <div className="Carousel">
            <ImageSlider slides={slides}/>
        </div>
    )
}