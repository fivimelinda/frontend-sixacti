<template>
    <div class="all">
        <br>
        <ul class="nav">
            <li><a class="brearcrumb-a" href="/">Home</a></li>
            <li><p class="breadcrumb-a">></p></li>
            <li><a class="brearcrumb-a" href="/GenerateSuratKontrak">Generate Surat </a></li>
        </ul>
        <div>
            <br>
            <p class="title-top">Generate Surat Kontrak</p>
        </div>  
        <br>
        <div class="box-up">
            <p class="box-text">Daftar Surat Kontrak</p>
        </div>

        <table class="table table-hover">
            <thead class="table-borderless">
                <tr class="tr-top">
                    <th scope="col">No.</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Tanggal Mulai</th>
                    <th scope="col">Tanggal Berakhir</th>
                    <th scope="col">Departemen</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody class="tbody">
                <tr v-for="(det,index) in detailKontrak.slice().reverse()" :key="det.id" v-on:click="click(det,index)" class="content" v-bind="add()">
                    <th scope=row class="th-bottom">{{index+1}}</th>
                    <td>{{name[index]}}</td>
                    <td>{{det.tanggal_mulai.substring(0,10)}}</td>
                    <td>{{det.tanggal_berakhir.substring(0,10)}}</td>
                    <td>{{departemen[index]}}</td>
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
    data() {
        return {
            detailKontrak2: [],
            perPage: 1,
            currentPage: 1,
            detailKontrak: [],
            name: [],
            departemen: [],
            counter: 0,
            items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ],
        }
    },
    mounted() {
        this.loadName(),
        this.loadDepartemen(),
        this.load()
    },
    computed: {
      rows() {
        return this.items.length
        
      },
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
                this.currentUser.role[0] === "ROLE_SECTIONMANAGER"||
                this.currentUser.role[0] === "ROLE_KARYAWANKONTRAK"){
                    this.$router.push('/403')
                }
        }
    },
    methods: {
        load() {
            axios.get('http://localhost:8081/detailKontrak/all',{ headers:authHeader() }).then(res => {
                for(var i = 0; i < res.data.length ; i++){
                    res.data[i]["name"] = this.name[i]
                    res.data[i]["departemen"] = this.departemen[i]
                }
                this.detailKontrak = res.data
                console.log(this.detailKontrak.toString)
            }).catch((err) => {
                console.log(err);
            })
        },
        loadName() {
            axios.get('http://localhost:8081/detailKontrak/getName', { headers:authHeader() }).then(res => {
                this.name = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        loadDepartemen() {
            axios.get('http://localhost:8081/detailKontrak/getDepartemen', { headers:authHeader() }).then(res => {
                this.departemen = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        getLast(){},
        add(){
            this.counter ++;
        },
        click: function (req, name) {
            console.log("Clicked with "+ req.noSurat);
            window.location.href= "/GenerateSuratKontrak/"+req.noSurat+"/"+name;
        },
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