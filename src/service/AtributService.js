import axios from "axios";

const URI = 'http://localhost:8081/api';

class AtributService{

    //tambah atribut
    createAtribut(idKaryawan,atribut){
        return axios.post(URI + "/tambahAtribut/" + idKaryawan, atribut);
    }
}