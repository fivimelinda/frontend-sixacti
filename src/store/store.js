import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true, // process.env.NODE_ENV !== 'production',
    getters:{},
    modules: {},
    state: {
        dummy:[
            {
                "idPelamar":1,
                "nama":"Ahmad Supardi",
                "no_ktp":"123456789012345",
                "tanggal_lahir": "18-07-1995",
                "tempat_lahir" : "Yogyakarta",
                "alamat" : "jl. Suparman No. 9, Buduwan",
                "no_hp":"+62 872 7356 8162",
                "status":"Lolos seleksi tahap 1"
            },
            {
                "idPelamar":2,
                "nama":"Suparjo",
                "no_ktp":"8766662534890123",
                "tanggal_lahir": "12-12-1997",
                "tempat_lahir" : "Depok",
                "alamat" : "jl. Siliwangi No. 20, Panji",
                "no_hp":"+62 872 8752 1111",
                "status":"Lolos seleksi tahap 1"
            },
            {
                "idPelamar":3,
                "nama":"Sulasmi",
                "no_ktp":"9000123746263889",
                "tanggal_lahir": "10-10-1992",
                "tempat_lahir" : "Bogor",
                "alamat" : "jl. Ahmad Yani No. 9, Kotakan",
                "no_hp":"+62 872 7899 8900",
                "status":"Lolos seleksi tahap 1"
            },
            {
                "idPelamar":4,
                "nama":"Sutrisna",
                "no_ktp":"638929999273667",
                "tanggal_lahir": "11-03-1990",
                "tempat_lahir" : "Sleman",
                "alamat" : "jl. Imam Bonjol No. 10, Situbondo",
                "no_hp":"+62 872 8765 1122",
                "status":"Lolos seleksi tahap 1"
            },
            {
                "idPelamar":5,
                "nama":"Ahmad Matawi",
                "no_ktp":"8738297673740001",
                "tanggal_lahir": "20-05-1995",
                "tempat_lahir" : "Yogyakarta",
                "alamat" : "jl. Raden Patah No. 15, Kota Baru",
                "no_hp":"+62 872 1234 8787",
                "status":"Lolos seleksi tahap 1"
            },
            {
                "idPelamar":6,
                "nama":"Supratman",
                "no_ktp":"123456789012345",
                "tanggal_lahir": "18-07-1995",
                "tempat_lahir" : "Bau Bau",
                "alamat" : "jl. Bromo No. 36, Probolingo",
                "no_hp":"+62 872 1345 9877",
                "status":"Lolos seleksi tahap 1"
            },
            {
                "idPelamar":7,
                "nama":"Dadang Badang",
                "no_ktp":"7382946726598890",
                "tanggal_lahir": "20-08-1999",
                "tempat_lahir" : "Jakarta",
                "alamat" : "jl. WR. Supratman No. 12, Balewan",
                "no_hp":"+62 872 5555 6578",
                "status":"Lolos seleksi tahap 1"
            },
        ],
        data:[], 
    },
    mutations: {
    },
  })

export default store