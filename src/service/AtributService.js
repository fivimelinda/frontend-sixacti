import axios from "axios";
import authHeader from './AuthHeader'
const URI = 'https://sixacti-api.herokuapp.com/api';


class AtributService {

    updateStatus(id_atribut, atribut){
        return axios.put(`${URI}/ubahStatusAtribut/${id_atribut}`, atribut, { headers:authHeader() });
    }

    //tambah atribut
    createAtribut(idPelamar,atribut){
        return axios.post(URI + "/tambahAtribut/" + idPelamar, atribut,{ headers:authHeader() });
    }

    // 
    updateAtribut(idAtribut, atribut){
        return axios.put(URI + "/atribut/ubah/" + idAtribut, atribut,{ headers:authHeader() });
    }
}

export default new AtributService();