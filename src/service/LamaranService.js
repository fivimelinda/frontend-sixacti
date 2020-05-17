import axios from "axios";
import authHeader from './AuthHeader';

const URI = 'http://localhost:8081/api';

class LamaranService {

    addLamaran(idLowongan, lamaran){
        return axios.post(URI + "/addLamaran/" + idLowongan, lamaran, { headers:authHeader() });
    }
    getLamaranById(id){
        return axios.get(URI + "/detailLamaran/" + id, { headers:authHeader() }) ;
    }
    setStatus(id, lamaran){
        return axios.put(URI + "/setStatus/" + id, lamaran, { headers:authHeader() });
    }

}

export default new LamaranService();