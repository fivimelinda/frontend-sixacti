import axios from "axios";

const URI = 'http://localhost:8081/api';


class AtributService {

    updateStatus(id_atribut, atribut){
        return axios.put(`${URI}/ubahStatusAtribut/${id_atribut}`, atribut);
    }

    //tambah atribut
    createAtribut(idPelamar,atribut){
        return axios.post(URI + "/tambahAtribut/" + idPelamar, atribut);
    }

    // 
    updateAtribut(idAtribut, atribut){
        return axios.put(URI + "/atribut/ubah/" + idAtribut, atribut);
    }
}

export default new AtributService();