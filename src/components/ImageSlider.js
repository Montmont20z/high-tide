import React, {useState, useEffect} from 'react'
import arrow_left from '../images/arrow_left.png'
import arrow_right from '../images/arrow_right.png'


export default function ImageSlider(props){
    const [currentSlide, setCurrentSlide] = useState(2)

    function prevSlide(){
        if (currentSlide !== 0){
            setCurrentSlide(prev => prev-1)
        } else {
            setCurrentSlide(() => props.slides.length-1)
        }     
    }

    function nextSlide(){
        if (currentSlide < props.slides.length-1){
            setCurrentSlide(prev => prev+1)
        } else {
            setCurrentSlide(() => 0)
        } 
    }

    // auto change slide
    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        },5000)
        return () => clearTimeout(timer)
    },[currentSlide])
    

    return (
        <div className='Carousel-imageSlider'>
            <img className='Carousel-prevArrow' onClick={prevSlide} src={arrow_left} alt=""/>
            <img className='Carousel-image' src={`${props.slides[currentSlide]}`} alt=""/>
            <img className='Carousel-nextArrow' onClick={nextSlide} src={arrow_right} alt=""/>
        </div>
    )
}