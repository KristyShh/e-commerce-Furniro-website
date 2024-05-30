import React from 'react'
import './footer.scss'
const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h3>Links</h3>
                    <span>Home</span>
                    <span>Shop</span>
                    <span>About</span>
                    <span>Blog</span>
                    
                </div>
                <div className="item">
                    <h3>Help</h3>
                    <span>FAQ</span>
                    <span>Payment Options</span>
                    <span>Stores</span>
                    <span>Returns</span>
                    
                </div>
                <div className="item">
                    <img className="logo" src="./img/Logo-full.svg" alt="" />
                    <div className="socialmedia">
                        <img src="./img/facebook.png" alt="" />
                        <img src="./img/insta.png" alt="" />
                        <img src="./img/pinterest.png" alt="" />
                    </div>
        </div>
            </div>
            <hr className='footline' />
            <div className="bottom">
                    <span className="copyright">Furniro © 2023. All Rights Reserved</span>
            </div>
        </div>
    )
}
export default Footer