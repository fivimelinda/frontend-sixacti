<template>
    <div class="tes text" >
        <v-container v-if="data.status === 200 && !(data.data === null)">
            <b-card class="mb-5 mt-5">
                <b-card-text>
                    <b-row>
                        <b-col class="mx-auto my-auto" col md="4" lg="4">
                            <b-avatar class="ml-5" rounded="lg" variant="dark" size="16vw"></b-avatar>
                        </b-col>
                        <b-col class="my-auto" col md="8" lg="8">
                            <ol style="decoration:none !important">
                                <li class="name h4 mb-3">{{user.nama}}</li>
                                <li class="mb-3"><v-icon color="black" class="mr-3">{{icons.card}}</v-icon>{{user.no_ktp}}</li>
                                <li class="mb-3"><v-icon class="mr-3">{{icons.tgl}}</v-icon>{{user.tempat_lahir}}, {{user.tanggal_lahir}}</li>
                                <li class="mb-3"><v-icon color="red" class="mr-3">{{icons.location}}</v-icon>{{user.alamat}}</li>
                                <li class="mb-3"><v-icon color="green" class="mr-3">{{icons.phone}}</v-icon>{{user.no_hp}}</li>
                            </ol>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
            <div>
                <div class="text-md-left h5" style="color:#C53751">
                    Tes Medis
                </div>
                <hr/>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <tes-medis
                v-bind:tes_medis="tesMedis.data"
                v-bind:id_pelamar="idPelamar"
                @refreshTesMedis="loadNewTesMedis()"></tes-medis>
            </div>
            <div>
                <div class="text-md-left h5" style="color:#C53751">
                    Tes Tulis
                </div>
                <hr/>
                <tes-tulis
                v-bind:tes_tulis="tesTulis.data"
                v-bind:tes_medis="tesMedis.data"
                v-bind:id_pelamar="idPelamar"
                @refreshTesTulis="loadNewTesTulis()"></tes-tulis>
            </div>
            <div>
                <div class="text-md-left h5" style="color:#C53751">
                    Tes Wawancara
                </div>
                <hr/>
                <tes-wawancara
                v-bind:tes_wawancara="tesWawancara.data"
                v-bind:tes_tulis="tesTulis.data"
                v-bind:id_pelamar="idPelamar"
                @refreshTesWawancara="loadNewTesWawancara()"></tes-wawancara>
            </div>
        </v-container>
        <b-container v-else-if="data.data === null && data.status === 200" class="my-auto" style="height:100%;width:100%">
            <b-container class="my-auto h-100 w-50 mx-auto ">
            <b-card class="my-auto">
                <b-card-text>
                    <div class="alert alert-danger">
                        Data yang anda cari tidak dapat ditemukan!
                    </div>
                    <div class="d-flex justify-content-center">
                        <b-button class="button-back pl-5 pr-5" @click="errorBack()">Kembali</b-button>
                    </div>
                </b-card-text>
            </b-card>
            </b-container>
        </b-container>
        <b-container v-else-if="!(data.status === 200)" class="my-auto" style="height:100%;width:100%">
            <b-container class="my-auto h-100 w-50 mx-auto ">
            <b-card class="my-auto">
                <b-card-text>
                    <div class="alert alert-danger">
                       Erro Path, Gunakan Pattern Path yang sesuai dan dapat digunakan!
                    </div>
                    <div class="d-flex justify-content-center">
                        <b-button class="button-back pl-5 pr-5" @click="errorBack()">Kembali</b-button>
                    </div>
                </b-card-text>
            </b-card>
        </b-container>
        </b-container>
    </div>
</template>

<script>
import TesMedis from './TesMedis/TesMedis.vue'
import TesTulis from './TesTulis/TesTulis.vue'
import TesWawancara from './TesWawancara/TesWawancara.vue'
import axios from 'axios'

export default {
    name:"tes-layout",
    components : {
        TesTulis,
        TesMedis,
        TesWawancara
    },
    data(){
        return{
            icons:{
                card:'mdi-account-card-details',
                location:'mdi-map-marker-radius',
                handphone:'mdi-cellphone-android',
                phone:'mdi-phone',
                tgl:'mdi-table-large'
            },
            data:Object,
            user:Object,
            pelamar:Object,
            tesMedis:Object,
            tesTulis:Object,
            tesWawancara:Object,
            idPelamar : Number,
        }
    },

    //check error
    async created(){
        try{
            const URI = 'http://localhost:8081/api';
            this.idPelamar = Number(this.$route.params.id);
            this.user = this.$store.state.dummy[this.idPelamar-1]
            const getData = await axios.get(URI + "/pelamar/get/" + this.$route.params.id, {responseType:'json'});
            this.data = getData;
            this.pelamar = getData.data;
            const getTesMedis = await axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id, {responseType:'json'});
            this.tesMedis = getTesMedis;
            const getTesTulis = await axios.get(URI + "/tes/tulis/pelamar/" + this.$route.params.id, {responseType:'json'});
            this.tesTulis = getTesTulis;
            const getTesWawancara = await axios.get(URI + "/tes/wawancara/pelamar/" + this.$route.params.id, {responseType:'json'});
            this.tesWawancara = getTesWawancara;
            console.log(getTesMedis);
            console.log(getTesTulis);
            console.log(getTesWawancara);
            console.log(getData);
        }catch(error){
            console.log(error);
        }
    },
    async mounted(){
        try{
            const URI = 'http://localhost:8081/api';
            const getTesMedis = await axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id, {responseType:'json'});
            this.tesMedis = getTesMedis;
            console.log(getTesMedis);
            // console.log(getData);
        }catch(error){
            console.log(error)
        }
    },
    methods:{
        errorBack(){
             this.$router.push('/listPelamar');
        },
        async loadNewTesMedis(){
            try{
                const URI = 'http://localhost:8081/api';
                const getTesMedis =await axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id);
                this.tesMedis = getTesMedis;
            }catch(error){
                console.log(error);
            }
        },
        async loadNewTesTulis(){
            try{
                const URI = 'http://localhost:8081/api';
                const getTesTulis = await axios.get(URI + "/tes/tulis/pelamar/" + this.$route.params.id);
                this.tesTulis = getTesTulis;
            }catch(error){
                console.log(error);
            }
        },
        async loadNewTesWawancara(){
            try{
                const URI = 'http://localhost:8081/api';
                const getTesWawancara = await axios.get(URI + "/tes/wawancara/pelamar/" + this.$route.params.id);
                this.tesWawancara = getTesWawancara;
            }catch(error){
                console.log(error);
            }
        },
    }
}
</script>

<style lang="scss">
.text{
    font-family: 'oswald';
}
.button{
    border:none !important;
    color:white !important;
    background-color: black !important;
}
.button-secondary{
    border:none !important;
    color:black !important;
    background-color: transparent !important;
}
.button-back{
    color:black !important;
    background-color: transparent !important;
}
.button-back:hover{
    color:black !important;
    background-color: rgba(0, 0, 0, 0.096) !important;
}
.name{
    color:#C53751;
}

ol li{
  list-style-type: none;
}

.background{
    background-color: white !important;
}
</style>