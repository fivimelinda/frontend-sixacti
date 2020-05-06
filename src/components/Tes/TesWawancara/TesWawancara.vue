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
            <v-btn color="#C53751"><v-icon color="white">{{icons.plus}}</v-icon>
            <b-button class="button-primary" :disabled="(tes_tulis===null)" @click="openFormTesWawancara()" size="sm">Tambah Tes Wawancara</b-button></v-btn>
        </div>

        <v-card
        class="mx-auto background"
        max-width="570"
        v-else-if="!(tes_wawancara === null)"
        >
            <v-card-title class="d-flex justify-center" style="background-color:#C53751; color:white">
                <div class="h6">
                    Data Hasil Tes Wawancara
                </div>
            </v-card-title>
            <v-card-text>
                <b-row>
                    <b-col>Nilai</b-col>
                    <b-col>: {{tes_wawancara.nilai}}</b-col>
                </b-row>
                <b-row>
                    <b-col>Umpan Balik</b-col>
                    <b-col>: {{tes_wawancara.feedback}}</b-col>
                </b-row>
            </v-card-text>

            <v-divider></v-divider>  
                <div v-if="!tes_wawancara.isEdit && !isValid" class="d-flex justify-content-center">
                    <v-btn color="black" class="mr-2 mb-3">
                        <v-icon color="white">
                            {{icons.pencil}}
                        </v-icon>
                        <b-button class="button" size="sm" v-b-modal.tes-wawancara @click="openModelUpdateTesWawancara()">Ubah</b-button>
                    </v-btn>

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
                    
                    <v-btn
                    outlined
                    color="black"
                    class="ml-2 mb-3"
                    v-if="!isValid"
                    >
                        <v-icon color="black">
                            {{icons.check}}
                        </v-icon>
                        <b-button class="button-secondary" size="sm" v-b-modal.valid-wawancara>Selesai</b-button>
                    </v-btn>

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
                    <!-- <template v-slot:modal-footer> -->
                        <!-- footer modal -->
                        <!-- i'm footer!
                    </template>
                        <p class="my-4">Vertically centered modal!</p> -->
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


export default {
    name:"tes-wawancara",
    components:{
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
                isEdit:false
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
                pelamarTesWawancara:{
                    idPelamar:this.id_pelamar}
                });
            await this.refreshTesWawancara();
            this.buka("Tes Wawancara Berhasil dibuat.");
            
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
            console.log(this.tes_wawancara.idTesWawancara);
            await TesService.updateTesWawancara(this.tes_wawancara.idTesWawancara,
            {
                nilai:this.form.nilai,
                feedback:this.form.feedback,
                isEdit:true,
                pelamarTesWawancara:{
                    idPelamar:this.id_pelamar}
                }
            );
            await this.refreshTesWawancara();
            this.buka("Tes Wawancara Berhasil diperbarui.");
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
            this.buka("Tes Wawancara Berhasil divalidasi");
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