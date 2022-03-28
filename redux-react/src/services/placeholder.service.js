import httpCommon from "../http-common";

class PlaceholderDataService {

    getAll() {
        return httpCommon.get('/posts')
    }

    get(id) {
        return httpCommon.get(`/posts/${id}`)
    }
}

export default new PlaceholderDataService()