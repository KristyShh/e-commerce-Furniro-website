
import './Products.scss';
import List from '../../components/ListProducts/ListProducts';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ICard } from '../../types/types';
import { SearchControl } from '../../components/SearchControl/SearchControl';

export const Products = () => {
    const [category, setCategory] = useState<string[]>([]);
    const [maxPrice, setMaxprice] = useState("" );
    const [sort, setSort] = useState("");
    const [page, setCurrentPage] = useState(1);
    const [value, setSearchParam] = useState("");
    const  queryParams = `title=${value}&category=${category}&sortby=price&order=${sort}&limit=6&page=${page}&price=${maxPrice}`  ;
    const { response: products, error, loading } = useFetch<ICard>(`https://664b479fa300e8795d44f689.mockapi.io/products?${queryParams}`);
console.log(products)
    const nextPage = () => {
        setCurrentPage(page + 1)

    };
    const prevPage = () => {
        setCurrentPage(page - 1)
    }
   const handleCategoryChange = (category: string) => {
     setCategory(prev => prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]);
   };
  
   
    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id=""  value=" " checked={category.includes("")} 
                            onChange={() => handleCategoryChange("")}/>
                        <label htmlFor=" ">All Categories</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="dinning" value="dinning" 
                                  onChange={ () => handleCategoryChange("dinning")} />     
                        <label htmlFor="dinning">Dinning</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="bedroom" value="bedroom"
                         checked={category.includes("bedroom")} 
                         onChange = {() => handleCategoryChange("bedroom")} />
                        <label htmlFor="bedroom">Bedroom</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="livingroom" value="livingroom"
                         checked={category.includes("livingroom")}
                         onChange ={() => handleCategoryChange("livingroom")} />
                        <label htmlFor="livingroom">Living Room</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="kitchen" value="kitchen"
                          onChange={() => handleCategoryChange("kitchen")}/>
                <label htmlFor="kitchen">Kitchen</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="bathroom" value="bathroom" 
                        onChange ={() => handleCategoryChange("bathroom")} />
                        <label htmlFor="bathroom">Bathroom</label>
                    </div>
                    <div className="inputItem">
                    <input type="checkbox" id="kidsroom" value="kidsroom" 
                    onChange={() => handleCategoryChange("kidsroom")}  />
                    <label htmlFor="kidsroom">Kids Room</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(event) => setMaxprice(event.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={() => setSort("asc")} />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange={() => setSort("desc")} />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="topBanner">
                    <img className="catImg" src="../../../public/img/shopbcg 1.jpg" alt="home-background" />
                    <h2>Shop</h2>
                </div>
                <SearchControl onChange={(value) => setSearchParam(value)} 
                 />
              
                {error ? <div>Error: {error.toString()}</div> : loading ? <div>Loading...</div> : (
                    <List products={products}  />
                )}
                    <div className="pagination">
            <button onClick={prevPage} disabled={page === 1}>Prev</button>
                <span className="page">{page}</span>
            <button onClick={nextPage}>Next</button>
    </div>
        </div>
                
            </div>
       
    );
};

