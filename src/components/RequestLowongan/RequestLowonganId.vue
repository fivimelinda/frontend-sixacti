<template>
    <div class="RequestLowongan">
        <br>
        <ul class="nav">
            <li><a class="brearcrumb-a" href="/">Home</a></li>
            <li><p class="breadcrumb-a">></p></li>
            <li><a class="brearcrumb-a" href="/RequestLowongan">Request Lowongan Pekerjaan</a></li>
            <li><p class="breadcrumb-a">></p></li>
            <li><p class="brearcrumb-a">Detail</p></li>
            
        </ul>
        <br>
        <h1>Detail Employment Requisition</h1>
        <br>

        <v-card
        color="#FFE3E3"
        id="main"
        max-width="600">
        <v-card-title  dense class="white--text" id="title">Request lowongan yang diajukam</v-card-title>
        <v-card-text class="black--text font-weight-bold" id="sub-title">Detail request lowongan</v-card-text>
        <v-divider light id="line"></v-divider>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Judul lowongan pekerjaan</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.jobTitle}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Departemen</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.departement}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Section</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.section}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Supervisor</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.supervisor}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Tanggal diinginkan</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.dateWanted}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Shift</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text v-if= "req.shift == true" class="data">Ya</v-card-text>
                <v-card-text v-if= "req.shift == false" class="data">Tidak</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Periode kontrak</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.periodeKontrak}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Addition</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text v-if= "req.addition == true" class="data">Ya</v-card-text>
                <v-card-text v-if= "req.addition == false" class="data">Tidak</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Jumlah</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.jumlah}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Gaji</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.gaji}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Nama Replacement</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.namaReplacement}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Status</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.status}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-card flat color="#FBC4C4" class="notify">
            <div id="attention">Perhatian!</div>
            <div id="attention-detail">Request lowongan pekerjaan hanya dapat dibatalkan jika status masih 'pending'</div>
        </v-card>
        <div v-if="req.status == 'pending'" class="button-wrapper">
            <b-button v-b-modal.modal-1 class="btn btn-danger">Hapus</b-button>
        </div>
    </v-card>



        <br>
        <b-modal id="modal-1" title="Konfirmasi" v-bind:hide-footer="true">
            <div class="conf-main"><b>Employment Requisition Akan Dihapus</b></div>
            <div class="conf-sub">Apakah anda yakin?</div>
            <br>
            <br>
            <!-- <div class="flex">
                <button type="button" v-on:click="deleteData" class="btn btn-danger" id="deleteButton">Hapus</button>
                <b-button class="mt-3" id="close-me" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
            </div> -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6" >
                        <button type="button" v-on:click="deleteData" class="btn btn-danger" id="deleteButton">Hapus</button>
                    </div>
                    <div class="col-6">
                        <b-button class="btn btn-light" variant="outline-dark" style="float: left;" id="close-me" block @click="$bvModal.hide('modal-1')">Tidak</b-button>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal size="lg" ref="my-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Employment requisition berhasil dihapus
                    </div>
                    <div class="col-sm">
                        <!-- <v-img
                                :src="require('../assets/success.png')"></v-img> -->
                        <!-- <img src = "'src/assets/success.png'"> -->
                        <v-img class="centang"
            :src="require('@/assets/success.png')"
            ></v-img>
                    </div>
                </div>
            </div>
            
        </b-modal>


        <b-modal size="lg" ref="error-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Employment requisition gagal dihapus
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
import axios from 'axios'

export default {
    name:'Test',
    props: {
        msg: String
    },
    data(){
        return {
            judul: '',
            departemen: '',
            section: '',
            supervisor: '',
            tanggal: '',
            shift:'',
            periode: '',
            addition: '',
            jumlah: '',
            gaji: '',
            replacement: '',
            req: '',
            deleteStatus: ''
        }
    },
    mounted() {
        this.load()
    },
    methods: {
         load() {
            axios.get('http://localhost:8081/request/get/'+this.$route.params.id).then(res => {
                this.req = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        deleteData() {
            axios.delete('http://localhost:8081/request/delete/'+this.$route.params.id).then(ress => {
                this.deleteStatus = ress.data
                
                if(ress.status == 200){
                    this.openModal()
                }
                else{
                    this.errorModal()
                }
            }).catch((err) => {
                console.log(err);
                this.errorModal()
            })
        },
        openModal() {
            this.$refs['my-modal'].show();
            window.setTimeout(function() {
                window.location.href = "/RequestLowongan";
            }, 2000);
        },
        errorModal(){
            this.$refs['error-modal'].show();
        }
    }
}

</script>

<style>

.wrapper {
    text-align: center;
}

.button-wrapper{
    text-align: center;
}

/* .modal-button {
    position: absolute;
    top: 50%;
} */

.centang{
    float: right;
    margin-right: 30px;
}

.gagal{
    float: right;
    margin-right: 30px;
    width: 80px;
}

#berhasil {
    font-family: "Oswald";
    font-size: 25px;
}

#close-me{
    width: 80px;
}

.flex{
    display: flex;
    justify-content: center;
}

.conf-main{
    font-family: "Oswald";
    font-size: 20px;
}

.conf-sub{
    font-family: "Archivo";
    color: "#333333";
    font-size: 14px;
}

.modal-header{
    background-color:#F0F0F0 !important;
    font-family: "Oswald";
}

#deleteButton{
    margin-left: 10px;
    display: block;
    float: right ;
}

.content{
    font-size: 20px;
    margin-bottom: -10px;
}

.group{
    margin-left: 50px;
    margin-right: 50px;
}

hr{
    color: black;
    height: 2px;
}

.detail{
    font-family: "Archivo";
    width: auto;
}

.title{
    color: #A6A6A6;
    font-size: 12px;
    margin-bottom: 0;
}

.subtitle{
    color: black;
    font-size: 18px;
    margin-bottom: 0;
}

.RequestLowongan {
    background-color: #F6EDF0;
}

h1{
    font-family: 'oswald';
    text-align: left;
    margin-left: 100px;
}

.box{
    margin-left: 100px;
    margin-right: 100px;
    background-color: white;
}

.judul-box {
    background-color: #C53751;
    font-family: 'oswald';
    color: white;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.tulisan-box {
    text-align: left;
    margin-left: 50px;
    font-style: medium;
}

form{
    margin-left: 100px;
    margin-right: 100px;
}

.label{
    text-align: left;
    font-family: 'archivo';
    color:#A6A6A6;
    margin-bottom: 2px;
    font-size: 15px;
}
.radio{
    text-align: left;
}

small{
    text-align: left;
}

form{
    font-size: 20px;
}



#main{
    margin-left: 100px;
}

@media only screen and (max-width: 600px){
    #main{
        margin-left: 10px;
        margin-right: 10px;
    }
    h1{
        margin-left: 10px;
    }
    .nav{
        margin-left: 0px;
    }
}

#title{
    font-family: 'oswald';
    background-color: #C53751;
    font-size: 18px;
    padding-top: 0;
    padding-bottom: 0;
}
#sub-title{
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
    font-size: 18px !important;
}
.detail{
    padding-left: 15px;
    padding-right: 15px;
    /* font-size: 50px; */
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

.brearcrumb-a{
    font-family: "Archivo";
    font-size: 15px;
    color: #848484;
}

a:link, a:active, a:hover, a:visited {
    color: #848484 !important;
    text-decoration: none;
}

v-application a{
    color: #848484;
}

.nav {
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-left: 20px;
}

.nav li {
  display: inline-block;
  padding: 2px;
}

</style>