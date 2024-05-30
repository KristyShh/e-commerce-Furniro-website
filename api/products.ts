import Api from "./base"
import { ICard } from "../src/types/types"


class productsApi extends Api {
	endpointAll = '/products?category,price,limit,page,id'
	
 async fetchAll(): Promise<ICard[]> { 
  const { data } = await this.api.get(this.endpointAll) 
  return data
 }
}
export default new productsApi()