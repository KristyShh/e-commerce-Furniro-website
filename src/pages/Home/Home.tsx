import React from 'react'
import  Slider  from '../../components/slider/Slider2'
import './Home.scss'
import Categories from '../../components/Categories/Categories'
import NewCollection from '../../components/NewCollection/NewCollection'
import Contact from '../../components/Contact/Contact'

export const Home = () => {
    return (
        <div className="home">
            <Slider />
            <Categories />
            <NewCollection type="new"/>
            <Contact />
        </div>
    )
}