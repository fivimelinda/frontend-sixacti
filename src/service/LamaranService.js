import axios from "axios";

const URI = 'http://localhost:8081/api';

class LamaranService {

    addLamaran(idLowongan, lamaran){
        return axios.post(URI + "/addLamaran/" + idLowongan, lamaran);
    }
    getLamaranById(id){
        return axios.get(URI + "/detailLamaran/" + id) ;
    }
    setStatus(id, lamaran){
        return axios.put(URI + "/setStatus/" + id, lamaran);
    }

}

export default new LamaranService();