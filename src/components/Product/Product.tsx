
import './Product.scss';
import Accordion from '../Accordion/accordion';
import { useParams,  } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { ICard } from '../../types/types';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { addToCart, CartProduct } from '../../redux toolkit/cart/slice';
import { addToFavorites, FavoritesProduct } from '../../redux toolkit/favorites/slice';





export const Product = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedImage, setSelectedImage] = useState("img");
    const [quantity, setQuantity] = useState<number>(1);
   const { response: products } = useFetch<ICard>(`https://664b479fa300e8795d44f689.mockapi.io/products?id=${id}`);
console.log(products)

const dispatch = useAppDispatch();

    const accordionContent = [
        {
            title: 'Information about product',
            content: 'Tapicerka: tkanina (100% poliester), Dzięki tkaninie wysokiej jakości (115 000 cykli w teście Martindale), tapicerka nadaje się do bardzo intensywnego codziennego użytku',
        },
        {
            title: 'Delivery and payment',
            content: 'Czas wysyłki: 9-10 tygodnie. Dostawa do Twojego domu jest szybka i wygodna za pośrednictwem firmy kurierskiej.',
        }
    ];

    return (
        <div className="product">
            { products && products.map((item) => (

                <div className="product" key={item.id}>
                    <div className="left">
                        <div className="images">
                            <img src={item.img} alt="" onClick={() => setSelectedImage("img")} />
                            <img src={item.img2} alt="forks" 
                            onClick={() => setSelectedImage("img2")} />
                        </div>
                        <div className="mainImg">
                            <img src= {selectedImage === "img" ? item.img : item.img2}
                                 alt="Selected" />
                        </div>
                    </div>
                    <div className="right">
                        <h1>{item.title}</h1>
                        <span className='price'>$ {item.price}</span>
                        <p>{item.description}</p>
                        <div className="quantity">
                            <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button>
                            {quantity}

                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <button className="add" onClick={() => dispatch(addToCart({ 
                            id: item.id,
                            title: item.title,
                            img: item.img,
                            price: item.price,
                            description: item.description,
                            quantity: quantity
                            } as CartProduct))}>
                            <img src="../../../public/img/Cart.svg" alt="cart" />
                            ADD TO CART
                        </button>
                        <div className="links" >
                        <button className="item" onClick={() => dispatch(addToFavorites({
                            id: item.id,
                            title: item.title,
                            img: item.img,
                            price: item.price,
                            description: item.description,
                            category: item.category} as FavoritesProduct
                        ))} > 
                        <img src="../../../public/img/Favorites.svg" alt="favorites" /> 
                         ADD TO WISH LIST
                         </button> 
                        <div className="item" >  
                        <img src="../../../public/img/compare.png" alt="cart" />
                        
                         ADD TO COMPARE 
                         </div>
                        </div>
                        <div className="info">
                            <h2>Product Details</h2>
                            <div className="accordion">
                <Accordion key={ accordionContent[0].title} title={accordionContent[0].title} content={accordionContent[0].content} />
                <Accordion key={ accordionContent[1].title} title={accordionContent[1].title} content={accordionContent[1].content} />
        </div>

                        </div>

                    </div>


                </div>
            ))}
        </div>
    )


}

