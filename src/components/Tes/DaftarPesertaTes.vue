<template>
    <v-container>
        <b-card>
            <b-card-text>
                <b-table-simple hover @row-clicked="rowClickedHandle" caption-top responsive outlined>
                    <caption class="caption pl-5"><div class="" style="font-size:16px">Daftar Pelamar</div></caption>
                    <b-thead small class="header-table text-center">
                        <b-tr style="border:none">
                            <b-th>No</b-th>
                            <b-th>Nama</b-th>
                            <b-th>NIK</b-th>
                            <b-th>Alamat</b-th>
                            <b-th>Status</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody class="tbody text-center" v-for="(data,index) in dummy" :key="index">
                        <b-tr id="index" class="btr" @click="rowClickedHandle(data)">
                            <b-td>{{index +1}}</b-td>
                            <b-td>{{data.nama}}</b-td>
                            <b-td>{{data.no_ktp}}</b-td>
                            <b-td>{{data.alamat}}</b-td>
                            <b-td>{{data.status}}</b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
                
                <b-pagination
                class="mr-3"
                v-model="currentPage"
                
                :per-page="perPage"
                aria-controls="my-table"
                align="right"
                ></b-pagination>

            </b-card-text>
        </b-card>
    </v-container>
</template>

<script>
export default {
    name:"daftar-peserta-tes",
    data(){
        return{
            currentPage:1,
            perPage:10,
            dummy:[
                {
                    "idPelamar":1,
                    "nama":"Ahmad Supardi",
                    "no_ktp":"123456789012345",
                    "tanggal_lahir": "18-07-1995",
                    "tempat_lahir" : "Yogyakarta",
                    "alamat" : "jl. Suparman No. 9, Buduwan",
                    "status":"Lolos seleksi tahap 1"
                },
                {
                    "idPelamar":2,
                    "nama":"Ahmad Supardi",
                    "no_ktp":"123456789012345",
                    "tanggal_lahir": "18-07-1995",
                    "tempat_lahir" : "Yogyakarta",
                    "alamat" : "jl. Suparman No. 9, Buduwan",
                    "status":"Lolos seleksi tahap 1"
                },
                {
                    "idPelamar":3,
                    "nama":"Ahmad Supardi",
                    "no_ktp":"123456789012345",
                    "tanggal_lahir": "18-07-1995",
                    "tempat_lahir" : "Yogyakarta",
                    "alamat" : "jl. Suparman No. 9, Buduwan",
                    "status":"Lolos seleksi tahap 1"
                },
                {
                    "idPelamar":4,
                    "nama":"Ahmad Supardi",
                    "no_ktp":"123456789012345",
                    "tanggal_lahir": "18-07-1995",
                    "tempat_lahir" : "Yogyakarta",
                    "alamat" : "jl. Suparman No. 9, Buduwan",
                    "status":"Lolos seleksi tahap 1"
                },
                {
                    "idPelamar":5,
                    "nama":"Ahmad Supardi",
                    "no_ktp":"123456789012345",
                    "tanggal_lahir": "18-07-1995",
                    "tempat_lahir" : "Yogyakarta",
                    "alamat" : "jl. Suparman No. 9, Buduwan",
                    "status":"Lolos seleksi tahap 1"
                },
                {
                    "idPelamar":6,
                    "nama":"Ahmad Supardi",
                    "no_ktp":"123456789012345",
                    "tanggal_lahir": "18-07-1995",
                    "tempat_lahir" : "Yogyakarta",
                    "alamat" : "jl. Suparman No. 9, Buduwan",
                    "status":"Lolos seleksi tahap 1"
                },
                {
                    "idPelamar":7,
                    "nama":"Ahmad Supardi",
                    "no_ktp":"123456789012345",
                    "tanggal_lahir": "18-07-1995",
                    "tempat_lahir" : "Yogyakarta",
                    "alamat" : "jl. Suparman No. 9, Buduwan",
                    "status":"Lolos seleksi tahap 1"
                },
            ]
        }
    },
    methods:{
        rowClickedHandle(data){
            this.$router.push('/tes/'+data.idPelamar);
        }
    }
}
</script>

<style lang="scss" scoped>
.header-table{
    font-size: 14px;
    background-color: white;
    color: rgb(165, 163, 164);
}

.caption{
    background-color: #C53751;
    color: white;
    border:none !important;
}

.tbody{
    border: none;
    font-size: 14px;
}

.btr:hover{
    border-left: 2px solid #C53751;
}

</style>