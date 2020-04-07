import axios from "axios";

const URI = 'http://localhost:8081/request';

class RequestLowonganService {
    getAllRequest() {
        return axios.get(URI+"/all");
    }
    getReqLokerById(idReqLowongan){
        return axios.get(URI+"/get/" + idReqLowongan);
    }
}

export default new RequestLowonganService();