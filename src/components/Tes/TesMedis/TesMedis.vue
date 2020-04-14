<template>
    <v-container>
        <!-- modal information -->
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="failed">{{message}}</sweet-modal>

        <!-- form tes -->
        <form-tes-medis v-if="isTesMedisFormOpen && !isTesMedisSubmit"
        v-bind:isCreate="isTesMedisFormOpen"
        v-bind:form="form" @submit="createTesMedis()"
        @batal="cancleCreateTesMedis()"></form-tes-medis>

        
        <div>
            <!-- kondisikan ketika masih tidak ada value untuk tes medis -->
            <div v-if="tes_medis === null && !isTesMedisFormOpen" class="d-flex justify-center">
                <v-btn color="#C53751"><v-icon color="white">{{mdi.plus}}</v-icon><b-button class="button-primary" @click="openFormTesMedis()" size="sm">Tambah Tes Medis</b-button></v-btn>
            </div>

            <!-- masukkan untuk untuk tes medis yang sudah mengandung value -->
            <v-card
            class="mx-auto mb-3 background"
            max-width="570"
            v-else-if="!(tes_medis === null)"
            >
                <v-card-title class="d-flex justify-center" style="background-color:#C53751; color:white">
                    <div class="h6 text-center">
                        Data Hasil Tes Medis
                    </div>
                </v-card-title>
                <!-- Isi Tes -->
                <v-card-text>
                    <b-row class="ml-2 mr-2">
                        <b-col>Berat Badan
                        </b-col>
                        <b-col>: {{tes_medis.beratBadan}}</b-col>
                    </b-row>
                    <b-row class="m-1">
                        <b-col>Tinggi Badan</b-col>
                        <b-col>: {{tes_medis.tinggiBadan}}</b-col>
                    </b-row>
                    <b-row class="m-1">
                        <b-col>Tekanan Darah</b-col>
                        <b-col>: {{tes_medis.tdBatasBawah}} / {{tes_medis.tdBatasAtas}}</b-col>
                    </b-row>
                    <b-row class="m-1">
                        <b-col>Buta Warna</b-col>
                        <b-col>: {{tes_medis.butaWarna}}</b-col>
                    </b-row>
                    <b-row class="m-1">
                        <b-col>Riwayat Penyakit</b-col>
                        <b-col>: {{tes_medis.riwayatPenyakit}}</b-col>
                    </b-row>
                </v-card-text>

                <!-- Action -->
                <v-divider></v-divider>  
                    <div v-if="!tes_medis.isEdit && !isValid" class="d-flex justify-content-center">
                        <!-- button untuk mengubah -->
                        <v-btn color="black" class="mr-2 mb-3">
                            <v-icon color="white">
                                {{icons.mdiPencil}}
                            </v-icon>
                            <b-button class="button" size="sm" v-b-modal.tes-medis @click="openModelUpdateTesMedis()">Ubah</b-button>
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
                        >
                        </form-tes-medis>
                        </b-modal>

                        <!-- Button untuk selesai/valid -->
                        <v-btn
                        outlined
                        color="black"
                        class="ml-2 mb-3"
                        v-if="!isValid"
                        >
                        <strong>
                            <v-icon color="black">
                                {{mdi.check}}
                            </v-icon>
                        </strong>
                            <b-button class="button-secondary" size="sm" v-b-modal.valid-medis>Selesai</b-button>
                        </v-btn>

                        <!-- Modal untuk konfiramsi validasi -->
                        <b-modal
                        scrollable
                        centered
                        hide-footer
                        id="valid-medis"
                        title="BootstrapVue"
                        >
                        <template
                        v-slot:modal-title>
                            <!-- header modal -->
                            Konfirmasi
                        </template>
                        <div>
                            <div>
                                Apakah anda yakin ingin?
                            </div>
                            <b-button-group>
                                <b-button class="mr-3 rounded" @click="validated()">Iya</b-button>
                                <b-button class="rounded" @click="$bvModal.hide('valid-center')">Batal</b-button>
                            </b-button-group>
                        </div>
                        </b-modal>
                    </div>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import {mdiPencil} from '@mdi/js'
import { SweetModal } from 'sweet-modal-vue'
import FormTesMedis from './FormTesMedis.vue'
import TesService from '../../../service/TesService'
// import axios from 'axios'

export default {
    name: "tes-medis",
    components:{
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
        createTesMedis(){
            this.isTesMedisFormOpen = false;
            this.isTesMedisSubmit = false;
            // Do Something to save Tes Medis
            
            TesService.createTesMedis({
                tinggiBadan:this.form.tinggi_badan,
                beratBadan:this.form.berat_badan,
                tdBatasAtas : this.form.td_batas_atas,
                tdBatasBawah : this.form.td_batas_bawah,
                butaWarna:this.form.buta_warna,
                riwayatPenyakit:this.form.riwayat_penyakit,
                isEdit:this.form.isEdit,
                pelamarTesMedis:{
                    idPelamar:this.id_pelamar}
                });
            this.refreshTesMedis();
            
        },

        refreshTesMedis(){
            this.$emit('refreshTesMedis');
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
        updateTesMedis(){
            console.log(this.tes_medis.idTesMedis);
            TesService.updateTesMedis(this.tes_medis.idTesMedis,
            {
                tinggiBadan:this.form.tinggi_badan,
                beratBadan:this.form.berat_badan,
                tdBatasAtas : this.form.td_batas_atas,
                tdBatasBawah : this.form.td_batas_bawah,
                butaWarna:this.form.buta_warna,
                riwayatPenyakit:this.form.riwayat_penyakit,
                isEdit:true,
                pelamarTesMedis:{
                    idPelamar:this.id_pelamar}
                }
            );
            this.refreshTesMedis();
            this.buka();
        },
        validated(){
            this.updateTesMedis();
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
        
        subdate(){
            this.$nextTick(() => {
                this.$bvModal.hide('tes-medis')
            })
            this.buka()
        },
    
        buka(){
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
</style>