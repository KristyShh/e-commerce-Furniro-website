import React from 'react'
import { useAppSelector } from '../../hooks/useRedux'
import { useAppDispatch } from '../../hooks/useRedux'
import { removeFromFavorites } from '../../redux toolkit/favorites/slice'
import Card from '../../components/Card/Card'

const Favorites: React.FC = () => {
   
    const favorites = useAppSelector(state => state.favorite.favoriteProducts)
    const dispatch = useAppDispatch()

    return (
        <section className="favorites">Favorites
        <div className="container" style={{ margin: "20px" }}>
        <div className="row" style={{display: "flex", flexDirection: "row", gap: "20px"}}>
            {favorites.map((item) => (
                <div className="col-3">
                    <Card key={item.id} {...item}  />            
                <img className="delete" src="../../../public/img/delete.png" alt="" 
                onClick={()=>dispatch(removeFromFavorites(item.id))}/>
             </div>
            ))}

        </div>
        </div>
        </section>
    )
};

export default Favorites