import axios from "axios";

const URI = 'http://localhost:8081/api/download';

class BerkasLamaran {

    downloadResume(fileName){
        return axios.get(URI + "/resume/" + fileName);
    }

    downloadBPJSKes(fileName){
        return axios.get(URI + "/bpjsKes/" + fileName);
    }

    downloadBPJSKet(fileName){
        return axios.get(URI + "/bpjsKet/" + fileName);
    }

    downloadKis(fileName){
        return axios.get(URI + "/kis/" + fileName);
    }

    downloadKK(fileName){
        return axios.get(URI + "/kk/" + fileName);
    }

    downloadKTP(fileName){
        return axios.get(URI + "/ktp/" + fileName);
    }

    downloadNPWP(fileName){
        return axios.get(URI + "/npwp/" + fileName);
    }
    

}

export default new BerkasLamaran();