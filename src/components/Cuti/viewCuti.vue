<template>
    <v-container class="mt-sm-12">
        <div class="addCuti">
            <b-row id="myTitle">
                <h3> Pengajuan Cuti</h3>
            </b-row>
            <b-row>
                <b-col>
                    <v-icon color="yellow">mdi-information</v-icon>
                   <span> Sisa Cuti: {{sisa}} </span>
                </b-col>
                <v-spacer></v-spacer>
                <b-col>
                    <a v-on:click="lihatRiwayat" id="link">Lihat Riwayat Cuti</a>
                </b-col>
            </b-row>
            <v-divider id="line" style="margin-bottom:15px"></v-divider>
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
        <b-modal size="lg" ref="error-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        {{errormessage}}
                    </div>
                    <div class="col-sm">
                        <!-- <v-img
                                :src="require('../assets/success.png')"></v-img> -->
                        <!-- <img src = "'src/assets/success.png'"> -->
                        <v-img class="gagal"
            :src="require('@/assets/fail.png')"
            ></v-img>
                    </div>
                </div>
            </div>
            
        </b-modal>
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
            karyawanId:'',
            errormessage:'',
            sisa:''
        }
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        },
        nik(){
            return this.$store.state.auth.user.user.nik;
        }
    },
    methods:{
        move(){
            console.log(this.karyawanId)
            this.$router.push('/formCuti/' + this.karyawanId)
        },
        getCutiActive(){
            CutiService.getCutiActive(this.nik).then(response => {
                if (response.data.cutiActive == "true"){
                    this.cutiData = response.data
                    this.cutiActive = true
                } else if (response.data.sisaCuti == "0" ){
                    this.cutiHabis = true
                }
                this.karyawanId = response.data.idKaryawan
                this.sisa = response.data.sisaCuti
            })
            .catch((err) => {
                this.errormessage = err.message
                this.errorModal()
            })
        },
        lihatRiwayat(){
            this.$router.push('/lihatRiwayatCuti/'+ this.karyawanId);
        }

    },
    created(){
        if (this.loggedIn) {
            if (this.currentUser.role[0] === "ROLE_KARYAWANTETAP"){
                this.getCutiActive()
            } else{
                this.$router.push('/403')
            }
        } else{
            this.$router.push('/auth/login');
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