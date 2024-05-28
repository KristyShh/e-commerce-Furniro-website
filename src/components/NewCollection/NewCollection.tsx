import React from 'react'
import './newCollection.scss'
import Card from '../Card/Card';
import { Itype, ICard } from '../../types/types';


const NewCollection: React.FC<Itype> = ({ type }) => {
    
        const data: ICard[] = [
            {
                id: '1',
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
                id: '2',
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
                id: '3',
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
                id: '4',
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
                id: '5',
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


        ];
        const filteredData = data.filter(item => item.type === type);
        return (
            <div className="newCollection">
                <div className="title">
                    <h2>Our {type} products </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nulla beatae praesentium, earum eius ad vero! Sequi eveniet nobis eligendi alias velit deleniti excepturi et fuga, magni culpa minus ad. </p>
                    </div>
                    <div className="content">
                        {filteredData.map((item) => (
                            <Card key={item.id} {...item}/>
                            
                        ))}
                    </div>
            </div>
        );
}


export default NewCollection;