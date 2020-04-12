<template>
    <v-container>
        <!-- modal information -->
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="failed">{{message}}</sweet-modal>

        <!-- form tes -->
        <form-tes-medis v-if="isCreate && !isSubmit"
        v-bind:isCreate="isCreate"
        v-bind:form="form" @submit="subsub()"
        @batal="cancle()"></form-tes-medis>

        
        <div>
            <div v-if="!isCreate" class="d-flex justify-center">
                <v-btn color="#C53751"><v-icon color="white">{{mdi.plus}}</v-icon><b-button class="button-primary" @click="create()" size="sm">Tambah Tes Medis</b-button></v-btn>
            </div>
        
        <v-card
        v-else-if="isSubmit" 
        class="mx-auto"
        max-width="600"
        >
            <v-card-title>
                <div class="subtitle-1">
                    Tes Medis
                </div>
            </v-card-title>
            <v-card-text>
                <div>Nama : {{person.name}}</div>
                <b-row>
                    <b-col>Berat Badan</b-col>
                    <b-col>: {{person.tes.berat_badan}}</b-col>
                </b-row>
                <b-row>
                    <b-col>Tinggi Badan</b-col>
                    <b-col>: {{person.tes.tinggi_badan}}</b-col>
                </b-row>
                <b-row>
                    <b-col>Tekanan Darah</b-col>
                    <b-col>: {{person.tes.tekanan_darah}}</b-col>
                </b-row>
                <b-row>
                    <b-col>Buta Warna</b-col>
                    <b-col>: {{person.tes.buta_warna}}</b-col>
                </b-row>
                <b-row>
                    <b-col>Riwayat Penyakit</b-col>
                    <b-col>: {{person.tes.riwayat_penyakit}}</b-col>
                </b-row>
            </v-card-text>
            <v-divider></v-divider>  
                <div v-if="!validasi" class="d-flex justify-content-center">
                    <v-btn color="black" class="mr-2 mb-3">
                        <v-icon color="white">
                            {{icons.mdiPencil}}
                        </v-icon>
                        <b-button class="button" size="sm" v-b-modal.modal-center @click="update()">Ubah</b-button>
                    </v-btn>
                    <v-btn
                    color="black"
                    class="ml-2 mb-3 button"
                    v-if="!validasi"
                    >
                        <v-icon color="white">
                            {{mdi.check}}
                        </v-icon>
                        <b-button class="button" size="sm" v-b-modal.valid-center>Selesai</b-button>
                    </v-btn>

                    <b-modal
                    scrollable
                    centered
                    hide-footer
                    id="valid-center"
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
                            <b-button class="mr-3 rounded" @click="valid()">Iya</b-button>
                            <b-button class="rounded" @click="$bvModal.hide('valid-center')">Batal</b-button>
                        </b-button-group>
                    </div>
                    <!-- <template v-slot:modal-footer> -->
                        <!-- footer modal -->
                        <!-- i'm footer!
                    </template>
                        <p class="my-4">Vertically centered modal!</p> -->
                    </b-modal>
                    
                    <!-- <modal-success v-bind:success="success"></modal-success> -->
                    <b-modal
                    scrollable
                    hide-footer
                    v-model="success"
                    id="modal-center"
                    title="BootstrapVue"
                    ref="update-modal"
                    >
                    <template
                    v-slot:modal-title>
                        <!-- header modal -->
                        Ubah Tes Medis
                    </template>
                    <form-tes-medis
                    v-if="isUpdate"
                    v-bind:isUpdate="isUpdate"
                    v-bind:form="{
                        berat_badan:person.tes.berat_badan,
                        tinggi_badan:person.tes.tinggi_badan,
                        tekanan_darah:person.tes.tekanan_darah,
                        buta_warna:person.tes.buta_warna,
                        riwayat_penyakit:person.tes.riwayat_penyakit
                    }" @submit="subsub()">
                    </form-tes-medis>
                    <!-- <template v-slot:modal-footer> -->
                        <!-- footer modal -->
                        <!-- i'm footer!
                    </template>
                        <p class="my-4">Vertically centered modal!</p> -->
                    </b-modal>
                    
                </div>
        </v-card>
        </div>
        <div v-for="data in new_data" :key="data.length">
            <div v-if="data != null">
                <v-card 
                class="mx-auto"
                max-width="600"
                >
                    <v-card-title>
                        <div class="subtitle-1">
                            Tes Medis
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <div>Nama : {{data.form.name}}</div>
                        <div>Berat Badan        : {{data.form.berat_badan}}</div>
                        <div>Tinggi Badan       : {{data.form.tinggi_badan}}</div>
                        <div>Tekanan Darah      : {{data.form.tekanan_darah}}</div>
                        <div>Buta Warna         : {{data.form.buta_warna}}</div>
                        <div>Riwayat Penyakit   : {{data.form.riwayat_penyakit}}</div>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </v-container>
</template>

<script>
import {mdiPencil} from '@mdi/js'
import { SweetModal } from 'sweet-modal-vue'
import FormTesMedis from './FormTesMedis.vue'
import TesService from '../../../service/TesService'

export default {
    name: "tes-medis",
    components:{
        SweetModal,
        FormTesMedis
    },
    data() {
        return{
            message:"",
            success:false,
            form:{
                berat_badan:'',
                tinggi_badan:'',
                tekanan_darah:'',
                buta_warna:'',
                riwayat_penyakit:'',
                isEdit:false,
            },
            isOpen : false,
            isCreate : false,
            isUpdate : false,
            isSubmit:false,
            mdi : {
                plus : 'mdi-plus',
                check : 'mdi-check',
            },
            icons:{
                mdiPencil
            },
            validasi : false,
            dialog:false,
            
            open:false,
            person:
                {
                name : "anang",
                tes:{
                    berat_badan : "90",
                    tinggi_badan : "185",
                    tekanan_darah : "70/120",
                    buta_warna : "tidak",
                    riwayat_penyakit : "tidak ada"
                    }
                },
            new_data:[]
        }
    },

    methods:{
        create(){
            this.isOpen = true;
            this.isCreate = true;
        },
        cancle(){
            this.isOpen = false;
            this.isCreate = false;
        },
        update(){
            this.isUpdate = true;
        },
        subsub(){
            const people = {
                form:{
                    tinggi_badan:this.form.tinggi_badan,
                    berat_badan:this.form.berat_badan,
                    tekanan_darah:this.form.tekanan_darah,
                    buta_warna:false,
                    riwayat_penyakit:this.form.riwayat_penyakit,
                    is_edit:this.form.isEdit,
                    pelamar_tes_medis:{
                        id_pelamar:1
                    }
                }                    
            }
            TesService.createTesMedis({
                    tinggiBadan:this.form.tinggi_badan,
                    beratBadan:this.form.berat_badan,
                    tekananDarah:this.form.tekanan_darah,
                    butaWarna:false,
                    riwayatPenyakit:this.form.riwayat_penyakit,
                    isEdit:this.form.isEdit,
                    pelamarTesMedis:{
                        idPelamar:1}
                    });
            this.new_data.push(people);
            this.isSubmit = true;
            this.buka();
        },
        tampilkan(){
            this.$emit('tampilkan');
        },

        valid(){
            this.validasi = true;
        },
        simpan(user){
            this.person.tes.berat_badan = user.tes.berat_badan;
            this.person.tes.tinggi_badan = user.tes.tinggi_badan;
            this.person.tes.tekanan_darah = user.tes.tekanan_darah;
            this.person.tes.buta_warna = user.tes.buta_warna;
            this.person.tes.riwayat_penyakit = user.tes.riwayat_penyakit;
            this.dialog=false;
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