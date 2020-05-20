<template>
<div class="all">
    <br>
    <ul class="nav">
        <li><a class="brearcrumb-a" href="/">Home</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" href="/RequestLowongan">Request Lowongan Pekerjaan</a></li>
    </ul>
    <div>
        <br>
        <p class="title-top">Request Lowongan Pekerjaan</p>
    </div>
    <!-- <div>
        <ul v-for ="req in requestLowongan" :key="req.id">
            <li>
                <span>
                    {{req.jobTitle}}
                </span>
            </li>
        </ul>
    </div> -->
    <router-link to="/RequestLowongan/add">
        <button class="tambah"> &#43; Tambah Request Lowongan Baru</button>
    </router-link>
    <br>
    <br>
    <br>
    <div class="box-up">
        <p class="box-text">Riwayat Request Lowongan Pekerjaan</p>
    </div>
    <table class="table table-hover">
        <thead class="table-borderless">
            <tr class="tr-top">
                <th scope="col">No.</th>
                <th scope="col">Judul</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Tanggal diinginkan</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody class="tbody">
            <tr v-for="(req,index) in requestLowongan.slice().reverse()" :key="req.id" v-on:click="click(req)"  class="content">
                <th scope=row class="th-bottom" v-bind="add()">{{index+1}}</th>
                <td>{{req.jobTitle}}</td>
                <td>{{req.jumlah}}</td>
                <td>{{req.dateWanted}}</td>
                <td>{{req.status}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'
import authHeader from '../../service/AuthHeader'

export default {
    data() {
        return {
            requestLowongan: [],
            counter2: 1
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
        }
    },
    created(){
        if (!this.loggedIn) {
            this.$router.push('/auth/login');
        }
        if(this.loggedIn){
            if(this.currentUser.role[0] === "ROLE_DEPARTMENTMANAGER" || 
                this.currentUser.role[0] === "ROLE_PELAMAR" ||
                this.currentUser.role[0] === "ROLE_KARYAWANTETAP"||
                this.currentUser.role[0] === "ROLE_ASSISTANTMANAGER"||
                this.currentUser.role[0] === "ROLE_ADMIN"||
                this.currentUser.role[0] === "ROLE_KARYAWANKONTRAK"){
                    this.$router.push('/403')
                }
        }
    },
    methods: {
        load() {
            axios.get('http://localhost:8081/request/all',{ headers:authHeader() }).then(res => {
                this.requestLowongan = res.data
            }).catch((err) => {
                console.log(err);
            })
        },

        click: function (req) {
            console.log("Clicked with "+ req.id);
            window.location.href= "/RequestLowongan/"+req.id;
        },

        add(){
            this.counter2 ++;
        },

        getLast(){
            return this.counter2-(this.requestLowongan.length*100)
        }
    }
}
</script>

<style scoped>
.tambah{
    float: right;
    margin-right: 33px;
    background-color: #C53751;
    color: white;
    padding: 10px;
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

.all{
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
    background-color: #FFDDE3;
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


</style>