<template>
    <div class="all">
        <br>
        <br>
        <v-card
        color="#FFE3E3"
        id="main"
        max-width="600">
        <v-card-title  dense class="white--text" id="title">Karyawan</v-card-title>
        <v-card-text class="black--text font-weight-bold" id="sub-title">{{this.$route.params.nama}}</v-card-text>
        <v-divider light id="line"></v-divider>
        <form @submit ="formSubmit">
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>No KTP</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{this.$route.params.nik}}</v-card-text>
            </v-flex>
        </v-layout>
            <v-layout row class="detail">
                <v-flex xs6 md6>
                    <v-card-text>Tanggal Mulai</v-card-text>
                </v-flex>
                <v-flex xs6 md6>
                    <input class="form-control" type="date" id="tanggal_mulai" placeholder="pilih tanggal mulai" v-model="tanggal_mulai">
                </v-flex>
            </v-layout>
            <v-layout row class="detail">
                <v-flex xs6 md6>
                    <v-card-text>Tanggal Berakhir</v-card-text>
                </v-flex>
                <v-flex xs6 md6>
                    <input class="form-control" type="date" id="tanggal_berakhir" placeholder="pilih tanggal berakhir" v-model="tanggal_berakhir">
                </v-flex>
            </v-layout>
            <v-layout row class="detail">
                <v-flex xs6 md6>
                    <v-card-text>Periode</v-card-text>
                </v-flex>
                <v-flex xs6 md6>
                    <input class="form-control" type="number" id="periode" placeholder="masukkan periode" v-model="periode">
                </v-flex>
            </v-layout>
            <br>
            <br>
            <button type="submit" class="btn btn-danger" @click="formSubmit">Submit</button>
        </form>
        </v-card>

        <b-modal size="lg" ref="my-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Kontrak berhasil dibuat
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
                        Kontrak gagal dibuat
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
import axios from 'axios';
import authHeader from '../../service/AuthHeader';

export default{
    data(){
        return{
            karyawan: '',
            tanggal_mulai: '',
            tanggal_berakhir: '',
            periode: '',
            retStatus: ''
        }
    },
    mounted(){
        this.load()
    },
    methods: {
        load(){
            axios.get('https://sixacti-api.herokuapp.com/profil/users/'+this.$route.params.id, { headers:authHeader() }).then(res => {
                this.karyawan = res.data
                console.log(this.karyawan)
            }).catch((err) => {
                console.log(err)
            })
        },
        formSubmit(e){
            e.preventDefault();
            this.axios.put('https://sixacti-api.herokuapp.com/detailKontrak/karyawan/add/'+this.$route.params.id,{
                "tanggal_mulai": this.tanggal_mulai,
                "tanggal_berakhir":this.tanggal_berakhir,
                "periode":this.periode
            }, { headers:authHeader() })
            .then (ress => {
                this.retStatus = ress.data
                console.log(this.retStatus)
                if(ress.status == 200){
                        this.openModal()
                    }
                    else{
                        this.errorModal()
                    }
            } )
            .catch((err) => {
                console.log(err);
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

