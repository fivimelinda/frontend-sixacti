<template>
    <v-container>
        <b-row id="myTitle"><h3>Progres Pemenuhan Karyawan</h3></b-row>
        <v-card
            max-width="450"
            color="#FFE3E3"
            id="main">
            <v-card-title  dense class="white--text" id="subtitle">{{judul}}</v-card-title>
            <v-card-text id="info">Total pemenuhan {{totalSekarang}} / {{totalButuh}}</v-card-text>
            <div v-for="progres in listProgres" :key="progres.id">
                <v-divider light id="line"></v-divider>
                <v-card-text id="head" class="detail">
                    {{progres.tanggalDiterima | formatDateReq}}
                </v-card-text>
                <v-card-text class="detail">
                    Jumlah laki-laki: {{progres.jumlahLakilaki}}
                </v-card-text>
                <v-card-text class="detail">
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
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        },
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
        if (this.loggedIn) {
            this.loadProgres()
        }
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
#subtitle{
    color: white;
    font-weight: bold;
    font-family: 'archivo';
    background-color: #C53751;
    font-size: 18px;
    padding-top: 0;
    padding-bottom: 0;
}
#info{
    font-family: 'archivo';
    color: #7D0022;
    font-weight: bold;
    padding-bottom: 0;
    text-align: right;
}
#head{
    font-weight: bold;
    font-family: 'archivo';
}
#line{
    border-color: #878787;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
}
.detail{
    padding-top: 0;
    padding-bottom: 0;
    color: black;
}
</style>