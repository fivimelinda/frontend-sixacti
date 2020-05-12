<template>
    <v-container>
        <!-- modal information -->
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="failed">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="info">{{message}}</sweet-modal>

        <!-- form tes -->
        <form-tes-wawancara v-if="isTesWawancaraFormOpen && !isTesWawancaraSubmit"
        v-bind:isCreate="isTesWawancaraFormOpen"
        v-bind:form="form" @submit="createTesWawancara()"
        @batal="cancleCreateTesWawancara()"></form-tes-wawancara>

        <div>
        <div v-if="tes_wawancara === null && !isTesWawancaraFormOpen" class="d-flex justify-center">
             <!-- disabled button -->
            <div v-if="(!tes_tulis.isLolos || tes_tulis === null)">
                <v-btn color="rgb(121, 121, 121)"
                class="p-0"
                ><b-button class="pl-3 pr-3" style="background-color:rgb(121, 121, 121)"
                @click="openFormTesWawancara()" disabled size="sm"><strong class="h6 mr-1"><b-icon-plus></b-icon-plus></strong> Tambah Tes Wawancara</b-button>
                </v-btn>
            </div>
            <!-- active button -->
            <div v-else>
                <v-btn color="#C53751" class="pa-0"><b-button class="button-primary pl-3 pr-3"
                @click="openFormTesWawancara()" size="sm"><strong class="h6 mr-1"><b-icon-plus></b-icon-plus></strong> Tambah Tes Wawancara</b-button></v-btn>
            </div>
        </div>

        <v-card
        class="mx-auto background"
        max-width="570"
        v-else-if="!(tes_wawancara === null)"
        >
            <v-card-title class="d-flex justify-content-between" style="background-color:#C53751; color:white">
                <div class="h6 mt-1 text-center">
                    Data Hasil Tes Wawancara
                </div>
                <b-button v-if="!tes_wawancara.isEdit && !tes_wawancara.isLolos && !tes_wawancara.isGagal" class="button-update p-0 m-0" v-b-modal.tes-wawancara
                            @click="openModelUpdateTesWawancara()">
                        <strong class="pb-5 my-auto"><b-icon-pencil-square></b-icon-pencil-square></strong>
                    </b-button>
            </v-card-title>
            <v-card-text style="color:rgb(110, 109, 109)">
                <b-row class="m-1 mt-4">
                    <b-col class="pt-0 mt-0 pb-0 mb-0">Nilai</b-col>
                    <b-col class="pt-0 mt-0 pb-0 mb-0">: {{tes_wawancara.nilai}}</b-col>
                </b-row>
                <b-row class="m-1">
                    <b-col class="pt-0 mt-0 pb-0 mb-0">Umpan Balik</b-col>
                    <b-col class="pt-0 mt-0 pb-0 mb-0">: {{tes_wawancara.feedback}}</b-col>
                </b-row>
                <b-alert class="mt-3 m-0" v-if="tes_wawancara.isLolos" show variant="success"><strong class="mr-3"><b-icon-check-circle></b-icon-check-circle></strong>Lolos Tes Wawancara</b-alert>
                <b-alert class="mt-3 m-0" v-if="tes_wawancara.isGagal" show variant="danger"><strong class="mr-3"><b-icon-x-circle></b-icon-x-circle></strong>Gagal Tes Wawancara</b-alert>
            </v-card-text>

            <v-divider></v-divider>
                <div v-if="!tes_wawancara.isLolos && !tes_wawancara.isGagal" class="d-flex justify-content-center">
                    <!-- button lolos -->
                    <v-btn
                    outlined
                    color="white"
                    class="mb-3 mr-1 pa-0 mt-0 mb-0"
                    >
                        <b-button class="pr-4 pl-3" variant="success" size="sm" v-b-modal.lolos-wawancara>
                            <strong class="h6 mr-1">
                                <b-icon-check></b-icon-check></strong>
                                Lolos</b-button>
                    </v-btn>
                    <!-- modal lolos -->
                        <b-modal
                        scrollable
                        centered
                        hide-footer
                        id="lolos-wawancara"
                        title="BootstrapVue"
                        >
                        <template
                        v-slot:modal-title>
                            <!-- header modal -->
                            Konfirmasi
                        </template>
                        <div>
                            <div class="h6 mb-3">Apakah peserta ini Lolos dalam tes wawancara?</div>
                            <div class="alert alert-info mb-3" style="font-size:12px">
                                *Jika pelamar lolos tes wawancara, maka dapat di lanjutkan dengan menekan tombol iya.
                            </div>
                            <div class="d-flex justify-content-end">
                            <b-button-group >
                                <b-button class="mr-2 rounded pr-3 pl-3" size="sm" variant="success" @click="lolosTesWawancara()">Iya</b-button>
                                <b-button class="rounded" size="sm" variant="outline-success" @click="$bvModal.hide('lolos-wawancara')">Batal</b-button>
                            </b-button-group>
                            </div>
                        </div>
                        </b-modal>
                    <!-- button gagal -->
                    <v-btn color="white" outlined class="mb-3 pa-0">
                            <b-button
                            class="pr-4 pl-3"
                            size="sm"
                            variant="outline-danger"
                            v-b-modal.gagal-wawancara
                            ><strong class="h6 mr-1"><b-icon-x></b-icon-x></strong>Gagal</b-button>
                        </v-btn>
                    <!-- modal gagal -->
                    <b-modal
                        scrollable
                        centered
                        hide-footer
                        id="gagal-wawancara"
                        title="BootstrapVue"
                        >
                        <template
                        v-slot:modal-title>
                            <!-- header modal -->
                            Konfirmasi
                        </template>
                        <div>
                            <div class="h6 mb-3">Apakah peserta ini Gagal dalam tes wawancara?</div>
                            <div class="alert alert-info mb-3" style="font-size:12px">
                                *Jika pelamar gagal dalam tes wawancara, maka dapat di lanjutkan dengan menekan tombol iya.
                            </div>
                            <div class="d-flex justify-content-end">
                            <b-button-group >
                                <b-button size="sm" class="mr-2 rounded pr-3 pl-3" variant="danger" @click="gagalTesWawancara()">Iya</b-button>
                                <b-button size="sm" class="rounded" variant="outline-danger" @click="$bvModal.hide('gagal-wawancara')">Batal</b-button>
                            </b-button-group>
                            </div>
                        </div>
                        </b-modal>

                    <!-- <v-btn color="black" class="mb-3 pa-0">
                        <b-button class="button pr-5 pl-5" 
                        size="sm" v-b-modal.tes-wawancara @click="openModelUpdateTesWawancara()">
                        <strong class="h6 mr-3"><b-icon-pencil></b-icon-pencil></strong> Ubah</b-button>
                    </v-btn> -->

                    <!-- <modal-success v-bind:success="success"></modal-success> -->
                    <b-modal
                    scrollable
                    hide-footer
                    v-model="success"
                    id="tes-wawancara"
                    title="BootstrapVue"
                    ref="update-wawancara"
                    >
                    <template
                    v-slot:modal-title>
                        <!-- header modal -->
                        Ubah Tes Medis
                    </template>

                    <form-tes-wawancara
                    v-if="isUpdate"
                        v-bind:isUpdate="isUpdate"
                        v-bind:form="form" @submit="updateTesWawancara()">
                    </form-tes-wawancara>
                    <!-- <template v-slot:modal-footer> -->
                        <!-- footer modal -->
                        <!-- i'm footer!
                    </template>
                        <p class="my-4">Vertically centered modal!</p> -->
                    </b-modal>
                    
                    <!-- <v-btn
                    outlined
                    color="black"
                    class="mb-3 ml-2 pa-0"
                    v-if="!isValid"
                    >
                        <b-button class="button-secondary pr-5 pl-4" size="sm" v-b-modal.valid-wawancara>
                           <strong class="h6 mr-2"><b-icon-check></b-icon-check></strong> Lolos</b-button>
                    </v-btn> -->

                    <b-modal
                    scrollable
                    centered
                    hide-footer
                    id="valid-wawancara"
                    title="BootstrapVue"
                    >
                    <template
                    v-slot:modal-title>
                        <!-- header modal -->
                        Konfirmasi
                    </template>
                    <div>
                        <div class="h6 mb-3">Apakah anda yakin ingin menyelesaikan data ini?</div>
                            <div class="alert alert-danger mb-3" style="font-size:12px">
                                *Jika anda menekan tombol "Iya", maka data dinyatakan selesai dan tidak dapat diubah.
                            </div>
                            <div class="d-flex justify-content-end">
                        <b-button-group>
                            <b-button class="btn-conf-prm mr-3 rounded pr-3 pl-3" @click="validatedTesWawancara()">Iya</b-button>
                            <b-button class="btn-conf-scn rounded" @click="$bvModal.hide('valid-wawancara')">Batal</b-button>
                        </b-button-group>
                        </div>
                    </div>
                    </b-modal>
                    
                </div>
        </v-card>
        </div>
        
    </v-container>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import FormTesWawancara from './FormTesWawancara.vue'
import TesService from '../../../service/TesService'
import {BIconPlus, BIconCheck, BIconPencilSquare, BIconCheckCircle, BIconXCircle} from 'bootstrap-vue'


export default {
    name:"tes-wawancara",
    components:{
        BIconCheckCircle,
        BIconXCircle,
        BIconPencilSquare,
        BIconCheck,
        BIconPlus,
        SweetModal,
        FormTesWawancara
    },
    props:{
        tes_wawancara:{
            type:Object
        },
        tes_tulis:{
            type:Object
        },
        id_pelamar:{
            type:Number
        }
    },
    data (){
        return{
            tesWawancara:Object,
            form:{
                nilai:"",
                feedback:"",
                isEdit:false,
                isLolos:false,
                isGagal:false,
            },
            icons:{
                plus:'mdi-plus',
                check:'mdi-check',
                pencil:'mdi-pencil'
            },
            isOpen : false,
            isTesWawancaraFormOpen : false,
            isUpdate : false,
            isTesWawancaraSubmit:false,
            isCreate : false,
            isValid:false,
            success:false,
            isSubmit:false,
            message:"",
            dummy:{
                name:"dummy",
                nilai:"baik",
                umpan_balik:"sudah sangat baik"
            },
            error:[]
        }
    },
    methods:{
        openFormTesWawancara(){
            this.isTesWawancaraFormOpen = true;
        },
        cancleCreateTesWawancara(){
            this.isTesWawancaraFormOpen = false;
        },
        async createTesWawancara(){
            this.isTesWawancaraFormOpen = false;
            this.isTesWawancaraSubmit = false;
            // Do Something to save Tes Medis
            await TesService.createTesWawancara(Number(this.id_pelamar),{
                nilai:this.form.nilai,
                feedback:this.form.feedback,
                isEdit:this.form.isEdit,
                isLolos:this.form.isLolos,
                isGagal:this.form.isGagal,
                pelamarTesWawancara:{
                    idPelamar:this.id_pelamar}
                });
            await this.refreshTesWawancara();
            this.buka("Tes Wawancara Berhasil Disimpan!");
            
        },

        async refreshTesWawancara(){
            await this.$emit('refreshTesWawancara');
        },
        openModelUpdateTesWawancara(){
            this.form.nilai = this.tes_wawancara.nilai;
            this.form.feedback = this.tes_wawancara.feedback;
            this.isUpdate = true;
        },
        async updateTesWawancara(){
            await TesService.updateTesWawancara(this.tes_wawancara.idTesWawancara,
            {
                nilai:this.form.nilai,
                feedback:this.form.feedback,
                isEdit:true,
                isLolos:this.tes_wawancara.isLolos,
                isGagal:this.tes_wawancara.isGagal,
                pelamarTesWawancara:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesWawancara();
            this.$nextTick(() => {
                this.$bvModal.hide('tes-wawancara')
            })
            this.buka("Tes Wawancara Berhasil Diubah!");
        },

        async lolosTesWawancara(){
            await TesService.updateTesWawancara(this.tes_wawancara.idTesWawancara,
            {
                nilai:this.tes_wawancara.nilai,
                feedback:this.tes_wawancara.feedback,
                isEdit:this.tes_wawancara.isEdit,
                isLolos:true,
                isGagal:this.tes_wawancara.isGagal,
                pelamarTesWawancara:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesWawancara();
            this.$nextTick(() => {
                this.$bvModal.hide('gagal-wawancara')
            })
        },

        async gagalTesWawancara(){
            await TesService.updateTesWawancara(this.tes_wawancara.idTesWawancara,
            {
                nilai:this.tes_wawancara.nilai,
                feedback:this.tes_wawancara.feedback,
                isEdit:this.tes_wawancara.isEdit,
                isLolos:this.tes_wawancara.isLolos,
                isGagal:true,
                pelamarTesWawancara:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesWawancara();
            this.$nextTick(() => {
                this.$bvModal.hide('gagal-wawancara')
            })
        },


        async validatedTesWawancara(){
            await TesService.updateTesWawancara(this.tes_wawancara.idTesWawancara,
            {
                nilai:this.tes_wawancara.nilai,
                feedback:this.tes_wawancara.feedback,
                isEdit:true,
                pelamarTesWawancara:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesWawancara();
            this.$nextTick(() => {
                this.$bvModal.hide('gagal-tulis')
            })
        },
        buka(msg){
            this.message=msg;
            this.$refs.modal.open();
        },
        create(){
            this.isOpen = true;
            this.isCreate = true;
        },
        cancle(){
            this.isOpen = false;
            this.isCreate = false;
        },
    }
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

.button-update{
    border:none!important;
    color:white !important;
    background-color: transparent !important;
}
</style>