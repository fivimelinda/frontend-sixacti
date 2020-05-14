import axios from "axios";

const URI = 'http://localhost:8081/api';

class AtributService {

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