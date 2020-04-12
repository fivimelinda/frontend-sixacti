<template>
    <div class="RequestLowongan">
        <br>
        <h1>Detail Employment Requisition</h1>
        <br>
        <div class="box">
            <div class="judul-box">
                <div class="tulisan-box">Employment Requisition Form</div>
            </div>
            <br>
                <div class="group">
                    <div class="label">Judul lowongan pekerjaan</div>
                    <div class="content"><b>{{req.jobTitle}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Departemen</div>
                    <div class="content"><b>{{req.departement}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Section</div>
                    <div class="content"><b>{{req.section}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Supervisor</div>
                    <div class="content"><b>{{req.supervisor}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Tanggal diinginkan</div>
                    <div class="content"><b>{{req.dateWanted}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Shift</div>
                    <div class="content"><b>{{req.shift}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Periode kontrak</div>
                    <div class="content"><b>{{req.periodeKontrak}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Addition</div>
                    <div class="content"><b>{{req.addition}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Jumlah</div>
                    <div class="content"><b>{{req.jumlah}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Gaji</div>
                    <div class="content"><b>{{req.gaji}}</b></div>
                    <hr>
                </div>
                <br>
                <div class="group">
                    <div class="label">Nama Replacement</div>
                    <div class="content"><b>{{req.namaReplacement}}</b></div>
                    <hr>
                </div>
            <br>
            <div class="wrapper">
                <b-button v-b-modal.modal-1 class="btn btn-danger" id="modal-button">Hapus</b-button>
            </div>
            <br>
            <br>
        </div>
        <br>
        <br>
        <b-modal id="modal-1" title="Konfirmasi" v-bind:hide-footer="true">
            <div class="conf-main"><b>Employment Requisition Akan Dihapus</b></div>
            <div class="conf-sub">Apakah anda yakin?</div>
            <br>
            <br>
            <!-- <div class="flex">
                <button type="button" v-on:click="deleteData" class="btn btn-danger" id="deleteButton">Hapus</button>
                <b-button class="mt-3" id="close-me" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
            </div> -->
            <div class="container">
                <div class="row">
                    <div class="col-sm" >
                        <button style="float: right;" type="button" v-on:click="deleteData" class="btn btn-danger" id="deleteButton">Hapus</button>
                    </div>
                    <div class="col-sm">
                        <b-button class="btn btn-light" variant="outline-dark" style="float: left;" id="close-me" block @click="$bvModal.hide('modal-1')">Tidak</b-button>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal size="lg" ref="my-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Employment requisition berhasil dihapus
                    </div>
                    <div class="col-sm">
                        <!-- <v-img
                                :src="require('../assets/success.png')"></v-img> -->
                        <!-- <img src = "'src/assets/success.png'"> -->
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
                        Employment requisition gagal dihapus
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



    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Test',
    props: {
        msg: String
    },
    data(){
        return {
            judul: '',
            departemen: '',
            section: '',
            supervisor: '',
            tanggal: '',
            shift:'',
            periode: '',
            addition: '',
            jumlah: '',
            gaji: '',
            replacement: '',
            req: '',
            deleteStatus: ''
        }
    },
    mounted() {
        this.load()
    },
    methods: {
         load() {
            axios.get('http://localhost:8081/request/get/'+this.$route.params.id).then(res => {
                this.req = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        deleteData() {
            axios.delete('http://localhost:8081/request/delete/'+this.$route.params.id).then(ress => {
                this.deleteStatus = ress.data
                
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
                window.location.href = "/RequestLowongan";
            }, 2000);
        },
        errorModal(){
            this.$refs['error-modal'].show();
        }
    }
}

</script>

<style>

.wrapper {
    text-align: center;
}

.modal-button {
    position: absolute;
    top: 50%;
}

.centang{
    float: right;
    margin-right: 30px;
}

.gagal{
    float: right;
    margin-right: 30px;
    width: 80px;
}

#berhasil {
    font-family: "Oswald";
    font-size: 25px;
}

#close-me{
    width: 80px;
}

.flex{
    display: flex;
    justify-content: center;
}

.conf-main{
    font-family: "Oswald";
    font-size: 20px;
}

.conf-sub{
    font-family: "Archivo";
    color: "#333333";
    font-size: 14px;
}

.modal-header{
    background-color:#F0F0F0 !important;
    font-family: "Oswald";
}

#deleteButton{
    margin-left: 10px;
    display: block;
}

.content{
    font-size: 20px;
    margin-bottom: -10px;
}

.group{
    margin-left: 50px;
    margin-right: 50px;
}

hr{
    color: black;
    height: 2px;
}

.detail{
    font-family: "Archivo";
    width: auto;
}

.title{
    color: #A6A6A6;
    font-size: 12px;
    margin-bottom: 0;
}

.subtitle{
    color: black;
    font-size: 18px;
    margin-bottom: 0;
}

.RequestLowongan {
    background-color: #F6EDF0;
}

h1{
    font-family: 'oswald';
    text-align: left;
    margin-left: 100px;
}

.box{
    margin-left: 100px;
    margin-right: 100px;
    background-color: white;
}

.judul-box {
    background-color: #C53751;
    font-family: 'oswald';
    color: white;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.tulisan-box {
    text-align: left;
    margin-left: 50px;
    font-style: medium;
}

form{
    margin-left: 100px;
    margin-right: 100px;
}

.label{
    text-align: left;
    font-family: 'archivo';
    color:#A6A6A6;
    margin-bottom: 2px;
    font-size: 15px;
}
.radio{
    text-align: left;
}

small{
    text-align: left;
}

form{
    font-size: 20px;
}
</style>