<template>
    <v-container>
        <!-- modal information -->
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="failed">{{message}}</sweet-modal>
        
        <!-- form tes -->
        <form-tes-tulis v-if="isTesTulisFormOpen && !isTesTulisSubmit"
        v-bind:isCreate="isTesTulisFormOpen"
        v-bind:form="form" @submit="createTesTulis()"
        @batal="cancleCreateTesTulis()"></form-tes-tulis>
        
        <div>
        <div v-if="tes_tulis === null && !isTesTulisFormOpen" class="d-flex justify-center">
            <v-btn color="#C53751"><v-icon color="white">{{icons.plus}}</v-icon><b-button class="button-primary"
            @click="openFormTesTulis()" size="sm">Tambah Tes Tulis</b-button></v-btn>
        </div>
        <v-card
        class="mx-auto background"
        max-width="570"
        v-else-if="!(tes_tulis === null)"
        >
            <v-card-title class="d-flex justify-center" style="background-color:#C53751; color:white">
                <div class="h6">
                    Data Hasil Tes Tulis
                </div>
            </v-card-title>
            <v-card-text>
                <b-row>
                    <b-col>Nilai</b-col>
                    <b-col>: {{tes_tulis.nilai}}</b-col>
                </b-row>
            </v-card-text>

            <v-divider></v-divider>  
                <div v-if="!tes_tulis.isEdit && !isValid" class="d-flex justify-content-center">
                    <v-btn color="black" class="mr-2 mb-3">
                        <v-icon color="white">
                            {{icons.pencil}}
                        </v-icon>
                        <b-button class="button" size="sm" v-b-modal.tes-tulis @click="openModelUpdateTesTulis()">Ubah</b-button>
                    </v-btn>

                    <b-modal
                    scrollable
                    hide-footer
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

                    <v-btn
                    color="black"
                    outlined
                    class="ml-2 mb-3"
                    v-if="!isValid"
                    >
                        <v-icon color="black">
                            {{icons.check}}
                        </v-icon>
                        <b-button class="button-secondary" size="sm" v-b-modal.valid-tulis>Selesai</b-button>
                    </v-btn>

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
                        <div>
                            Apakah anda yakin ingin?
                        </div>
                        <b-button-group>
                            <b-button class="mr-3 rounded" @click="validatedTesTulis()">Iya</b-button>
                            <b-button class="rounded" @click="$bvModal.hide('valid-tulis')">Batal</b-button>
                        </b-button-group>
                    </div>
                    <!-- <template v-slot:modal-footer> -->
                        <!-- footer modal -->
                        <!-- i'm footer!
                    </template>
                        <p class="my-4">Vertically centered modal!</p> -->
                    </b-modal>
                    
                    <!-- <modal-success v-bind:success="success"></modal-success> -->
                </div>
        </v-card>
        </div>
    </v-container>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import FormTesTulis from './FormTesTulis.vue'
import TesService from '../../../service/TesService'

export default {
    name:"tes-tulis",
    components:{
        SweetModal,
        FormTesTulis
    },
    props:{
        tes_tulis:{
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
        createTesTulis(){
            this.isTesTulisFormOpen = false;
            this.isTesTulisSubmit = false;
            // Do Something to save Tes Medis
            TesService.createTesTulis({
                nilai:this.form.nilai,
                isEdit:this.form.isEdit,
                pelamarTesTulis:{
                    idPelamar:this.id_pelamar}
                });
            this.refreshTesTulis();
            
        },

        refreshTesTulis(){
            this.$emit('refreshTesTulis');
        },
        openModelUpdateTesTulis(){
            this.form.nilai = this.tes_tulis.nilai;
            this.isUpdate = true;
        },
        updateTesTulis(){
            console.log(this.tes_tulis.idTesTulis);
            TesService.updateTesTulis(this.tes_tulis.idTesTulis,
            {
                nilai:this.form.nilai,
                isEdit:true,
                pelamarTesTulis:{
                    idPelamar:this.id_pelamar}
                }
            );
            this.refreshTesTulis();
            this.buka();
        },
        validated(){
            this.updateTesMedis();
            this.isValid = true;
        },
        buka(){
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
</style>