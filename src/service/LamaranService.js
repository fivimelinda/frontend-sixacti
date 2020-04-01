import axios from "axios";

const URI = 'http://localhost:8081/api';

class LamaranService {

    addLamaran(idLowongan, lamaran){
        return axios.post(URI + "/addLamaran/" + idLowongan, lamaran);
    }
}

export default new LamaranService();