import axios from "axios";



class LowonganKerjaService {
    retrieveAllLoker() {
        return axios.get('http://localhost:8081/api/listLoker');
    }
}

export default new LowonganKerjaService();