import React from 'react'
import './cart.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { removeFromCart,  resetCart } from '../../redux toolkit/cart/slice'


const Cart = () => {
    const products = useAppSelector(state => state.cart.cartProducts)
    const dispatch = useAppDispatch()
    /*const totalPrice = ()=>{
        let total = 0
        products.forEach(item => {
            total += item.quantity * item.price 

        });
        return total.toFixed(2);
    }*/
    const totalPrice = () => {
        return products
            .reduce((acc, item) => acc + item.quantity * item.price, 0)
            .toFixed(2);
    };
    return ( 
       
        <div className = "cart">
            <h2>Products in your cart</h2>
            {products.map(item => (
                <div className="item"  key={item.id} >
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.description.substring(0, 50)}</p>
                    <div className="price">{item.quantity}
                        x ${item.price}
                    </div>
                </div>
                <img className="delete" src="../../../public/img/delete.png" alt="" 
                onClick={()=>dispatch(removeFromCart(item.id))}/>
             </div>
            ))}
            
<div className="total">
    <span>SUBTOTAL:</span>
    <span>${totalPrice()}</span>
</div>
<button>PROCEED TO CHECKOUT</button>
<span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
           </div>
         
    )
}

export default Cart
