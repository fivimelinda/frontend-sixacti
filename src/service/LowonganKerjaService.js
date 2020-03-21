import axios from "axios";



class LowonganKerjaService {
    retrieveAllLoker() {
        return axios.get('http://localhost:8081/api/listLoker');
    }

    deleteLoker(idLowongan){
        var link = "http://localhost:8081/api/hapusLoker/" + idLowongan
        return axios.delete(link);
    }
}

export default new LowonganKerjaService();