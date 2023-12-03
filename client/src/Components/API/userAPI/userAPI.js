import axios from 'axios'


class userAPI {

    async login(login, password) {
        return await axios.get(`http://localhost:9000/login?login=${login}&password=${password}`)
    }

    async register(login, password, name, email, avatar='') {
        return await axios.post(`http://localhost:9000/register?login=${login}&password=${password}&name=${name}&email=${email}&avatar=${avatar}`);
    }
}

export default new userAPI();