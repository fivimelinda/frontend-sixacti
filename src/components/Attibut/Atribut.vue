<template>
<div class=" text background mb-3 h-100 jumbotron">
    <v-container class="p-3">
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <v-card
        class="my-auto mx-auto mb-5"
        >
            <b-card>
                <div class="h5">Data Atribut</div>
                <hr style="border-top: 3px solid #C53751;"/>

                <div class="p-3">
                    <v-card
                    max-width="500"
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
                                    <div v-if="!(pelamar.atribut === null)">
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
                                </div>
                                
                            </template>
                            <b-card-text>
                                <div style="color:rgb(110, 109, 109)" v-if="!(pelamar.atribut === null)">
                                    <b-row class="mt-1">
                                        <b-col class="pt-0 mt-1 pb-0 mb-1">Ukuran Sepatu</b-col>
                                        <b-col class="pt-0 mt-1 pb-0 mb-1">:    {{atribut.ukuran_sepatu}}</b-col>
                                    </b-row>
                                    <b-row class="mt-1">
                                        <b-col class="pt-0 mt-1 pb-0 mb-1">Ukuran Baju Seragam</b-col>
                                        <b-col class="pt-0 mt-1 pb-0 mb-1">:    {{atribut.ukuran_baju}}</b-col>
                                    </b-row>
                                    <b-row class="mt-1">
                                        <b-col class="pt-0 mt-1 pb-0 mb-1">Ukuran Jas Lab</b-col>
                                        <b-col class="pt-0 mt-1 pb-0 mb-1">:    {{atribut.ukuran_jas_lab}}</b-col>
                                    </b-row>
                                    <b-row class="mt-1">
                                        <b-col class="pt-0 mt-1">Ukuran Helm</b-col>
                                        <b-col class="pt-0 mt-1">:    {{atribut.ukuran_helm}}</b-col>
                                    </b-row>
                                    <hr style="border:1px solid #C53751"/>
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
</div>
</template>

<script>
import FormAtribut from './FormAtribut.vue'
import axios from 'axios'
import { SweetModal } from 'sweet-modal-vue'
import AtributService from '../../service/AtributService'
import {BIconInfoCircle} from 'bootstrap-vue'
import authHeader from '../../service/AuthHeader'

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
                ukuran_sepatu:null,
                ukuran_baju:null,
                ukuran_jas_lab:null,
                ukuran_helm:null,
                status:false
            }
        }
    },
    computed:{
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted(){
        if (!this.loggedIn) {
            this.$router.push('/auth/login');
        }else if (!(this.currentUser.roles[0].roleName === 'ROLE_PELAMAR')){
            this.$router.push('/');
        }
        // }else if(false){
        //     this.$router.push('403');
        // }
    },
    methods:{
        async loadNewAtribut(){
            try{
                const URI = 'https://sixacti-api.herokuapp.com/api';
                const getPelamar =await axios.get(URI + "/pelamar/get/" + this.$route.params.id,{headers:authHeader()});
                this.pelamar = getPelamar.data;
                this.atribut = this.pelamar.atribut;
            }catch(error){
                console.log(error);
            }
        },

        async tambahAtribut(){
            await AtributService.createAtribut(Number(this.$route.params.id),{
                ukuran_sepatu:this.form.ukuran_sepatu,
                ukuran_baju:this.form.ukuran_baju,
                ukuran_jas_lab:this.form.ukuran_jas_lab,
                ukuran_helm:this.form.ukuran_helm,
                status:this.form.status,
                },{headers:authHeader()});
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
            },{headers:authHeader()}
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
        const URI = 'https://sixacti-api.herokuapp.com/api';
        // const pl= await axios.get(URI+"/getPelamar/"+ this.currentUser.user.nik);
        const getData = await axios.get(URI + "/pelamar/get/" + this.$route.params.id, {responseType:'json', headers:authHeader()});
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
    .background{
    background-color: #F6EDF0 !important;
}
</style>