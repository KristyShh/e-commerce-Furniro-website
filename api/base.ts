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





