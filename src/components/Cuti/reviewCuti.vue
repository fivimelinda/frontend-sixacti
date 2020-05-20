<template>
    <v-container>
        <b-card>
            <b-card-text>
        
                <b-table-simple hover @row-clicked="rowClickedHandle" caption-top responsive outlined>
                    <caption class="caption pl-5"><div style="font-size:16px; font-family:'archivo' ">Daftar Pengajuan Cuti untuk Ditinjau</div></caption>
                    <b-thead small class="header-table text-center">
                        <b-tr style="border:none">
                            <b-th>No</b-th>
                            <b-th>Nama</b-th>
                            <b-th>Cuti Mulai</b-th>
                            <b-th>Cuti Sampai</b-th>
                            <b-th>Kategori Cuti</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody class="tbody text-center">
                        <b-tr v-for="(cuti,index) in listCuti" 
                        :key="index" 
                        class="btr"
                        @click="rowClickedHandle(cuti)">
                            <b-td>{{index +1}}</b-td>
                            <b-td>{{cuti.karyawan.user.nama}}</b-td>
                            <b-td>{{cuti.tanggalMulai | formatDateReq}}</b-td>
                            <b-td>{{cuti.tanggalSampai | formatDateReq}}</b-td>
                            <b-td>{{cuti.kategori.namaKategori}}</b-td>
                            
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
        <b-modal size="lg" ref="error-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        {{errormessage}}
                    </div>
                    <div class="col-sm">
                        <!-- <v-img
                                :src="require('../assets/success.png')"></v-img> -->
                        <!-- <img src = "'src/assets/success.png'"> -->
                        <v-img class="gagal"
            :src="require('@/assets/fail.png')"
            ></v-img>
                    </div>
                </div>
            </div>
            
        </b-modal>
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
            errormessage:''      
        }

    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        reviewCuti() {
            if( this.currentUser.role[0] === "ROLE_DEPARTMENTMANAGER"){
                CutiService.getUnreviewedCuti(this.currentUser.user.nik).then(response => {
                this.listCuti = response.data;
                }).catch((err) => {
                    this.errormessage = err.message
                    this.errorModal()
                })
            } else {
                CutiService.getUnreviewedCutiFirst(this.currentUser.user.nik).then(response => {
                this.listCuti = response.data;
                }).catch((err) => {
                    this.errormessage = err.message
                    this.errorModal()
                })
            }
            
        },
        rowClickedHandle(cuti){
            this.$router.push('/detailCuti/'+cuti.id);
        }

    },
    created(){
        if (this.loggedIn) {
            if (this.currentUser.role[0] === "ROLE_DEPARTMENTMANAGER" ||
            this.currentUser.role[0] === "ROLE_SECTIONMANAGER" ||
            this.currentUser.role[0] === "ROLE_ASSISTANTMANAGER"){
                if(this.currentUser.user === null){
                    this.$router.push('/profil')
                } else{
                    this.reviewCuti();
                }
            } else{
                this.$router.push('/403')
            }
        } else{
            this.$router.push('/auth/login');
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

</style>