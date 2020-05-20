<template>
    <div class="container pt-0">
    <div class="hasilTes">
    <h3 class="mt-5">Daftar Lamaran Pekerjaan</h3>
        <div class="container">
      
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4" v-for="i in daftarLowongan" v-bind:key="i.idLowongan">
            <div  class="card mb-4" id="cardLoker">
                <div class="card-header" id="cardHeader">
                <span id="titleCard">{{i.judulLoker}}</span>
                </div>
                <div class="card-body">
                <span v-if="i.deskripsi.length < 25 " class="mb-1" id="lokerDesc">{{i.deskripsi}}</span>
                <span v-else  class="mb-1" id="lokerDesc">{{i.deskripsi.substring(0,25) + " ..."}}</span>
                <p class="mt-1 mb-5" id="deptSect">{{i.departement}} - {{i.section}}</p>
                </div>
                <div class="card-footer" id="card-footer">
                <div class="row">
                    <div class="col-6 mb-3">
                        <!-- <div v-for="j in i.listLamaran" v-bind:key="j.id">
                            <div v-if="j.pelamar.userPelamar.nik == this.nik"> --> -->
                            <button class=" mt-5 mb-5 btn btn-danger" v-on:click="hasilTes()">Lihat Hasil Tes</button>
                            <!-- </div>
                         </div> -->
                    </div>
                </div>
                
                </div>
            </div>
            </div>
         </div>
         </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import authHeader from '../../service/AuthHeader';

export default {


    data() {
        return {
            daftarLowongan: "",
            daftarLamaran: "",
            idPelamar:""
            
        }
    },
    mounted() {
        this.load()
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
    created(){
        if (!this.loggedIn) {
            this.$router.push('/auth/login');
        } 
    },
    methods: {
        load() {
            axios.get('http://localhost:8081/api/lowonganPelamar/' + this.nik,{ headers:authHeader() }).then(res => {
                this.daftarLowongan = res.data;
                this.daftarLamaran = res.data.listLamaran;
                this.idPelamar = res.data.listLamaran.pelamar.userPelamar.idPelamar;
                console.log(res.data.listLamaran);
            }).catch((err) => {
                console.log(err);
            })
        },
        hasilTes(idPelamar){
            this.$router.push("/hasilTes/"+ idPelamar);
        },
        // checkProfil(){
        //   this.axios.get('http://localhost:8081/profil/users/'+this.$store.state.auth.user.id,{ headers:authHeader() }).then(res =>{
        //       this.usersData = res.data;
        //       this.nik = res.data.user.nik;
        //         })
        //     // )
        // },
    }

}
</script>

<style scoped>

#cardLoker{
  /* height: 300px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: left;
  min-height: 200px;
}

#cardHeader{
  border-style: none;
  background-color: white;
}

#card-footer{
  border-top-style: none ;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-bottom-color: #C53751;
  background-color: white;

}

#titleCard{
  color: #C53751;
  font-weight: bold;
  font-size: 32px;

}

#lokerDesc{
  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 15px;

  color: #736B6B;
}

#periodeDesc{
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;

  color: #7D0022;
}

#deptSect{
  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  /* identical to box height */


  color: #9B9B9B;

}

</style>