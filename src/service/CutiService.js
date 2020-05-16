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
    getUnreviewedCuti(reviewerId){
        return axios.get(URI + '/listCuti/unreviewed?reviewerId=' + reviewerId)
    }
    getHistoryCuti(karyawanId){
        return axios.get(URI + '/cuti/riwayat?karyawanId=' +karyawanId)
    }
    approveCuti(cutiId){
        return axios.put(URI + '/cuti/approve?cutiId=' + cutiId)
    }
    rejectCuti(cutiId){
        return axios.put(URI + '/cuti/reject?cutiId=' + cutiId)
    }
    getCutiById(cutiId){
        return axios.get(URI + '/cuti/get?cutiId=' + cutiId)
    }
    getNamaKaryawan(karyawanId){
        return axios.get(URI + '/karyawan/getNama?karyawanId=' + karyawanId)
    }
}

export default new CutiService();