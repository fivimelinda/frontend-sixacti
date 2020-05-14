<template>
    <v-container class="text">
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <v-card
        class="my-auto mx-auto mt-5"
        >
            <b-card>
                <div class="h5">Data Atribut</div>
                <hr style="border-top: 3px solid #C53751;"/>

                <div class="p-3">
                    <v-card
                    max-width="576"
                    class="mx-auto my-auto"
                    style="box-shadow:none">
                        <b-card 
                        class="mx-auto my-auto"
                        header-tag="header"
                        header-variant="header"
                        style="">
                            <template v-slot:header>
                                <div class="d-flex justify-content-between">
                                    <h6 class="mt-2 p-0 text-center">Atribut</h6>
                                    <b-button style="background-color:transparent; border:none" v-if="!atribut.status" size="sm" id="popover-info"><strong><b-icon-info-circle></b-icon-info-circle></strong></b-button>
                                    <b-popover
                                        variant="danger"
                                        target="popover-info"
                                        placement="bottomLeft"
                                        title="Notifikasi!"
                                        triggers="hover focus"
                                    >
                                    <div>Atribut belum diambil!</div>
                                    </b-popover>
                                    
                                    <b-button style="background-color:transparent; border:none" v-if="atribut.status" size="sm" id="popover-sukses"><strong><b-icon-info-circle></b-icon-info-circle></strong></b-button>
                                    <b-popover
                                        variant="success"
                                        target="popover-sukses"
                                        placement="bottomLeft"
                                        title="Notifikasi!"
                                        triggers="hover focus"
                                    >
                                    <div>Atribut telah diambil!</div>
                                    </b-popover>
                                </div>
                                
                            </template>
                            <b-card-text>
                                <div v-if="!(pelamar.atribut === null)">
                                    <b-row class="m-0 p-0">
                                        <b-col class="pb-0 mb-0">Ukuran Sepatu</b-col>
                                        <b-col class="pb-0 mb-0">:    {{atribut.ukuran_sepatu}}</b-col>
                                    </b-row>
                                    <b-row class="m-0 p-0">
                                        <b-col class="mt-0 pb-0 mb-0">Ukuran Baju Seragam</b-col>
                                        <b-col class="mt-0 pb-0 mb-0">:    {{atribut.ukuran_baju}}</b-col>
                                    </b-row>
                                    <b-row class="m-0 p-0">
                                        <b-col class="mt-0 pb-0 mb-0">Ukuran Jas Lab</b-col>
                                        <b-col class="mt-0 pb-0 mb-0">:    {{atribut.ukuran_jas_lab}}</b-col>
                                    </b-row>
                                    <b-row class="m-0 p-0">
                                        <b-col class="mt-0">Ukuran Helm</b-col>
                                        <b-col class="mt-0">:    {{atribut.ukuran_helm}}</b-col>
                                    </b-row>
                                    <div class="d-flex justify-content-center">
                                        <v-btn class="p-0" color="#C53751"><b-button class="button-primary pl-5 pr-5" size="sm" 
                                        variant="light" v-b-modal.atribut @click="openModelUpdateAtribut()">Ubah</b-button></v-btn>
                                        <!-- pop up ubah -->
                                        <div>
                                            <b-modal
                                            header-variant="header"
                                            scrollable
                                            hide-footer
                                            v-model="success"
                                            id="atribut"
                                            title="BootstrapVue"
                                            ref="atribut"
                                            >
                                            
                                            <template v-slot:modal-header="{ close }">
                                            <!-- Emulate built in modal header close button action -->
                                            
                                            <h5>Ubah Atribut</h5>
                                            <b-button class="" size="sm" variant="outline-danger" @click="close()">
                                                <div class="mr-1 ml-1">X</div>
                                            </b-button>
                                            </template>
                
                                            <form-atribut
                                            v-bind:form="form"
                                            @simpan="ubahAtribut()"
                                            >
                                            </form-atribut>
                                            </b-modal>
                                        </div>
                                    </div>
                                </div>
                                <!-- main form -->
                                <div v-else>
                                    <form-atribut
                                    v-bind:form="form"
                                    @simpan="tambahAtribut()"></form-atribut>
                                </div>
                            </b-card-text>
                        </b-card>
                    </v-card>
                </div>
            </b-card>
        </v-card>
    </v-container>
</template>

<script>
import FormAtribut from './FormAtribut.vue'
import axios from 'axios'
import { SweetModal } from 'sweet-modal-vue'
import AtributService from '../../service/AtributService'
import {BIconInfoCircle} from 'bootstrap-vue'

export default {
    name:'atribut',
    validations:{

    },
    components:{
        BIconInfoCircle,
        FormAtribut,
        SweetModal
    },
    data(){
        return{
            success:false,
            pelamar:Object,
            atribut:Object,
            message:'',
            form:{
                ukuran_sepatu:'',
                ukuran_baju:'',
                ukuran_jas_lab:'',
                ukuran_helm:'',
                status:false
            }
        }
    },
    methods:{
        async loadNewAtribut(){
            try{
                const URI = 'http://localhost:8081/api';
                const getPelamar =await axios.get(URI + "/pelamar/get/" + this.$route.params.id);
                this.pelamar = getPelamar.data;
                this.atribut = this.pelamar.atribut;
            }catch(error){
                console.log(error);
            }
        },

        async tambahAtribut(){
            await AtributService.createAtribut(Number(this.idPelamar),{
                ukuran_sepatu:this.form.ukuran_sepatu,
                ukuran_baju:this.form.ukuran_baju,
                ukuran_jas_lab:this.form.ukuran_jas_lab,
                ukuran_helm:this.form.ukuran_helm,
                status:this.form.status,
                }
            );
            // notif
            this.notifikasi("Atribut berhasil ditambahkan!");
            // reload
            await this.loadNewAtribut();
        },

        async ubahAtribut(){
            await AtributService.updateAtribut(this.atribut.id_atribut,
            {
                ukuran_sepatu:this.form.ukuran_sepatu,
                ukuran_baju:this.form.ukuran_baju,
                ukuran_jas_lab:this.form.ukuran_jas_lab,
                ukuran_helm:this.form.ukuran_helm,
                status:this.atribut.status
            }
            );
            await this.loadNewAtribut();
            this.notifikasi("Atribut berhasil diubah!");

            this.$nextTick(() => {
                this.$bvModal.hide('atribut')
            })
        },

        notifikasi(msg){
            this.message=msg;
            this.$refs.modal.open();
        },

        openModelUpdateAtribut(){
            this.form.ukuran_sepatu=this.atribut.ukuran_sepatu;
            this.form.ukuran_baju=this.atribut.ukuran_baju;
            this.form.ukuran_jas_lab=this.atribut.ukuran_jas_lab;
            this.form.ukuran_helm=this.atribut.ukuran_helm;
        },
    },

    async created(){
        const URI = 'http://localhost:8081/api';
        this.idPelamar = Number(this.$route.params.id);
        const getData = await axios.get(URI + "/pelamar/get/" + this.$route.params.id, {responseType:'json'});
        this.pelamar = getData.data;
        console.log(this.pelamar);
        if(!(this.pelamar.atribut === null)){
            this.atribut = this.pelamar.atribut;
        }
    },
}
</script>

<style lang="scss" scoped>
    .card-header{
        background-color: #C53751;
        color:white;
    }
    .modal-header{
        background-color: #C53751;
        color:white;
    }
    .text{
    font-family: 'oswald';
    }

    .button-primary{
        color:white !important;
        background-color: #C53751 !important;
        border:none;
    }
</style>