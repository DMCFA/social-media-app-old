import axios from 'axios'
const baseUrl = '/login'

const login = async credentials => {
    const req = await axios.post(baseUrl, credentials)
    return req.data
}

export default login