import Api from "./base"
import { ICard } from "../src/types/types"


class productsApi extends Api {
	endpointAll = '/products?category,price,limit,page,id'
	
 async fetchAll(): Promise<ICard[]> { 
  const { data } = await this.api.get(this.endpointAll) //this.api.get<ICard[]>(this.endpointAll)
 // console.log(data)
  return data
 }
}
export default new productsApi()