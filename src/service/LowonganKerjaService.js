import axios from "axios";

const URI = 'http://localhost:8081/api';

class LowonganKerjaService {
    getLokerById(idLowongan){
        return axios.get(URI + "/detailLoker/" + idLowongan) ;
    }
    
    retrieveAllLoker() {
        return axios.get(URI+"/listLoker");
    }

    // deleteLoker(idLowongan, loker){
    //     return axios.put(`${URI}/hapusLoker/${idLowongan}`, loker);
    // }

    deleteLoker(idLowongan){
        return axios.delete(`${URI}/hapusLoker/${idLowongan}`);
    }

    updateLoker(idLowongan, loker){
        return axios.put(`${URI}/ubahLoker/${idLowongan}`, loker);
    }

    addLoker(idReqLowongan, loker){
        return axios.post(URI + "/addLoker/" + idReqLowongan, loker);
    }
}

export default new LowonganKerjaService();