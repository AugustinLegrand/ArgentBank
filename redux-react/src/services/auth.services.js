import httpCommon from "../http-common"

class AuthDataService {

    login(data) {
        return httpCommon.post('/login', data)
    }

    getProfile() {
        return httpCommon.post('/profile')
    }

    update(data) {
        return httpCommon.put('/profile', data)
    }

}

export default new AuthDataService()