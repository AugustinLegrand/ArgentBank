import httpCommon from "../http-common"

class AuthDataService {

    login(data) {
        return httpCommon.post('/login', data)
    }

    update(data, jwt) {
        return httpCommon.put('/profile', data)
    }

}

export default new AuthDataService()