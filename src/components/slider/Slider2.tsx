import image from '../../../public/img/home-background1.jpg'
import "./slider.scss"
import { useState } from 'react'

const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        "../../../public/img/home-background1.jpg",
        "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev: number) => prev + 1);
    };
    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
                <div className="item">
                    <img src={data[1]} alt="" />
                </div>
                <div className="item">
                    <img src={data[0]} alt="" />
                </div>
                <div className="item">
                    <img src={data[2]} alt="" />
                </div>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <img src="./img/left.svg" alt="left" />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <img  src="./img/Right16px.svg" alt="right" />
            </div>
            </div>

        </div>

    )
}

export default Slider
       