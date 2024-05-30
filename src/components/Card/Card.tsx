
import { Link } from 'react-router-dom'
import {ICard} from '../../types/types'
import './card.scss'

const Card = (item:ICard ) => {
    return (
        <Link className = "link" to = {`/product/${item.id}`}>
        <div className='card'>
            <div className="image">
                <span>{item.isPopular &&<span className="popular">Popular</span>}</span>
                <img src = {item.img} alt="mainImg" className='mainImg'/>
                <img src = {item.img2} alt="secondImg" className='secondImg'/>
            </div>
            <h3>{item.title}</h3>
            <div className="prices">
                <h4>${item.oldprice}</h4>
                <h3>${item.price}</h3>
        </div>
        </div>
        </Link>
    )
}

export default Card