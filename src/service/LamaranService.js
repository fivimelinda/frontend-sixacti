import axios from "axios";

const URI = 'http://localhost:8081/api';

class LamaranService {

    addLamaran(lamaran){
        return axios.post(URI + "/addLamaran", lamaran);
    }
}

export default new LamaranService();