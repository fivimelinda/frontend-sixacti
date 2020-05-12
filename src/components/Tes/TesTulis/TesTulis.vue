<template>
    <v-container>
        <!-- modal information -->
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="failed">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="info">{{message}}</sweet-modal>
        
        <!-- form tes -->
        <form-tes-tulis v-if="isTesTulisFormOpen && !isTesTulisSubmit"
        v-bind:isCreate="isTesTulisFormOpen"
        v-bind:form="form" @submit="createTesTulis()"
        @batal="cancleCreateTesTulis()"></form-tes-tulis>
        
        <div>
        <div v-if="tes_tulis === null && !isTesTulisFormOpen" class="d-flex justify-center">
            <!-- disabled button -->
            <div v-if="(!tes_medis.isLolos || tes_medis === null)">
                <v-btn color="rgb(121, 121, 121)"
                class="p-0"
                ><b-button class="pl-3 pr-3" style="background-color:rgb(121, 121, 121)"
                @click="openFormTesTulis()" disabled size="sm"><strong class="h6 mr-1"><b-icon-plus></b-icon-plus></strong> Tambah Tes Tulis</b-button>
                </v-btn>
            </div>
            <!-- active button -->
            <div v-else>
                <v-btn color="#C53751" class="pa-0"><b-button class="button-primary pl-3 pr-3"
                @click="openFormTesTulis()" size="sm"><strong class="h6 mr-1"><b-icon-plus></b-icon-plus></strong> Tambah Tes Tulis</b-button></v-btn>
            </div>
        </div>

        <v-card
        class="mx-auto background"
        max-width="570"
        v-else-if="!(tes_tulis === null)"
        >
            <v-card-title class="d-flex justify-content-between" style="background-color:#C53751; color:white">
                 <div class="h6 mt-1 text-center">
                        Data Hasil Tes Tulis
                    </div>
                    <b-button v-if="!tes_tulis.isEdit && !tes_tulis.isLolos && !tes_tulis.isGagal" class="button-update p-0 m-0" v-b-modal.tes-tulis
                            @click="openModelUpdateTesTulis()">
                        <strong class="pb-5 my-auto"><b-icon-pencil-square></b-icon-pencil-square></strong>
                    </b-button>
            </v-card-title>
            <v-card-text style="color:rgb(110, 109, 109)">
                <b-row class="m-0 mt-5">
                    <b-col class="pt-0 mt-0 pb-0 mb-0">Nilai</b-col>
                    <b-col class="pt-0 mt-0 pb-0 mb-0">: {{tes_tulis.nilai}}</b-col>
                </b-row>
                <b-alert class="mt-3 m-0" v-if="tes_tulis.isLolos" show variant="success"><strong class="mr-3"><b-icon-check-circle></b-icon-check-circle></strong>Lolos Tes Tulis</b-alert>
                <b-alert class="mt-3 m-0" v-if="tes_tulis.isGagal" show variant="danger"><strong class="mr-3"><b-icon-x-circle></b-icon-x-circle></strong>Gagal Tes Tulis</b-alert>
            </v-card-text>

            <v-divider></v-divider>  
                <div v-if="!tes_tulis.isLolos && !tes_tulis.isGagal" class="d-flex justify-content-center">
                    <!-- button lolos -->
                        <v-btn
                        outlined
                        color="white"
                        class="mb-3 mr-1 pa-0 mt-0 mb-0"
                        >
                            <b-button class="pr-4 pl-3" variant="success" size="sm" v-b-modal.lolos-tulis>
                                <strong class="h6 mr-1">
                                    <b-icon-check></b-icon-check></strong>
                                 Lolos</b-button>
                        </v-btn>

                    <!-- modal lolos -->

                     <b-modal
                        scrollable
                        centered
                        hide-footer
                        id="lolos-tulis"
                        title="BootstrapVue"
                        >
                        <template
                        v-slot:modal-title>
                            <!-- header modal -->
                            Konfirmasi
                        </template>
                        <div>
                            <div class="h6 mb-3">Apakah peserta ini Lolos dalam tes tulis?</div>
                            <div class="alert alert-info mb-3" style="font-size:12px">
                                *Jika pelamar lolos tes tulis, maka dapat di lanjutkan dengan menekan tombol iya.
                            </div>
                            <div class="d-flex justify-content-end">
                            <b-button-group >
                                <b-button class="mr-2 rounded pr-3 pl-3" size="sm" variant="success" @click="lolosTesTulis()">Iya</b-button>
                                <b-button class="rounded" size="sm" variant="outline-success" @click="$bvModal.hide('lolos-tulis')">Batal</b-button>
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
                            v-b-modal.gagal-tulis
                            ><strong class="h6 mr-1"><b-icon-x></b-icon-x></strong>Gagal</b-button>
                        </v-btn>
                    <!-- modal gagal -->
                    <b-modal
                        scrollable
                        centered
                        hide-footer
                        id="gagal-tulis"
                        title="BootstrapVue"
                        >
                        <template
                        v-slot:modal-title>
                            <!-- header modal -->
                            Konfirmasi
                        </template>
                        <div>
                            <div class="h6 mb-3">Apakah peserta ini Gagal dalam tes tulis?</div>
                            <div class="alert alert-info mb-3" style="font-size:12px">
                                *Jika pelamar gagal dalam tes tulis, maka dapat di lanjutkan dengan menekan tombol iya.
                            </div>
                            <div class="d-flex justify-content-end">
                            <b-button-group >
                                <b-button size="sm" class="mr-2 rounded pr-3 pl-3" variant="danger" @click="gagalTesTulis()">Iya</b-button>
                                <b-button size="sm" class="rounded" variant="outline-danger" @click="$bvModal.hide('gagal-tulis')">Batal</b-button>
                            </b-button-group>
                            </div>
                        </div>
                        </b-modal>

                    <!-- <v-btn color="black" class="mb-3 pa-0">
                        <b-button 
                        class="button pr-5 pl-5" 
                        size="sm" 
                        v-b-modal.tes-tulis @click="openModelUpdateTesTulis()">
                        <strong class="h6 mr-3"><b-icon-pencil></b-icon-pencil></strong>Ubah</b-button>
                    </v-btn> -->

                    <b-modal
                    scrollable
                    hide-footer
                    centered
                    v-model="success"
                    id="tes-tulis"
                    title="BootstrapVue"
                    ref="tes-tulis"
                    >
                    <template
                    v-slot:modal-title>
                        <!-- header modal -->
                        Ubah Tes Tulis
                    </template>

                    <form-tes-tulis
                    v-if="isUpdate"
                        v-bind:isUpdate="isUpdate"
                        v-bind:form="form" @submit="updateTesTulis()">
                    </form-tes-tulis>

                    <!-- <template v-slot:modal-footer> -->
                        <!-- footer modal -->
                        <!-- i'm footer!
                    </template>
                        <p class="my-4">Vertically centered modal!</p> -->
                    </b-modal>

                    <!-- <v-btn
                    color="black"
                    outlined
                    class="mb-3 ml-2 pa-0"
                    v-if="!isValid"
                    >
                        <b-button 
                        class="button-secondary pr-5 pl-4" 
                        size="sm" v-b-modal.valid-tulis> <strong class="h6 mr-2"><b-icon-check></b-icon-check></strong>  Lolos</b-button>
                    </v-btn> -->

                    <b-modal
                    scrollable
                    centered
                    hide-footer
                    id="valid-tulis"
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
                            <b-button class="btn-conf-prm mr-3 rounded pr-3 pl-3" @click="validatedTesTulis()">Iya</b-button>
                            <b-button class="btn-conf-scn rounded" @click="batal()">Batal</b-button>
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
import FormTesTulis from './FormTesTulis.vue'
import TesService from '../../../service/TesService'
import {BIconPlus, BIconCheck, BIconPencilSquare, BIconCheckCircle, BIconXCircle} from 'bootstrap-vue'

export default {
    name:"tes-tulis",
    components:{
        BIconCheckCircle,
        BIconXCircle,
        BIconPencilSquare,
        BIconCheck,
        BIconPlus,
        SweetModal,
        FormTesTulis
    },
    props:{
        tes_tulis:{
            type:Object
        },
        tes_medis:{
            type:Object
        },
        id_pelamar:{
            type:Number
        }
    },
    data(){
        return{
            tesTulis:Object,
            form:{
                nilai:0,
                isEdit:false,
                isLolos:false,
                isGagal:false
            },
            icons:{
                plus:'mdi-plus',
                check:'mdi-check',
                pencil:'mdi-pencil' 
            },
            isOpen : false,
            isTesTulisFormOpen : false,
            isUpdate : false,
            isTesTulisSubmit:false,
            isCreate : false,
            isSubmit:false,
            isValid:false,
            success:false,
            message:"",
            dummy:{
                name:"dummy",
                nilai:"90"
            },
            error:[]
        }
    },
    methods:{
        openFormTesTulis(){
            this.isTesTulisFormOpen = true;
        },
        cancleCreateTesTulis(){
            this.isTesTulisFormOpen = false;
        },
        async createTesTulis(){
            this.isTesTulisFormOpen = false;
            this.isTesTulisSubmit = false;
            // Do Something to save Tes Medis
            await TesService.createTesTulis(Number(this.id_pelamar),{
                nilai:this.form.nilai,
                isEdit:this.form.isEdit,
                isLolos:this.form.isLolos,
                isGagal:this.form.isGagal,
                pelamarTesTulis:{
                    idPelamar:this.id_pelamar}
                });
            this.buka("Tes Tulis Berhasil Disimpan!")
            await this.refreshTesTulis();
        },

        async refreshTesTulis(){
            await this.$emit('refreshTesTulis');
        },
        openModelUpdateTesTulis(){
            this.form.nilai = this.tes_tulis.nilai;
            this.isUpdate = true;
        },
        async updateTesTulis(){
            await TesService.updateTesTulis(this.tes_tulis.idTesTulis,
            {
                nilai:this.form.nilai,
                isEdit:true,
                isLolos:this.tes_tulis.isLolos,
                isGagal:this.tes_tulis.isGagal,
                pelamarTesTulis:{
                    idPelamar:this.id_pelamar}
                }
            );
            this.buka("Tes Tulis Berhasil Diubah!");
            this.$nextTick(() => {
                this.$bvModal.hide('tes-tulis')
            })
            await this.refreshTesTulis();
        },

        async gagalTesTulis(){
            await TesService.updateTesTulis(this.tes_tulis.idTesTulis,
            {
                nilai:this.tes_tulis.nilai,
                isEdit:this.tes_tulis.isEdit,
                isLolos:this.tes_tulis.isLolos,
                isGagal:true,
                pelamarTesTulis:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesTulis();
            this.$nextTick(() => {
                this.$bvModal.hide('gagal-tulis')
            })
        },

        async lolosTesTulis(){
            this.tes_tulis.isLolos=true;
            await TesService.updateTesTulis(this.tes_tulis.idTesTulis,
            {
                nilai:this.tes_tulis.nilai,
                isEdit:this.tes_tulis.isEdit,
                isLolos:true,
                isGagal:this.tes_tulis.isGagal,
                pelamarTesTulis:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesTulis();
            this.$nextTick(() => {
                this.$bvModal.hide('lolos-tulis')
            })
        },

        async validatedTesTulis(){
            await TesService.updateTesTulis(this.tes_tulis.idTesTulis,
            {
                nilai:this.tes_tulis.nilai,
                isEdit:true,
                pelamarTesTulis:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesTulis();
            this.buka();
            this.isValid = true;
        },

        buka(msg){
            this.message = msg;
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