<template>
    <div class="tes">
        <v-container>
            <div>
                <div class="text-md-left" style="color:#C53751">
                    Tes Medis
                </div>
                <hr/>
                <tes-medis
                v-bind:tes_medis="tesMedis.data"
                v-bind:id_pelamar="idPelamar"
                @refreshTesMedis="loadNewTesMedis()"></tes-medis>
            </div>
            <div>
                <div class="text-md-left" style="color:#C53751">
                    Tes Tulis
                </div>
                <hr/>
                <tes-tulis
                v-bind:tes_tulis="pelamar.tesTulis"></tes-tulis>
            </div>
            <div>
                <div class="text-md-left" style="color:#C53751">
                    Tes Wawancara
                </div>
                <hr/>
                <tes-wawancara
                v-bind:tes_wawancara="pelamar.tesWawancara"></tes-wawancara>
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
            console.log(getTesMedis);
            console.log(getData);
        }catch(error){
            console.log(error);
        }
    },
    async update(){
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
        loadNewTesMedis(){
            try{
                const URI = 'http://localhost:8081/api';
                const getTesMedis = axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id);
                this.tesMedis = getTesMedis;
            }catch(error){
                console.log(error);
            }
        },
    }
}
</script>

<style lang="scss">

.button{
    border:none !important;
    color:white !important;
    background-color: black !important;
}
.button-secondary{
    border:none !important;
    color:black !important;
    background-color: white !important;
}
hr{
    color:#C53751;
}
</style>