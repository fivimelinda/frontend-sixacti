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
            <v-btn color="#C53751"><v-icon color="white">{{icons.plus}}</v-icon><b-button class="button-primary"
            @click="openFormTesTulis()" :disabled="(tes_medis===null)" size="sm">Tambah Tes Tulis</b-button></v-btn>
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
        async createTesTulis(){
            this.isTesTulisFormOpen = false;
            this.isTesTulisSubmit = false;
            // Do Something to save Tes Medis
            await TesService.createTesTulis(Number(this.id_pelamar),{
                nilai:this.form.nilai,
                isEdit:this.form.isEdit,
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
            console.log(this.tes_tulis.idTesTulis);
            await TesService.updateTesTulis(this.tes_tulis.idTesTulis,
            {
                nilai:this.form.nilai,
                isEdit:true,
                pelamarTesTulis:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesTulis();
            this.buka();
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
</style>