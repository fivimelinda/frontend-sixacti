import axios from "axios";

const URI = 'http://localhost:5000/api';

class CutiService {

    getCutiActive(idKaryawan){
        return axios.get( URI + "/cuti/diajukan/get?karyawanId=" + idKaryawan)
    }
    getListKategori(){
        return axios.get(URI + "/kategoriCuti/get")
    }
    createCuti(form){
        return axios.post(URI + '/cuti/ajukan', form)
    }
    deleteCuti(idCuti){
        return axios.delete(URI + '/cuti/hapus?cutiId=' + idCuti)
    }
    updateCuti(idCuti, form){
        return axios.put(URI + "/cuti/update?idCuti=" + idCuti, form)
    }

}

export default new CutiService();