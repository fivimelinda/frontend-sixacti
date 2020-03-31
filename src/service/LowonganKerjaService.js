import axios from "axios";

const URI = 'http://localhost:8081/api';

class LowonganKerjaService {
    getLokerById(idLowongan){
        return axios.get(URI + "/detailLoker/" + idLowongan) ;
    }
    
    retrieveAllLoker() {
        return axios.get(URI+"/listLoker");
    }

    deleteLoker(idLowongan){
        var link = URI + "/hapusLoker/" + idLowongan
        return axios.delete(link);
    }

    updateLoker(idLowongan, loker){
        return axios.put(`${URI}/ubahLoker/${idLowongan}`, loker);
    }

    addLoker(idReqLowongan, loker){
        return axios.post(URI + "/addLoker/" + idReqLowongan, loker);
    }
}

export default new LowonganKerjaService();