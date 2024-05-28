interface ICard {
    id: string
    title: string
    price: number
    img: string
    img2: string
    description?: string
    category: string
    oldprice: number
    isPopular?: boolean
    type: string
    color: string
}

export interface FetchProductsResponse {
    response: ICard[];
    total: number;
    page: number;
    limit: number;
}
interface Itype {
    type: string
}

interface IAccordion {
    title: string
    content: string
}
export type Category = "dinning" | "livingroom" | "kidsroom" | "kitchen"| "bedroom"| "bathroom"|''

export interface ICategory {
    category: Category
}

export type { ICard, Itype, IAccordion }
