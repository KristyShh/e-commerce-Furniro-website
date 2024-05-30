import React, { useState } from 'react';
import './Burger.scss';
import burgerIcon from '../../../public/img/burger.svg';
import closeIcon from '../../../public/img/close.png';
import logo from '../../../public/img/Logo-full.svg';
const BurgerMenu: React.FC = ( ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return  (
        <div className="burger-menu">
            <div className="burger-icon" onClick={toggleMenu}> 
            <img src={isOpen ? closeIcon : burgerIcon} alt="menu"/>
            </div>
            <div className={`menu-content ${isOpen ? 'open' : 'closed'}`}>
                <ul>
                    <li><a href="/products"  >Shop</a></li> 
                    <li><a href="/"  >Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">Blog</a></li>                 
                </ul>
                <img src={logo} alt="logo"/>
            </div>

        </div>
    );
};

export default BurgerMenu;