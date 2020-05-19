import axios from 'axios'

const instance = axios.create({
    baseURL :  'https://axios-f81bd.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance