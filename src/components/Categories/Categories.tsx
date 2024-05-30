import React from 'react'
import { Link } from 'react-router-dom'
import './categories.scss'

const Categories = () => {
    return ( 
    <>
        <h1>Browse The Range</h1>
        <div className="categories">
        <div className='column'>
            <div className="row">
                <img src="./img/dinning.jpg" alt="dinning" />
            <button>
                <Link className='link' to='/products'>Dinning</Link>
            </button>
            </div>
            <div className="row">
            <img src="./img/bedroom.jpg" alt="bedroom" />
            <button>
                <Link className='link' to='/products'>Bedroom</Link>
            </button>
            </div>
        </div>
        <div className="column">
            <div className="row">
            <img src="./img/living.jpg" alt="livingroom" />
            <button>
                <Link className='link' to='/products'>Living Room</Link>
            </button>
            </div>
            </div>
            <div className="column col-l">
                <div className="row">
                    <div className="column">
                        <div className="row"><img src="./img/kitchen.jpeg" alt="kitchen" />
            <button>
                <Link className='link' to='/products'>Kitchen</Link>
            </button>
            </div>
                    </div>
                    <div className="column">
                        <div className="row">
                            <img src="./img/kidsroom.jpeg" alt="kidsroom" />
            <button>
                <Link className='link' to='/products'>Kids Room</Link>
            </button></div>
                    </div>
                    </div>
                    <div className="row">
                        <img src="./img/bathroomM.jpg" alt="bath" />
            <button>
                <Link className='link' to='/products'>Bathroom</Link>
            </button>
                    </div>
                </div>
        </div>
    </>

    )
}

export default Categories