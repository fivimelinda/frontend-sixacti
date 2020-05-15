import axios from "axios";

const URI = 'http://localhost:8081/api';

class AtributService{

    updateStatus(id_atribut, atribut){
        return axios.put(`${URI}/ubahStatusAtribut/${id_atribut}`, atribut);
    }
}

export default new AtributService();