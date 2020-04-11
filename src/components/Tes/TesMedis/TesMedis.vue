<template>
    <v-container>
        <!-- modal information -->
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="failed">{{message}}</sweet-modal>

        <!-- form tes -->
        <form-tes-medis v-if="isCreate"
        v-bind:isCreate="isCreate"
        v-bind:form="form" @submit="subsub()"></form-tes-medis>

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
                        <div>Nama : {{data.name}}</div>
                        <div>Berat Badan        : {{data.tes.berat_badan}}</div>
                        <div>Tinggi Badan       : {{data.tes.tinggi_badan}}</div>
                        <div>Tekanan Darah      : {{data.tes.tekanan_darah}}</div>
                        <div>Buta Warna         : {{data.tes.buta_warna}}</div>
                        <div>Riwayat Penyakit   : {{data.tes.riwayat_penyakit}}</div>
                    </v-card-text>
                </v-card>
            </div>
        </div>
        
        <div v-if="!isOpen">
        <div class="d-flex justify-center">
            <v-btn
            class="m-3"
            @click="create()"
            >
            <v-icon>{{mdi.plus}}</v-icon>
                Tambah Tes Tulis
            </v-btn>
        </div>
        
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
                <div v-if="!validasi">
                    <v-card-actions>
                        <!-- modal update -->
                    <v-dialog
                    max-width="600px"
                    v-model="dialog"
                    >
                    <template v-slot:activator="{on}">
                        <v-btn
                        @click="update()"
                        class="mr-4"
                        v-on="on"
                        >
                        <v-icon>
                            {{icons.mdiPencil}}
                        </v-icon>
                        Ubah
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                        >
                            Ubah Tes Medis
                        </v-card-title>
                        <v-card-text>
                            <form-tes-medis
                            v-if="isUpdate"
                            v-bind:isUpdate="isUpdate"
                            v-bind:form="{
                                berat_badan:person.tes.berat_badan,
                                tinggi_badan:person.tes.tinggi_badan,
                                tekanan_darah:person.tes.tekanan_darah,
                                buta_warna:person.tes.buta_warna,
                                riwayat_penyakit:person.tes.riwayat_penyakit
                            }" @submit="subsub()"></form-tes-medis>
                        </v-card-text>
                        <!-- <v-card-actions>
                            <v-btn class="mr-3" @click="simpan(person)">Simpan</v-btn>
                            <v-btn>Batal</v-btn>
                        </v-card-actions> -->
                    </v-card>
                    </v-dialog>
                        <v-btn
                        @click="valid()"
                        v-if="!validasi"
                        >
                            <v-icon>
                                {{mdi.check}}
                            </v-icon>
                            valid
                        </v-btn>
                    </v-card-actions>
                </div>
        </v-card>
        </div>
        <!-- modal bootstrap -->
        
            <!-- <b-button v-b-modal.modal-center>Launch centered modal</b-button> -->
            <!-- <modal-success v-bind:success="success"></modal-success> -->
            <!-- <b-modal
            v-model="success"
            id="modal-center"
            centered
            title="BootstrapVue"
            >
            <template
            v-slot:modal-header> -->
                <!-- header modal -->
                <!-- <form-tes-medis
                            v-bind:form="form" @submit="subsub()"></form-tes-medis>
            </template>
            <template v-slot:modal-footer> -->
                <!-- footer modal -->
                <!-- i'm footer!
            </template>
                <p class="my-4">Vertically centered modal!</p>
            </b-modal> -->
        
        <!-- form muncul -->
        <!-- <div v-if="open"
        class="m-3">
            <v-card
            max-width="765px"
            class="my-auto mx-auto"
            >
                <v-card-text>
                    <v-form>            
                        <v-text-field label="Berat Badan" required
                            v-model="berat_badan"></v-text-field>
                        <v-text-field label="Tinggi Badan" required
                        v-model="tinggi_badan"></v-text-field>
                        <v-text-field label="Tekanan Darah" required
                        v-model="tekanan_darah"></v-text-field>
                        <v-container fluid>
                        <div>Buta Warna</div>
                            <v-radio-group row justify="space-around" class="my-auto"
                            v-model="buta_warna">
                                <v-radio
                                label="Tidak"
                                value="tidak">
                                </v-radio>
                                <v-radio
                                label="Partial"
                                value="partial">
                                </v-radio>
                                <v-radio
                                label="Total"
                                value="Total">
                                </v-radio>
                            </v-radio-group>
                        </v-container>
                        <v-text-field label="Riwayat Penyakit"
                        v-model="riwayat_penyakit"></v-text-field>
                        <v-btn class="m-4" @click="submit()">Submit</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </div> -->
    </v-container>
</template>

<script>
import {mdiPencil} from '@mdi/js'
import { SweetModal } from 'sweet-modal-vue'
import FormTesMedis from './FormTesMedis.vue'

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
                riwayat_penyakit:''
            },
            isOpen : false,
            isCreate : false,
            isUpdate : false,
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
        update(){
            this.isUpdate = true;
        },
        subsub(){
            const people = {
                name:"bambang",
                    tes:{
                        berat_badan:this.form.berat_badan,
                        tinggi_badan:this.form.tinggi_badan,
                        tekanan_darah:this.form.tekanan_darah,
                        buta_warna:this.form.buta_warna,
                        riwayat_penyakit:this.form.riwayat_penyakit
                    }
                }
            this.new_data.push(people);
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

</style>