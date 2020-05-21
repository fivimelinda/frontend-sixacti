<template>
<div id="myCard">
    <v-card
        max-width="344"
        color="#FFE3E3"
        id="main">
        <v-card-title  dense class="white--text" id="title">Cuti yang diajukan</v-card-title>
        <v-card-text class="black--text font-weight-bold" id="sub-title">Detail Cuti</v-card-text>
        <v-divider light id="line"></v-divider>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Cuti Mulai</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.tanggalMulai}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Cuti Sampai</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.tanggalSampai}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Kategori Cuti</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.namaKategori}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Tanggal Pengajuan</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.tanggalDiajukan}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Status</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{cutiData.statusCuti}}</v-card-text>
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
        <v-card flat color="#FBC4C4" class="notify">
            <div id="attention">Perhatian!</div>
            <div id="attention-detail">Pengajuan cuti hanya dapat diubah atau dibatalkan jika status masih 'Diajukan'</div>
        </v-card>
        <b-row v-if="status">
            <b-col id="my-btn-1">
                <b-button block outline id="btn-ubah" v-on:click="updateCuti">Ubah</b-button>
            </b-col>
            <b-col id="my-btn-2">
                <b-button block id="btn-batal" v-on:click="showConfirm">Batalkan</b-button>
            </b-col>
        </b-row>
    </v-card>
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
</div>
</template>
<script>
import CutiService from '../../service/CutiService'
export default {
    props: ['cutiData'],
    data(){
        return{
            status: false,
            delete: false,
            errormessage: ''
        }        
    },
    computed:{
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods:{
        showConfirm(){
                this.$bvModal.msgBoxConfirm('Anda yakin ingin membatalkan pengajuan cuti?', {
                title: 'Konfirmasi Pembatalan',
                size: 'sm',
                buttonSize: 'md',
                okVariant: 'danger',
                okTitle: 'Batalkan',
                cancelTitle: 'Tidak',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
                }).then(value => {
                    this.delete = value
                    if(this.delete){
                         CutiService.deleteCuti(this.cutiData.idCuti)
                         this.$router.go(0)
                    }
                })
                .catch((err) => {
                    this.errormessage = err.message
                    this.errorModal()
                })
        },
        updateCuti(){
            this.$router.push('/updateCuti/' + this.cutiData.idKaryawan)
        },
        checkStatus(){
            if (this.cutiData.statusCuti == "Diajukan"){
                this.status = true
            } 
        }
    },
    created(){
        this.checkStatus()
    }
}
</script>
<style scoped>
#myCard{
    margin-left: 5px;
}
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
.notify{
    margin: 15px 15px 15px 15px;
    padding: 5px 5px 5px 5px;
    font-size: 13px;
}
#attention{
    color: black;
    font-weight: bold;
}
#attention-detail{
    color: black;
}
#main{
    padding-bottom: 20px;
}
#btn-ubah{
    background-color: white;
    outline-color: black;
    outline-width: 3;
    color: black;
    font-weight: bold;
    font-size: 14px;
}
#btn-batal{
    background-color: black;
    font-weight: bold;
    font-size: 14px;
}
#my-btn-1{
    padding-left: 30px;
}
#my-btn-2{
    padding-right: 30px;
}
</style>