<template>
    <v-container>
        <b-row id="myTitle">
                <h3> Riwayat Cuti Karyawan : {{namaKaryawan}}</h3>
        </b-row>
        <b-card>
            <b-card-text>
                <b-table-simple hover @row-clicked="rowClickedHandle" caption-top responsive outlined>
                    <caption class="caption pl-5"><div style="font-size:16px; font-family:'archivo' ">Riwayat Pengajuan Cuti</div></caption>
                    <b-thead small class="header-table text-center">
                        <b-tr style="border:none">
                            <b-th>No</b-th>
                            <b-th>Cuti Mulai</b-th>
                            <b-th>Cuti Sampai</b-th>
                            <b-th>Kategori Cuti</b-th>
                            <b-th>Status</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody class="tbody text-center">
                        <b-tr v-for="(cuti,index) in listCuti" 
                        :key="index" 
                        class="btr"
                        @click="rowClickedHandle(cuti)">
                            <b-td>{{index +1}}</b-td>
                            <b-td>{{cuti.tanggalMulai | formatDateReq}}</b-td>
                            <b-td>{{cuti.tanggalSampai | formatDateReq}}</b-td>
                            <b-td>{{cuti.kategori.namaKategori}}</b-td>
                            <b-td>{{cuti.status}}</b-td>
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
        <a @click="$router.go(-1)" id="link">Kembali ke halaman detail cuti</a>
    </v-container>
</template>

<script>
import CutiService from '../../service/CutiService';
import Vue from 'vue'
import moment from 'moment'
Vue.filter('formatDateReq', function(value){
  if(value){
    return moment(String(value)).format("DD MMMM YYYY")
  }
});
export default {
    data(){
        return{
            currentPage:1,
            perPage:10,
            listCuti : [],
            namaKaryawan:''         
        }
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        },
        karyawanId() {
            return this.$route.params.karyawanId;
        }
    },
    methods: {
        historyCuti() {
            CutiService.getNamaKaryawan(this.karyawanId).then(response =>{
                this.namaKaryawan = response.data;
            })
            CutiService.getHistoryCuti(this.karyawanId).then(response => {
                this.listCuti = response.data;
            });
        },

    },
    created(){
        if (this.loggedIn) {
            this.historyCuti();
        }
    }
    
};
</script>

<style lang="scss" scoped>
.header-table{
    font-family: 'archivo';
    font-size: 14px;
    background-color: white;
    color: rgb(165, 163, 164);
}

.caption{
    background-color: #C53751;
    color: white;
    border:none !important;
    font-weight: 400 !important;
}
.v-application{
    font-family: 'archivo' !important;
}
.tbody{
    border: none;
    font-size: 14px;
    font-family: 'archivo';
    font-weight: 300;
}

.btr:hover{
    border-left: 2px solid #C53751;
}
#link{
    color: #7D0022;
}
#myTitle{
    font-family: 'oswald';
    color: black;
    text-align: left;
    margin-bottom: 15px;
    margin-left: 5px;
}

</style>