<template>
    <div class="tes text">
        <v-container>
            <b-card class="mb-5 mt-5">
                <b-card-text>
                    <b-row>
                        <b-col col md="4">
                            <b-avatar rounded="lg" variant="dark"></b-avatar>
                        </b-col>
                        <b-col col md="8">a</b-col>
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

            const getData = await axios.get(URI + "/pelamar/get/" + this.$route.params.id, {responseType:'json'});
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
hr{
    color:#C53751;
}

.background{
    background-color: rgba(255, 227, 227, 0.637) !important;
}
</style>