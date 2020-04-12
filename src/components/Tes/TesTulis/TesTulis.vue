<template>
    <v-container>
        <!-- modal information -->
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="failed">{{message}}</sweet-modal>

        <!-- form tes -->
        <form-tes-tulis v-if="isCreate && !isSubmit"
        v-bind:isCreate="isCreate"
        v-bind:form="form" @submit="subsub()" @batal="cancle()"></form-tes-tulis>
        
        <div>
        <div v-if="!isCreate" class="d-flex justify-center">
            <v-btn color="#C53751"><v-icon color="white">{{icons.plus}}</v-icon><b-button class="button-primary" @click="create()" size="sm">Tambah Tes Tulis</b-button></v-btn>
        </div>
        <v-card
         
        class="mx-auto"
        max-width="600"
        >
            <v-card-title>
                <div class="subtitle-1">
                    Tes Tulis
                </div>
            </v-card-title>
            <v-card-text>
                <div>Nama : {{dummy.name}}</div>
                <b-row>
                    <b-col>Nilai</b-col>
                    <b-col>: {{dummy.nilai}}</b-col>
                </b-row>
            </v-card-text>
            <v-divider></v-divider>  
                <div v-if="!isValid" class="d-flex justify-content-center">
                    <v-btn color="black" class="mr-2 mb-3">
                        <v-icon color="white">
                            {{icons.pencil}}
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
    </v-container>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import FormTesTulis from './FormTesTulis.vue'

export default {
    name:"tes-tulis",
    components:{
        SweetModal,
        FormTesTulis
    },
    data(){
        return{
            form:{
                nilai:"",
            },
            icons:{
                plus:'mdi-plus'
            },
            isOpen : false,
            isCreate : false,
            isUpdate : false,
            isSubmit:false,
            isValid:false,
            message:"",
            dummy:{
                name:"dummy",
                nilai:"90"
            }
            
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