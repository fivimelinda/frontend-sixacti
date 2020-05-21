import axios from "axios";
import authHeader from './AuthHeader';

const URI = 'https://sixacti-api.herokuapp.com/api';

class LowonganKerjaService {
    getLokerById(idLowongan){
        return axios.get(URI + "/detailLoker/" + idLowongan, { headers:authHeader() }) ;
    }
    
    retrieveAllLoker() {
        return axios.get(URI+"/listLoker", { headers:authHeader() });
    }

    // deleteLoker(idLowongan, loker){
    //     return axios.put(`${URI}/hapusLoker/${idLowongan}`, loker);
    // }

    deleteLoker(idLowongan){
        return axios.delete(`${URI}/hapusLoker/${idLowongan}`, { headers:authHeader() });
    }

    updateLoker(idLowongan, loker){
        return axios.put(`${URI}/ubahLoker/${idLowongan}`, loker, { headers:authHeader() });
    }

    addLoker(idReqLowongan, loker){
        return axios.post(URI + "/addLoker/" + idReqLowongan, loker, { headers:authHeader() });
    }
}

export default new LowonganKerjaService();