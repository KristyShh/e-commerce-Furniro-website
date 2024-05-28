import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import Cart from '../Cart/Cart'
import image from '../../../public/img/Logo-full.svg'
import { useAppSelector } from '../../hooks/useRedux'
const Navbar = () => {
    const products = useAppSelector(state => state.cart.cartProducts)
    const [openCart,setOpenCart] = React.useState(false)

    return (
        <div className="navbar">
        <div className= "wrapper">
        <div className="left">
        <div className="logo">
            <img src="./img/Logo-full.svg" alt="logo-furniro" />
        </div>
        <div className="item">
            <Link className='link' to ='/products/1'>Shop</Link>
        </div>
        </div>
        <div className="center">
            <div className="item-page">
                <Link className='link' to ="/">Home</Link>
        </div>
        <div className="item-page">
                <Link className='link' to ="/">About</Link>
        </div>
        <div className="item-page">
                <Link className='link' to ="/">Contacts</Link>
        </div>
        <div className="item-page">
                <Link className='link' to ="/blog">Blog</Link>
        </div>
        <div className="right">
            <div className="icons">
            <img  className="item" src="../../../public/img/Search.svg" alt="search" />
            <img className="item" src="../../../public/img/Favorites.svg" alt="favorites" />
            <div className="cartIcon"   onClick={() => setOpenCart(!openCart)}>
            <img className="item" src="../../../public/img/Cart.svg" alt="cart" />
            <span>{products.length}</span>
            </div>
            <Link className='item' to ="/login">
                <img src="../../../public/img/profile.svg" alt="profile" />
            </Link>
           </div>
        </div>  
     </div>
 </div>
 {openCart && <Cart />}
        </div>
    )
}

export default Navbar