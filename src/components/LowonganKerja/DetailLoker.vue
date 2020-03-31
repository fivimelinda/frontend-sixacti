<template>

<div class="container mt-10">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-8">
            <h1 id="judul">
                {{judulLoker}} 
                <a id="ubahBtn" v-on:click="updateLokerClicked()">
                <edit-icon size="14"></edit-icon> Ubah</a>
            </h1>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="d-flex justify-content-center">
                <button class="btn btn-lg btn-danger" id="viewPelamar"><span id="daftarPelamar">Daftar Pelamar</span></button> 
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
        {{deskripsi}}
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
            errors: []
        };
        
    },
    computed: {
        idLowongan() {
            return this.$route.params.idLowongan;
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
    },
    created(){
        this.refreshLokerDetails();
    }
    
};
</script>