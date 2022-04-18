import React, { useState } from "react";
import { sliderData } from "./SliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './App.css';

function Slider()
{

    const [current, setCurrent] = useState(0)

    const length = sliderData.length

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(sliderData) || sliderData.length <= 0)
    {
        return null
    }

    return(
        <section className="slider">
        <h2 className="slider-title">Featured</h2>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        {sliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                        {index === current && <img src={slide.image} alt="FeaturedImage" className="slider-image"/>}
                        {index === current && <h3 className="slide-text">{slide.text}</h3>}
                    </div>
                )
            })}
        </section>
    )
}

export default Slider;