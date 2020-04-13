import axios from "axios";

const URI = 'http://localhost:8081/api';

class TesService {

    //TES MEDIS
    //get tes medis
    getTesMedis(idTesMedis){
        return axios.get(URI + "/tes/medis/get/" + idTesMedis);
    }

    //create tes medis
    createTesMedis(tesMedis){
        return axios.post(URI + "/tes/medis", tesMedis);
    }

    //update tes medis
    updateTesMedis(idTesMedis, tesMedis){
        return axios.put(URI + "/tes/medis/update/" + idTesMedis, tesMedis)
    }

    //TES TULIS
    //get tes tulis
    getTesTulis(idTesTulis){
        return axios.get(URI + "/tes/tulis/get/" + idTesTulis);
    }

    //create tes tulis
    createTesTulis(tesTulis){
        return axios.post(URI + "/tes/tulis", tesTulis);
    }
    
    //update tes tulis
    updateTesTulis(idTesTulis, tesTulis){
        return axios.put(URI + "/tes/tulis/update/" + idTesTulis, tesTulis);
    }

    //TES WAWANCARA
    //get tes tulis
    getTesWawancara(idTesWawancara){
        return axios.get(URI + "/tes/wawancara/get/" + idTesWawancara);
    }

    //create tes tulis
    createTesWawancara(tesWawancara){
        return axios.post(URI + "/tes/wawancara", tesWawancara);
    }

    //update tes tulis
    updateTesWawancara(idTesWawancara, tesWawancara){
        return axios.put(URI + "/tes/wawancara/update/" + idTesWawancara, tesWawancara);
    }

}

export default new TesService();