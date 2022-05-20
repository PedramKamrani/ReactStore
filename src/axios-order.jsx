import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pedram-c9ce9-default-rtdb.firebaseio.com',
});
export default instance;
