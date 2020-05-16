<template>
    <v-container>
        <b-row id="myTitle"><h3>Progres Pemenuhan Karyawan</h3></b-row>
        <v-card
            max-width="450"
            color="#FFE3E3"
            id="main">
            <v-card-title  dense class="white--text" id="title">{{judul}}</v-card-title>
            <v-card-text>Total pemenuhan {{totalSekarang}} / {{totalButuh}} :</v-card-text>
            <div v-for="progres in listProgres" :key="progres.id">
                <v-card-text>
                    {{progres.tanggalDiterima | formatDateReq}}
                </v-card-text>
                <v-card-text>
                    Jumlah laki-laki: {{progres.jumlahLakilaki}}
                </v-card-text>
                <v-card-text>
                    Jumlah perempuan: {{progres.jumlahPerempuan}}
                </v-card-text>
            </div>
        </v-card>
    </v-container>
</template>

<script>
import ProgresService from '../../service/ProgresService'
import Vue from 'vue'
import moment from 'moment'
Vue.filter('formatDateReq', function(value){
  if(value){
    return moment(String(value)).format("DD MMMM YYYY")
  }
});
export default {
    data(){
        return{
            listProgres:[],
            totalButuh:'',
            totalSekarang:0,
            judul:''
        }
    },
    computed: {
        reqLokerId() {
            return this.$route.params.idLoker;
        },
        
    },
    methods:{
        loadProgres(){
            ProgresService.getListProgres(this.reqLokerId).then(res =>{
                if (res != null){
                    this.listProgres = res.data;
                    this.countCurrent()
                } else if (res == null){
                    this.totalSekarang = 0;
                }
            })
            ProgresService.getDetailLoker(this.reqLokerId).then(res =>{
                this.totalButuh = res.data.jumlah;
                this.judul = res.data.judul;
            })
        },
        countCurrent(){
            var listProgres = this.listProgres
            for (let i = 0; i < listProgres.length; i++) {
                this.totalSekarang += Number(listProgres[i].jumlahLakilaki)
                this.totalSekarang += Number(listProgres[i].jumlahPerempuan)
                
            }
        }
    },
    created(){
        this.loadProgres()
    }

}
</script>
<style scoped>
#myTitle{
    font-family: 'oswald';
    color: black;
    text-align: left;
    margin-bottom: 15px;
    margin-left: 5px;
}
</style>