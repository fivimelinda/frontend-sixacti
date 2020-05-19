<template>
    <div class="hasilTes">
    <div>
        <br>
        <p class="title-top">Daftar Lowongan</p>
    </div>
    <div class="box-up">
        <p class="box-text">Daftar Lowongan</p>
    </div>
    <table class="table table-hover">
        <thead class="table-borderless">
            <tr class="tr-top">
                <!-- <th scope="col">No.</th> -->
                <th scope="col">Nama Lowongan </th>
                <th scope="col">Action</th>
                <!-- <th scope="col">Action</th> -->
            </tr>
        </thead>
        <tbody class="tbody">
            <tr v-for="i in daftarLowongan" :key="i.idLowongan" class="content">
                <td>{{i.judulLoker}}</td>
                <td>
                    <button class=" mt-5 mb-5 btn btn-dark" v-on:click="hasilTes(i.listLamaran.idPelamar)">Lihat Hasil Tes</button>
                </td>

            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import axios from 'axios';
import authHeader from '../../service/AuthHeader';

export default {


    data() {
        return {
            daftarLowongan: "",
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
        idPelamar(){
            return this.$route.params.idPelamar;
        }
    },
    created(){
        if (!this.loggedIn) {
            this.$router.push('/auth/login');
        }
    },
    methods: {
        load() {
            axios.get('http://localhost:8081/api/lowonganPelamar/' + this.currentUser.user.nik,{ headers:authHeader() }).then(res => {
                this.daftarLowongan = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        hasilTes(){
            this.$router.push("/hasilTes/"+ this.idPelamar);
        }
    }

}
</script>

<style scoped>

.button-wrapper{
    text-align: justify;
}

.tbody{
    box-shadow: 1px 1px 1px #999;
}

.table-borderless{
    font-family: "archivo";
}

.title-top{
    font-family: "oswald";
    font-size: 30px;
    margin-left: 20px;
}

.atribut{
    background-color: #F6EDF0;
    height:100%;
}

.content{
    background-color: white;
    border: 0.5 px solid black;
}

.table {
    margin-left: 20px;
    margin-right: 20px;
    width: 97% !important;
}

thead{
    color: #8F8F8F;
}

.box-up{
    background-color: #C53751;
    margin-left: 20px;
    /* margin-right: 34px; */
    width: 97% !important;
}

.box-text{
    color: white;
    margin-left: 15px;
    padding: 10px;
}

.table-hover tbody tr:hover td, .table-hover tbody tr:hover th{
    background-color: white;
}

.th-bottom:hover{
    border-left: 3px solid red;
}

.brearcrumb-a{
    font-family: "Archivo";
    font-size: 15px;
    color: #848484;
}

a:link, a:active, a:hover, a:visited {
    color: #848484 !important;
    text-decoration: none;
}

v-application a{
    color: #848484;
}

.nav {
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-left: 20px;
}

.nav li {
  display: inline-block;
  padding: 2px;
}

#close-me{
    width: 80px;
}

</style>