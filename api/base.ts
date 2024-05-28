/*export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';*/



import axios from 'axios'

class Api {
	protected BASE_URL = 'https://664b479fa300e8795d44f689.mockapi.io'

	protected api
	constructor() {
		this.api = axios.create({
			baseURL: this.BASE_URL,
			headers: { 'X-Custom-Header': 'foobar' }
		})
	}
}

export default Api





/*// api/base.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

enum httpCodes {
    OK = 200
}

class ProductsApi {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: BASE_URL,
            headers: { 'content-type': 'application/json' },
        });
    }

    async fetchProducts(url: string) {
        try {
            const response: AxiosResponse = await this.api.get(url);
            if (response.status !== httpCodes.OK) {
                throw new Error('Failed to fetch products');
            }
            return response.data; // Access data directly from the response
        } catch (error) {
            throw new Error('Failed to fetch products');
        }
    }
}

export const baseApi = new ProductsApi();
*/


