<template>
<v-container>
<div id="myCard">
    <b-row id="myTitle"><h3>Detail Pengajuan Cuti</h3></b-row>
    <v-card
        max-width="450"
        color="#FFE3E3"
        id="main">
        <v-card-title  dense class="white--text" id="title">Detail Pengajuan Cuti untuk Ditinjau</v-card-title>
        <v-card-text class="black--text font-weight-bold" id="sub-title">Detail Cuti</v-card-text>
        <v-divider light id="line"></v-divider>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Nama</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.karyawan.user.nama}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Cuti Mulai</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.tanggalMulai | formatDateReq}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Cuti Sampai</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.tanggalSampai | formatDateReq}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Kategori Cuti</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.kategori.namaKategori}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Tanggal Pengajuan</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.tanggalDiajukan | formatDateReq}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Keterangan Cuti</v-card-text>
            </v-flex>
        </v-layout> 
        <v-layout row class="detail">
            <v-card-text class="data-sp">{{cutiData.keterangan}}</v-card-text>
        </v-layout>    
        <v-layout row class="div-link">
            <a v-on:click="lihatRiwayat" id="link">Lihat Riwayat Cuti</a>
        </v-layout>
        <b-row>
            <b-col id="my-btn-1">
                <b-button block id="btn-setuju" v-on:click="showConfirmApprove">Setujui</b-button>
            </b-col>
            <b-col id="my-btn-2">
                <b-button block id="btn-tolak" v-on:click="showConfirmReject">Tolak</b-button>
            </b-col>
        </b-row>
    </v-card>
</div>
</v-container>
</template>
<script>
import CutiService from '../../service/CutiService'
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
            cutiData: [],
        }        
    },
    computed: {
        cutiId() {
            return this.$route.params.cutiId;
        },
    },
    methods:{
        getDetailCuti(){
            CutiService.getCutiById(this.cutiId).then(response =>{
                this.cutiData = response.data;
            })
        },
        lihatRiwayat(){
            this.$router.push('/lihatRiwayatCuti/'+ this.cutiData.karyawan.id);
        },
        showConfirmApprove(){
                this.$bvModal.msgBoxConfirm('Anda yakin ingin menyetujui pengajuan cuti?', {
                title: 'Konfirmasi Persetujuan Cuti',
                size: 'sm',
                buttonSize: 'md',
                okVariant: 'danger',
                okTitle: 'Setujui',
                cancelTitle: 'Batal',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
                }).then(value => {
                    this.ok = value
                    if(this.ok){
                         CutiService.approveCuti(this.cutiId).then(res =>{
                             if(res.status == 200){
                                 this.$router.push('/reviewCuti')
                             }
                         })
                    }
                })
        },
        showConfirmReject(){
                this.$bvModal.msgBoxConfirm('Anda yakin ingin memolak pengajuan cuti?', {
                title: 'Konfirmasi Penolakan Cuti',
                size: 'sm',
                buttonSize: 'md',
                okVariant: 'danger',
                okTitle: 'Tolak',
                cancelTitle: 'Batal',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
                }).then(value => {
                    this.ok = value
                    if(this.ok){
                         CutiService.rejectCuti(this.cutiId).then(res =>{
                             if(res.status == 200){
                                 this.$router.push('/reviewCuti')
                             }
                         })
                    }
                })
        },
    },
    created(){
        this.getDetailCuti()
    }
}
</script>
<style scoped>

#title{
    font-family: 'oswald';
    background-color: #C53751;
    font-size: 18px;
    padding-top: 0;
    padding-bottom: 0;
}
#sub-title{
    font-family: 'archivo';
    margin-top: 15px;
    padding-bottom: 0;
}
#line{
    border-color: black;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
}
.v-card__text{
    color: #898989;
    padding-bottom: 0 ;
    padding-top: 10px;
}
.data{
    text-align:end;
    color: black;
    font-weight: bold;
    font-size: 14px !important;
}
.data-sp{
    color: black;
    font-weight: bold;
}
.detail{
    padding-left: 15px;
    padding-right: 15px;
}
#main{
    padding-bottom: 20px;
    margin-top: 20px;
    margin-left: 0px;
}
#btn-setuju{
    background-color: #C53751;
    color: white;
    font-weight: bold;
    font-size: 14px;
    border: none;
}
#btn-tolak{
    background-color: black;
    font-weight: bold;
    font-size: 14px;
    border: none;
}
#my-btn-1{
    padding-left: 30px;
}
#my-btn-2{
    padding-right: 30px;
}
#link{
    margin-top: 10px;
    margin-bottom: 15px;
    color: #7D0022;
}
.div-link{
    justify-content: center;
    font-family: 'archivo';
}
#myTitle{
    font-family: 'oswald';
    color: black;
    text-align: left;
    margin-bottom: 15px;
    margin-left: 5px;
}
</style>