import axios from "axios";
import authHeader from './AuthHeader';

const URI = 'https://sixacti-api.herokuapp.com/request';

class RequestLowonganService {
    getAllRequest() {
        return axios.get(URI+"/all", { headers:authHeader() });
    }
    getReqLokerById(idReqLowongan){
        return axios.get(URI+"/get/" + idReqLowongan, { headers:authHeader() });
    }
    RejectRequest(idReqLowongan){
        return axios.put(URI + "/tolakRequest/" +idReqLowongan, { headers:authHeader() })
    }
}

export default new RequestLowonganService();