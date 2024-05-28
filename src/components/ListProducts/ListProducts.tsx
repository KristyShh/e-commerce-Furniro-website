
/*import {  useState } from 'react';
import Card from '../Card/Card';
import './ListProducts.scss';
/*import { useFetch } from '../../hooks/useFetch';
import { ICard } from '../../types/types';

const List = ( {category}) => {
    
const limit=6
const [page, setCurrentPage] = useState(1);
const { response, error, loading} = useFetch<ICard[]>(`https://664b479fa300e8795d44f689.mockapi.io/products?page=${page}&limit=${limit}`);
//const { items, loading, error,  } = useAppSelector((state: any) => state.products);
    console.log(response)


   


    /*useEffect(() => {
        dispatch(fetchProductsThunk ( ));
    }, [ dispatch,  ]);*/
// components/ListProducts/ListProducts.tsx
import React from 'react';
import Card from '../Card/Card';
import './ListProducts.scss';
import { ICard } from '../../types/types';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';

const List = ({ products }: { products: ICard[] }) => {
   
   
    return (
        <div className="list">
            {products.map((item) => (
                <Card key={item.id} {...item} />
            ))}    
        </div>
    );
};

export default List;



/*
    const nextPage = () => {
        setCurrentPage(page + 1)
    }

    const prevPage = () => {
        setCurrentPage(page - 1)
    }

    return (
        <div className="list" >
           {error ? <div>Error</div> : loading ? <div>Loading...</div> : null}
            {response && response.map((item) => (
                <Card key ={item.id} {...item} />
            ))}
                        
            <div className="pagination">
<button onClick={prevPage} disabled={page === 1}>Prev</button>
<span className="page">{page}</span>
<button onClick={nextPage}>Next</button>
</div>
            
                
        </div>
    );
};

export default List ;

















/*import './ListProducts.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux toolkit/store';
import { ICard } from '../../types/types';
import { fetchProductsThunk } from '../../redux toolkit/products/thunk';

import Card from '../Card/Card';

const List = () => {
    
    const dispatch = useAppDispatch();
    const { loading, error, products } = useAppSelector((state) => state.products);
    

    useEffect(() => {
        dispatch(fetchProductsThunk());
    }, [dispatch]);

    return (
        <div className="list">
            { loading && <div>Loading...</div>}
            { error&& <div>Error</div>}
            { products && products.map((item: ICard) => (
                <Card key={item.id} {...item} />
            ))}

            
                
        </div>
    );
};

export default List;







 /*const data: ICard[] = [
        {
            id: 1,
            img: "../../../public/img/new1.jpg",
            img2: "../../../public/img/sofa.jpg",
            title: 'Lorem ipms',
            isPopular: true,
            oldprice:120,
            price:105,
            type:'old',
            category:'dinning',
            color:'white',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            id: 2,
            img: "../../../public/img/new2.jpg",
            img2: "../../../public/img/krszeslo.jpg",
            title: 'Krzesło ogrodowe z drewna Malmö',
            isPopular: true,
            oldprice:148,
            price:117,
            type:'new',
            category:'dinning',
            color:'white',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            id: 3,
            img: "../../../public/img/new3.jpg",
            img2: "../../../public/img/sofa2.jpg",
            title: 'Sofa smart novo Lorem ipms',
            isPopular: true,
            oldprice:150,
            price:122,
            type:'new',
            category:'livingroom',
            color:'white',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            id: 4,
            img: "../../../public/img/new4.jpg",
            img2: "../../../public/img/talerze2.jpg",
            title: 'Ręcznie wykonany talerz duży Scalloped',
            isPopular: false,
            oldprice:12,
            price:9,
            type:'new',
            color:'blue',
            category:'dinning',
        },
        {
            id: 5,
            img: "../../../public/img/stolik.jpg",
            img2: "../../../public/img/stolik2.jpg",
            title: 'Stolik kawowy Ilvi',
            isPopular: true,
            oldprice:12,
            price:9,
            type:'new',
            color:'white',
            category:'dinning',
        },

    ] <button className="more" onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}>Previos</button>
            <span className="page">{page}</span>
            <button className="more" onClick={() => handlePageChange(page - 1)}>Next</button>


*/