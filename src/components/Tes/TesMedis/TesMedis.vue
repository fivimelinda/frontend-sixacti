<template>
    <v-container>
        <!-- modal information -->
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="failed">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="info">{{message}}</sweet-modal>

        <!-- form tes -->
        <form-tes-medis v-if="isTesMedisFormOpen && !isTesMedisSubmit"
        v-bind:isCreate="isTesMedisFormOpen"
        v-bind:form="form" @submit="createTesMedis()"
        @batal="cancleCreateTesMedis()"></form-tes-medis>

        
        <div>
            <!-- kondisikan ketika masih tidak ada value untuk tes medis -->
            <div v-if="tes_medis === null && !isTesMedisFormOpen" class="d-flex justify-center">
                <v-btn class="p-0" color="#C53751">
                <b-button class="button-primary pr-5 pl-3" @click="openFormTesMedis()" size="sm"><strong class="h5 mr-2"><b-icon-plus></b-icon-plus></strong>Tambah Tes Medis</b-button></v-btn>
            </div>

            <!-- masukkan untuk untuk tes medis yang sudah mengandung value -->
            <v-card
            class="mx-auto mb-3 background"
            max-width="570"
            v-else-if="!(tes_medis === null)"
            >
                <v-card-title class="d-flex justify-content-between" style="background-color:#C53751; color:white">
                    <div class="h6 mt-1 text-center">
                        Data Hasil Tes Medis
                    </div>
                    <b-button v-if="!tes_medis.isEdit && !tes_medis.isLolos && !tes_medis.isGagal" class="button-update p-0 m-0" v-b-modal.tes-medis
                            @click="openModelUpdateTesMedis()">
                        <strong class="pb-5 my-auto"><b-icon-pencil-square></b-icon-pencil-square></strong>
                    </b-button>
                </v-card-title>
                <!-- Isi Tes -->
                <v-card-text style="color:rgb(110, 109, 109)">
                    <b-row class="m-1">
                        <b-col class="pb-0 mb-0">Berat Badan
                        </b-col>
                        <b-col class="pb-0 mb-0">: {{tes_medis.beratBadan}}</b-col>
                    </b-row>
                    <b-row class="m-1">
                        <b-col class="pt-0 mt-0 pb-0 mb-0">Tinggi Badan</b-col>
                        <b-col class="pt-0 mt-0 pb-0 mb-0">: {{tes_medis.tinggiBadan}}</b-col>
                    </b-row>
                    <b-row class="m-1">
                        <b-col class="pt-0 mt-0 pb-0 mb-0">Tekanan Darah</b-col>
                        <b-col class="pt-0 mt-0 pb-0 mb-0">: {{tes_medis.tdBatasBawah}} / {{tes_medis.tdBatasAtas}}</b-col>
                    </b-row>
                    <b-row class="m-1">
                        <b-col class="pt-0 mt-0 pb-0 mb-0">Buta Warna</b-col>
                        <b-col class="pt-0 mt-0 pb-0 mb-0">: {{tes_medis.butaWarna}}</b-col>
                    </b-row>
                    <b-row class="m-1 mb-0">
                        <b-col class="pt-0 mt-0 pb-0 mb-0">Riwayat Penyakit</b-col>
                        <b-col class="pt-0 mt-0 pb-0 mb-0">: {{tes_medis.riwayatPenyakit}}</b-col>
                    </b-row>
                    <b-alert class="mt-3 m-0" v-if="tes_medis.isLolos" show variant="success"><strong class="mr-3"><b-icon-check-circle></b-icon-check-circle></strong>Lolos Tes Medis</b-alert>
                    <b-alert class="mt-3 m-0" v-if="tes_medis.isGagal" show variant="danger"><strong class="mr-3"><b-icon-x-circle></b-icon-x-circle></strong>Gagal Tes Medis</b-alert>
                </v-card-text>
        
                <!-- Action -->
                <v-divider></v-divider>
                    <div v-if="!tes_medis.isLolos && !tes_medis.isGagal" class="d-flex justify-content-center">
                        <!-- Button untuk selesai/valid/lolos -->
                        <v-btn
                        outlined
                        color="white"
                        class="mb-3 mr-1 pa-0 mt-0 mb-0"
                        >
                            <b-button class="pr-4 pl-3" variant="success" size="sm" v-b-modal.lolos-medis>
                                <strong class="h6 mr-1">
                                    <b-icon-check></b-icon-check></strong>
                                 Lolos</b-button>
                        </v-btn>

                        <!-- Modal untuk konfiramsi validasi -->
                        <b-modal
                        scrollable
                        centered
                        hide-footer
                        id="lolos-medis"
                        title="BootstrapVue"
                        >
                        <template
                        v-slot:modal-title>
                            <!-- header modal -->
                            Konfirmasi
                        </template>
                        <div>
                            <div class="h6 mb-3">Apakah peserta ini Lolos dalam tes medis?</div>
                            <div class="alert alert-info mb-3" style="font-size:12px">
                                *Jika pelamar lolos tes medis, maka dapat di lanjutkan dengan menekan tombol iya.
                            </div>
                            <div class="d-flex justify-content-end">
                            <b-button-group >
                                <b-button size="sm" class="mr-3 rounded pr-3 pl-3" variant="success" @click="lolosTesMedis()">Iya</b-button>
                                <b-button size="sm" class="rounded" variant="outline-success" @click="$bvModal.hide('lolos-medis')">Batal</b-button>
                            </b-button-group>
                            </div>
                        </div>
                        </b-modal>

                        <b-modal
                        scrollable
                        centered
                        hide-footer
                        id="gagal-medis"
                        title="BootstrapVue"
                        >
                        <template
                        v-slot:modal-title>
                            <!-- header modal -->
                            Konfirmasi
                        </template>
                        <div>
                            <div class="h6 mb-3">Apakah peserta ini Gagal dalam tes medis?</div>
                            <div class="alert alert-info mb-3" style="font-size:12px">
                                *Jika pelamar gagal dalam tes medis, maka dapat di lanjutkan dengan menekan tombol iya.
                            </div>
                            <div class="d-flex justify-content-end">
                            <b-button-group >
                                <b-button size="sm" class="mr-3 rounded pr-3 pl-3" variant="danger" @click="gagalTesMedis()">Iya</b-button>
                                <b-button size="sm" class="rounded" variant="outline-danger" @click="$bvModal.hide('gagal-medis')">Batal</b-button>
                            </b-button-group>
                            </div>
                        </div>
                        </b-modal>

                        <!-- button untuk mengubah -->
                        <v-btn color="white" outlined class="mb-3 pa-0">
                            <b-button
                            class="pr-4 pl-3"
                            size="sm"
                            variant="outline-danger"
                            v-b-modal.gagal-medis
                            ><strong class="h6 mr-1"><b-icon-x></b-icon-x></strong>Gagal</b-button>
                        </v-btn>

                        <!-- <modal-success v-bind:success="success"></modal-success> -->
                        <!-- Modal untuk mengubah data -->
                        <b-modal
                        scrollable
                        hide-footer
                        v-model="success"
                        id="tes-medis"
                        title="BootstrapVue"
                        ref="tes-tulis"
                        >
                        <template
                        v-slot:modal-title>
                            <!-- header modal -->
                            Ubah Tes Medis
                        </template>
                        <form-tes-medis
                        v-if="isUpdate"
                        v-bind:isUpdate="isUpdate"
                        v-bind:form="form" @submit="updateTesMedis()"
                        @batal="batalUbah()"
                        >
                        </form-tes-medis>
                        </b-modal>
                        
                    </div>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import {mdiPencil} from '@mdi/js'
import { SweetModal } from 'sweet-modal-vue'
import {BIconPlus, BIconX, BIconCheck, BIconPencilSquare, BIconCheckCircle, BIconXCircle} from 'bootstrap-vue'
import FormTesMedis from './FormTesMedis.vue'
import TesService from '../../../service/TesService'
// import axios from 'axios'

export default {
    name: "tes-medis",
    components:{
        BIconCheckCircle,
        BIconXCircle,
        BIconPencilSquare,
        BIconPlus,
        BIconX,
        BIconCheck,
        SweetModal,
        FormTesMedis
    },
    props:{
        tes_medis:{
            type:Object,
        },
        id_pelamar:{
            type:Number},
    },
    data() {
        return{
            tesMedis:Object,
            message:"",
            success:false,
            pelamar:Object,
            form:{
                berat_badan:'',
                tinggi_badan:'',
                td_batas_bawah:'',
                td_batas_atas:'',
                buta_warna:'',
                riwayat_penyakit:'',
                isEdit:false,
                isLolos:false,
                isGagal:false
            },
            isOpen : false,
            isTesMedisFormOpen : false,
            isUpdate : false,
            isTesMedisSubmit:false,
            mdi : {
                plus : 'mdi-plus',
                check : 'mdi-check',
            },
            icons:{
                mdiPencil
            },
            isValid : false,
            dialog:false,
            open:false,
            error:[]
        }
    },

    mounted(){
        
    },

    // methods
    methods:{
        openFormTesMedis(){
            this.isTesMedisFormOpen = true;
        },
        cancleCreateTesMedis(){
            this.isTesMedisFormOpen = false;
        },
        async createTesMedis(){
            this.isTesMedisFormOpen = false;
            this.isTesMedisSubmit = false;
            // Do Something to save Tes Medis
            await TesService.createTesMedis(Number(this.id_pelamar),{
                tinggiBadan:this.form.tinggi_badan,
                beratBadan:this.form.berat_badan,
                tdBatasAtas : this.form.td_batas_atas,
                tdBatasBawah : this.form.td_batas_bawah,
                butaWarna:this.form.buta_warna,
                riwayatPenyakit:this.form.riwayat_penyakit,
                isEdit:this.form.isEdit,
                isLolos:this.form.isLolos,
                isGagal:this.form.isGagal,
                pelamarTesMedis:{
                    idPelamar:this.id_pelamar}
                });
            this.buka('Tes Medis Berhasil Disimpan!')
            await this.refreshTesMedis();
        },

        async refreshTesMedis(){
            await this.$emit('refreshTesMedis');
        },

        openModelUpdateTesMedis(){
            this.form.tinggi_badan = this.tes_medis.tinggiBadan;
            this.form.berat_badan = this.tes_medis.beratBadan;
            this.form.td_batas_bawah = this.tes_medis.tdBatasBawah;
            this.form.td_batas_atas = this.tes_medis.tdBatasAtas;
            this.form.buta_warna = this.tes_medis.butaWarna;
            this.form.riwayat_penyakit = this.tes_medis.riwayatPenyakit;
            this.isUpdate = true;
        },

        async updateTesMedis(){
            await TesService.updateTesMedis(this.tes_medis.idTesMedis,
            {
                tinggiBadan:this.form.tinggi_badan,
                beratBadan:this.form.berat_badan,
                tdBatasAtas : this.form.td_batas_atas,
                tdBatasBawah : this.form.td_batas_bawah,
                butaWarna:this.form.buta_warna,
                riwayatPenyakit:this.form.riwayat_penyakit,
                isEdit:true,
                isLolos:this.tes_medis.isLolos,
                isGagal:this.tes_medis.isGagal,
                pelamarTesMedis:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesMedis();
            this.batalUbah();
            this.buka("Tes Medis Berhasil Diperbarui!");
        },

        async lolosTesMedis(){
            await TesService.updateTesMedis(this.tes_medis.idTesMedis,
            {
                tinggiBadan:this.tes_medis.tinggiBadan,
                beratBadan:this.tes_medis.beratBadan,
                tdBatasAtas : this.tes_medis.tdBatasAtas,
                tdBatasBawah : this.tes_medis.tdBatasBawah,
                butaWarna:this.tes_medis.butaWarna,
                riwayatPenyakit:this.tes_medis.riwayatPenyakit,
                isEdit:this.tes_medis.isEdit,
                isLolos:true,
                isGagal:this.tes_medis.isGagal,
                pelamarTesMedis:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesMedis();
            this.$nextTick(() => {
                this.$bvModal.hide('lolos-medis')
            })
        },

        async gagalTesMedis(){
            await TesService.updateTesMedis(this.tes_medis.idTesMedis,
            {
                tinggiBadan:this.tes_medis.tinggiBadan,
                beratBadan:this.tes_medis.beratBadan,
                tdBatasAtas : this.tes_medis.tdBatasAtas,
                tdBatasBawah : this.tes_medis.tdBatasBawah,
                butaWarna:this.tes_medis.butaWarna,
                riwayatPenyakit:this.tes_medis.riwayatPenyakit,
                isEdit:this.tes_medis.isEdit,
                isLolos:this.tes_medis.isLolos,
                isGagal:true,
                pelamarTesMedis:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesMedis();
            this.$nextTick(() => {
                this.$bvModal.hide('gagal-medis')
            })
        },

        async validatedTesMedis(){
            await TesService.updateTesMedis(this.tes_medis.idTesMedis,
            {
                tinggiBadan:this.tes_medis.tinggiBadan,
                beratBadan:this.tes_medis.beratBadan,
                tdBatasAtas : this.tes_medis.tdBatasAtas,
                tdBatasBawah : this.tes_medis.tdBatasBawah,
                butaWarna:this.tes_medis.butaWarna,
                riwayatPenyakit:this.tes_medis.riwayatPenyakit,
                isEdit:true,
                isLolos:true,
                pelamarTesMedis:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesMedis();
            this.isValid = true;
        },

        create(){
            this.isOpen = true;
            this.isCreate = true;
        },
        cancle(){
            this.isOpen = false;
            this.isCreate = false;
        },
        
        batalUbah(){
            this.$nextTick(() => {
                this.$bvModal.hide('tes-medis')
            })
        },
    
        buka(msg){
            this.message=msg
            this.$refs.modal.open();
        }
    },
    
}
</script>

<style scoped>
.border{
    border:none !important;
}

.button-primary{
    color:white !important;
    background-color: #C53751 !important;
    border:none;
}
.btn-conf-prm{
    background-color: black !important;
    color: white;
    font-size: 15px;
}

.btn-conf-scn{
    border: 1px solid black ;
    background-color: white !important;
    color: black !important;
    font-size: 15px;
}

.header-modal{
    background-color: black !important;
}

.button-update{
    border:none!important;
    color:white !important;
    background-color: transparent !important;
}

.text{
    color:rgb(110, 109, 109);
}
</style>