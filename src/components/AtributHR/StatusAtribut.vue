<template>
<div class="atribut">

    <div>
        <br>
        <p class="title-top">Atribut Karyawan</p>
    </div>
    <div class="box-up">
        <p class="box-text">Daftar Atribut Karyawan</p>
    </div>
    <table class="table table-hover">
        <thead class="table-borderless">
            <tr class="tr-top">
                <th scope="col">No.</th>
                <th scope="col">Nama Karyawan </th>
                <th scope="col">Ukuran Baju</th>
                <th scope="col">Ukuran Jas Lab</th>
                <th scope="col">Ukuran Helm</th>
                <th scope="col">Ukuran Sepatu</th>
                <th scope="col">Status</th>


                <!-- <th scope="col">Action</th> -->
            </tr>
        </thead>
        <tbody class="tbody">
            <tr v-for="atr in atribut" :key="atr.id_atribut" class="content">
                <th scope=row class="th-bottom" v-text="getLast()" v-bind="add()"></th>
                <td>{{atr.karyawan.user.nama}}</td>
                <td>{{atr.ukuran_baju}}</td>
                <td>{{atr.ukuran_jas_lab}}</td>
                <td>{{atr.ukuran_helm}}</td>
                <td>{{atr.ukuran_sepatu}}</td>
                <td>
                    <div v-if="atr.status == true" class="button-wrapper">
                        Atribut Telah Diterima
                    </div>
                    <div v-if="atr.status == false" class="button-wrapper">
                        <b-button v-b-modal.modal-1 class="btn btn-danger">Diterima</b-button>
                    </div>
                    
                    <b-modal id="modal-1" title="Konfirmasi" v-bind:hide-footer="true">
                        <div class="conf-main"><b>Status Penerimaan Atribut Diterima</b></div>
                        <div class="conf-sub">Apakah anda yakin?</div>
                        <br>
                        <br>
                        <div class="container-fluid">
                            <div class="row" >
                                <div class="col-6">
                                    <button type="button" v-on:click="updateStatus(atr.id_atribut)" class="btn btn-danger" id="deleteButton">Ubah Status</button>
                                </div>
                                <div class="col-6">
                                    <b-button class="btn btn-light" variant="outline-dark" style="float: left;" id="close-me" block @click="$bvModal.hide('modal-1')">Tidak</b-button>
                                </div>
                            </div>
                        </div>
                    </b-modal>
                </td>

            </tr>
        </tbody>
    </table>

        <b-modal size="lg" ref="my-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Status Atribut berhasil diubah
                    </div>
                    <div class="col-sm">

                        <v-img class="centang"
            :src="require('@/assets/success.png')"
            ></v-img>
                    </div>
                </div>
            </div>
            
        </b-modal>


        <b-modal size="lg" ref="error-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Status Atribut gagal diubah
                    </div>
                    <div class="col-sm">
                        <v-img class="gagal"
            :src="require('@/assets/fail.png')"
            ></v-img>
                    </div>
                </div>
            </div>
            
        </b-modal>
</div>
</template>

<script>
import axios from 'axios'
import AtributService from '../../service/AtributService';
import authHeader from '../../service/AuthHeader'

export default {
    data() {
        return {
            status: "",
            atribut: [],
            counter2: 1,
            statusUpdate: '',
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
    },
    methods: {
        load() {
            axios.get('http://localhost:8081/api/listAtribut',{ headers:authHeader() }).then(res => {
                this.atribut = res.data
            }).catch((err) => {
                console.log(err);
            })
        },

        updateStatus(id_atribut){
           AtributService.updateStatus(id_atribut, {
                status : (this.status = true)
              }).then(ress => {
                this.statusUpdate = ress.data
                
                if(ress.status == 200){
                    this.openModal()
                }
                else{
                    this.errorModal()
                }
            }).catch((err) => {
                console.log(err);
                this.errorModal()
            })
            
        },
        openModal() {
            this.$refs['my-modal'].show();
            window.setTimeout(function() {
                window.location.href = "/listAtribut";
            }, 2000);
        },
        errorModal(){
            this.$refs['error-modal'].show();
        },


        add(){
            this.counter2 ++;
        },

        getLast(){
            return this.counter2-(this.atribut.length*100)
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