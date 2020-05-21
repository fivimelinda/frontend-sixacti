import axios from "axios";
import authHeader from './AuthHeader';


const URI = 'https://sixacti-api.herokuapp.com/api';

class LamaranService {

    addLamaran(idLowongan, idUser, lamaran){
        return axios.post(URI + "/addLamaran/" + idLowongan + "/" + idUser, lamaran, { headers:authHeader() });
    }
    getLamaranById(id){
        return axios.get(URI + "/detailLamaran/" + id, { headers:authHeader() }) ;
    }
    setStatus(id, lamaran){
        return axios.put(URI + "/setStatus/" + id, lamaran, { headers:authHeader() });
    }

}

export default new LamaranService();