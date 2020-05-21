import axios from "axios";
import authHeader from './AuthHeader';

const URI = 'http://sixacti-api.herokuapp.com/api';

class TesService {

    //TES MEDIS
    //get tes medis
    getTesMedis(idTesMedis){
        return axios.get(URI + "/tes/medis/get/" + idTesMedis, { headers:authHeader() });
    }

    //create tes medis
    createTesMedis(idPelamar,tesMedis){
        return axios.post(URI + "/tes/medis/" + idPelamar, tesMedis, { headers:authHeader() });
    }

    //update tes medis
    updateTesMedis(idTesMedis, tesMedis){
        return axios.put(URI + "/tes/medis/update/" + idTesMedis, tesMedis, { headers:authHeader() })
    }

    //TES TULIS
    //get tes tulis
    getTesTulis(idTesTulis){
        return axios.get(URI + "/tes/tulis/get/" + idTesTulis, { headers:authHeader() });
    }

    //create tes tulis
    createTesTulis(idPelamar,tesTulis){
        return axios.post(URI + "/tes/tulis/" + idPelamar, tesTulis), { headers:authHeader() };
    }
    
    //update tes tulis
    updateTesTulis(idTesTulis, tesTulis){
        return axios.put(URI + "/tes/tulis/update/" + idTesTulis, tesTulis, { headers:authHeader() });
    }

    //TES WAWANCARA
    //get tes tulis
    getTesWawancara(idTesWawancara){
        return axios.get(URI + "/tes/wawancara/get/" + idTesWawancara), { headers:authHeader() };
    }

    //create tes tulis
    createTesWawancara(idPelamar,tesWawancara){
        return axios.post(URI + "/tes/wawancara/" +idPelamar, tesWawancara, { headers:authHeader() });
    }

    //update tes tulis
    updateTesWawancara(idTesWawancara, tesWawancara){
        return axios.put(URI + "/tes/wawancara/update/" + idTesWawancara, tesWawancara, { headers:authHeader() });
    }

}

export default new TesService();