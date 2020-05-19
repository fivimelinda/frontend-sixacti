<template>

<div class="container">
    <br>
    <ul class="nav">
        <li><a class="brearcrumb-a" href="/">Home</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" href="/listLoker">Daftar Lowongan Pekerjaan</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" :href="'/detailLoker/'+id">Detail {{judulLoker}}</a></li>              
    </ul>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-8">
            <h2 id="judul">
                {{judulLoker}} 
                <a v-if="currentUser.role == 'ROLE_ADMIN'" id="ubahBtn" v-on:click="updateLokerClicked()">
                <edit-icon size="14"></edit-icon> Ubah</a>
            </h2>
        </div>

        <!-- <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="d-flex justify-content-center">
                <button class="btn btn-lg btn-danger" id="viewPelamar"><span id="daftarPelamar">Daftar Pelamar</span></button> 
            </div>
            
        </div> -->
        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="d-flex justify-content-center">
                <button v-if="currentUser.role == 'ROLE_ADMIN'" class="btn btn-lg btn-danger" v-on:click="viewPelamar()" id="viewPelamar"><span id="daftarPelamar">Lihat Pelamar</span></button>
                <button v-if="currentUser.role == 'ROLE_PELAMAR'" class="btn btn-lg btn-danger" v-on:click="lamaranClicked()" id="viewPelamar"><span id="daftarPelamar">Buat Lamaran</span></button> 
            </div>
            
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md">
            <h4 id="deptSect">Departement : {{departement}} - Section : {{section}}  </h4>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-8">
            <h4 id="deptSect">
               <calendar-icon class="ml-3 mr-2"></calendar-icon>{{tanggalMulai}} - {{tanggalBerakhir}}
            </h4>
        </div>
    </div>

    <hr>

    <div id="deskripsi" class="container-fluid">
        <div class="text-break">{{deskripsi}}</div>
    </div>



</div>
    
</template>

<style scoped>

#judul{
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 39px;

    color: #C53751;
}

#ubahBtn{
    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;

    color: #A6A6A6;
}

 div.parentElement{text-align: center;}
.btn-danger{
    background-color: #C53751;
    min-height: 48px;
    min-width: 200px;

    display: inline-block;

    font-family: Archivo;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;

    text-align: center;

    color: #FFFFFF;
}

#deskripsi{
    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;

    color: rgb(31, 29, 29);    
}

#deptSect{
    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;

    /* identical to box height */

    color: #000000;
}

</style>

<script>
import moment from 'moment';
import { EditIcon,CalendarIcon } from 'vue-feather-icons'
import LowonganKerjaService from '../../service/LowonganKerjaService';

export default {
    components: {
        EditIcon,
        CalendarIcon
    },
    name: "detailLoker",
    data(){
        return{
            id:"",
            judulLoker:"",
            departement: "",
            section: "",
            tanggalMulai: "",
            tanggalBerakhir: "",
            deskripsi: "",
            errors: [],
            
        };
        
    },
    computed: {
        idLowongan() {
            return this.$route.params.idLowongan;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        refreshLokerDetails() {
            LowonganKerjaService.getLokerById(this.idLowongan).then(res => {
                this.id = res.data.idLowongan
                this.judulLoker = res.data.judulLoker;
                this.departement = res.data.departement;
                this.section = res.data.section;
                this.tanggalMulai = moment(res.data.tanggalMulai).format("MMMM YYYY");
                this.tanggalBerakhir = moment(res.data.tanggalBerakhir).format("MMMM YYYY");
                this.deskripsi = res.data.deskripsi;
           
            });
        },
        updateLokerClicked(){
            var idLowongan = this.idLowongan;
            var link = "/ubahLoker/" + idLowongan;
            this.$router.push(link);
        },

        lamaranClicked(){
            var idLowongan = this.idLowongan;
            var apply = "/LamaranKerja/" + idLowongan;
            this.$router.push(apply);
        },
        viewPelamar(){
            var idLowongan = this.idLowongan;
            var apply = "/listPelamar/" + idLowongan;
            this.$router.push(apply);
        }
    },
    created(){
        this.refreshLokerDetails();
    }
    
};
</script>