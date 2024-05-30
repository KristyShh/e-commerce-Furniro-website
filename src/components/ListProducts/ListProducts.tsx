
import Card from '../Card/Card';
import './ListProducts.scss';
import { ICard } from '../../types/types';


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


