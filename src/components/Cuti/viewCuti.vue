<template>
    <v-container class="mt-sm-10">
        <div class="addCuti">
            <b-row id="title">
                <h1> Pengajuan Cuti</h1>
            </b-row>
            <b-row v-if="cutiActive">
                <cardCuti v-bind:cutiData="cutiData"/>
            </b-row>
            <b-row id="sub-title" v-else-if="cutiHabis" v-show="!cutiActive">
                <h4>Sisa cuti anda sudah habis, anda tidak dapat mengajukan cuti</h4>
            </b-row>
            <span v-if="!cutiActive" v-show="!cutiHabis">
            <b-row id="sub-title" >
                <h4>Anda tidak memiliki pengajuan cuti</h4>
            </b-row>
            <b-row id="btnCuti">
                <v-btn color="#C53751" class="white--text" v-on:click="move">
                    <v-icon left class="white--text">mdi-plus-circle</v-icon>
                    Buat Pengajuan Cuti
                </v-btn>
            </b-row>
            </span>
        </div>
    </v-container>
</template>
<script>
import axios from 'axios'
const cardCuti = () => ({
    component: import('./cardCuti')
})
export default {
    components:{ 
        cardCuti,
    },
    data(){
        return{
            cutiHabis: false,
            cutiActive: false,
            cutiData: null
        }
    },
    methods:{
        move(){
            this.$router.push({
                name: 'formCuti'
            })
        },
        getCutiActive(){
            console.log('z')
            axios.get('http://localhost:5000/api/cuti/diajukan/get?karyawanId=1').then(response => {
                if (response.data.cutiActive == "true"){
                    this.cutiData = response.data
                    this.cutiActive = true
                    console.log('b')
                } else if (response.data.sisaCuti == "0" ){
                    console.log('gg')
                    this.cutiHabis = true
                }

            })
        }

    },
    created(){
        this.getCutiActive()
        console.log('a')
    }
}
</script>
<style scoped>
#title{
    font-family: 'oswald';
    color: black;
    text-align: left;
    margin-bottom: 30px;
    margin-left: 5px;
}
#sub-title{
    font-family: 'oswald';
    color: black;
    text-align: left;
    margin-bottom: 30px;
    margin-left: 5px;
}
#btnCuti{
    margin-left: 5px;
}
</style>