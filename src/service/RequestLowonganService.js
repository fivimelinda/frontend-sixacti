import axios from "axios";
import authHeader from './AuthHeader';

const URI = 'http://localhost:8081/request';

class RequestLowonganService {
    getAllRequest() {
        return axios.get(URI+"/all", { headers:authHeader() });
    }
    getReqLokerById(idReqLowongan){
        return axios.get(URI+"/get/" + idReqLowongan, { headers:authHeader() });
    }
}

export default new RequestLowonganService();