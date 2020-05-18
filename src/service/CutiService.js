import axios from "axios";
import authHeader from './AuthHeader';

const URI = 'http://localhost:8081/api';

class CutiService {

    getCutiActive(id){
        return axios.get( URI + "/cuti/diajukan/get?id=" + id, { headers:authHeader() })
    }
    getListKategori(){
        return axios.get(URI + "/kategoriCuti/get", { headers:authHeader() })
    }
    createCuti(form){
        return axios.post(URI + '/cuti/ajukan', form, { headers:authHeader() })
    }
    deleteCuti(idCuti){
        return axios.delete(URI + '/cuti/hapus?cutiId=' + idCuti, { headers:authHeader() })
    }
    updateCuti(idCuti, form){
        return axios.put(URI + "/cuti/update?idCuti=" + idCuti, form, { headers:authHeader() })
    }
    getUnreviewedCuti(deptmgrId){
        return axios.get(URI + '/listCuti/reviewed?deptmgrId=' + deptmgrId, { headers:authHeader() })
    }
    getUnreviewedCutiFirst(reviewerId){
        return axios.get(URI + '/listCuti/unreviewed?reviewerId=' + reviewerId, { headers:authHeader() })
    }
    getHistoryCuti(karyawanId){
        return axios.get(URI + '/cuti/riwayat?karyawanId=' +karyawanId, { headers:authHeader() })
    }
    approveCuti(cutiId){
        return axios.put(URI + '/cuti/approve?cutiId=' + cutiId, { headers:authHeader() })
    }
    rejectCuti(cutiId){
        return axios.put(URI + '/cuti/reject?cutiId=' + cutiId, { headers:authHeader() })
    }
    getCutiById(cutiId){
        return axios.get(URI + '/cuti/get?cutiId=' + cutiId, { headers:authHeader() })
    }
    getNamaKaryawan(karyawanId){
        return axios.get(URI + '/karyawan/getNama?karyawanId=' + karyawanId, { headers:authHeader() })
    }
    getSisaCuti(karyawanId){
        return axios.get(URI + '/get/sisaCuti?karyawanId=' + karyawanId, { headers:authHeader() })
    }
}

export default new CutiService();