<template>
    <div class="all">
        <br>
        <br>
        <div>
            <br>
            <p class="title-top">Buat Kontrak</p>
        </div> 
        <br>
        <div class="box-up">
            <p class="box-text">Daftar Karyawan</p>
        </div>

        <table class="table table-hover">
            <thead class="table-borderless">
                <tr class="tr-top">
                    <th scope="col">No.</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Nomor KTP</th>
                </tr>
            </thead>
            <tbody class="tbody">
                <tr v-for="(det,index) in karyawan" :key="det.id" class="content" v-on:click="click(det.id,det.user.nama,det.user.nik)">
                    <th scope=row class="th-bottom">{{index+1}}</th>
                    <td>{{det.user.nama}}</td>
                    <td>{{det.user.nik}}</td>
                    <td>
                        <div v-if= "det.status == false">Belum digenerate</div>
                        <div v-if= "det.status == true">Sudah digenerate</div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import axios from 'axios'
import authHeader from '../../service/AuthHeader'

export default {
    data(){
        return {
            karyawan: []
        }
    },
    mounted(){
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
    methods: {
        load(){
            axios.get('http://localhost:8081/detailKontrak/karyawan', { headers:authHeader() }).then(res => {
                this.karyawan = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        click: function(id,nama,nik){
            window.location.href = "/BuatSuratKontrakDetail/"+id+"/"+nama+"/"+nik;

        }
    }
}
</script>

<style>
.table-hover tbody tr:hover td, .table-hover tbody tr:hover th{
    background-color: #FFDDE3;
}

.th-bottom:hover{
    border-left: 3px solid red;
}
.content{
    background-color: white;
    border: 0.5 px solid black;
}
.tbody{
    box-shadow: 1px 1px 1px #999;
}
.table {
    margin-left: 20px;
    margin-right: 20px;
    width: 97% !important;
}
.table-borderless{
    font-family: "archivo";
}
.title-top{
    font-family: "oswald";
    font-size: 30px;
    margin-left: 20px;
}
.nav {
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-left: 20px;
}

.brearcrumb-a{
    font-family: "Archivo";
    font-size: 15px;
    color: #848484;
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

</style>