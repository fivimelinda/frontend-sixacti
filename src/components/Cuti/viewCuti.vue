<template>
    <v-container class="mt-sm-12">
        <div class="addCuti">
            <b-row id="myTitle">
                <h3> Pengajuan Cuti</h3>
            </b-row>
            <b-row>
            <a v-on:click="lihatRiwayat" id="link">Lihat Riwayat Cuti</a>
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
import CutiService from '../../service/CutiService'
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
            cutiData: null,
            karyawanId:''
        }
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods:{
        move(){
            this.$router.push('/formCuti/' + this.karyawanId)
        },
        getCutiActive(){
            CutiService.getCutiActive(this.currentUser.nik).then(response => {
                if (response.data.cutiActive == "true"){
                    this.cutiData = response.data
                    this.cutiActive = true
                    this.karyawanId = response.data.idKaryawan
                } else if (response.data.sisaCuti == "0" ){
                    this.cutiHabis = true
                    this.karyawanId = response.data.idKaryawan
                }

            })
        },
        lihatRiwayat(){
            this.$router.push('/lihatRiwayatCuti/'+ this.karyawanId);
        }

    },
    created(){
        if (this.loggedIn) {
            this.getCutiActive()
        }
    }
}
</script>
<style scoped>
h1{
    margin-left: 0px;
}
#myTitle{
    font-family: 'oswald';
    color: black;
    text-align: left;
    margin-bottom: 5px;
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
#link{
    margin-top: 5px;
    margin-bottom: 20px;
    color: #7D0022;
    margin-left: 15px;

}
</style>