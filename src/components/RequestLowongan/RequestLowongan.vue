<template>
    <div class="RequestLowongan">
        <br>
        <ul class="nav">
            <li><a class="brearcrumb-a" href="/">Home</a></li>
            <li><p class="breadcrumb-a">></p></li>
            <li><a class="brearcrumb-a" href="/RequestLowongan">Request Lowongan Pekerjaan</a></li>
            <li><p class="breadcrumb-a">></p></li>
            <li><a class="brearcrumb-a" href="/RequestLowongan/add">Tambah</a></li>
            
        </ul>
        <br>
        <h1>Tambah Employment Requisition Baru</h1>
        <br>
        <div class="box">
            <div class="judul-box">
                <div class="tulisan-box">Employment Requisition Form</div>
            </div>
            <br>
            <form @submit ="formSubmit">
                
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <div class="form-group">
                                <div class="label">Judul lowongan pekerjaan*</div>
                                <input class="form-control" id="judul" placeholder="masukkan judul lowongan pekerjaan" v-model="judul" required="true">
                            </div>
                        </div>
                    </div>
                </div>
                
                <br>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Departemen*</div>
                                <input class="form-control" id="departemen" placeholder="masukkan departemen" v-model="departemen">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Section*</div>
                                <input class="form-control" id="section" placeholder="masukkan section" v-model="section">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Supervisor*</div>
                                <input class="form-control" id="supervisor" placeholder="masukkan supervisor" v-model="supervisor">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Tanggal diinginkan*</div>
                                <input class="form-control" type="date" id="tanggal-diinginkan" placeholder="pilih tanggal" v-model="tanggal">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="radio">
                                <div class="label">Shift*</div>
                                    <input type="radio" name="shift" v-model="shift" value=yes>Ya
                                <br>
                                    <input type="radio" name="shift" v-model="shift" value=no>Tidak
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="radio">
                                <div class="label">Addition*</div>
                                    <input type="radio" name="addition" v-model="addition" value=yes>Ya
                                <br>
                                    <input type="radio" name="addition" v-model="addition" value=no>Tidak
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Periode kontrak*</div>
                                <input class="form-control" type="number" id="periode-kontrak" placeholder="masukkan periode kontrak" v-model="periode">
                                <small class="form-text text-muted">Periode kontrak dalam satuan bulan</small>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Jumlah*</div>
                                <input class="form-control" type="number" id="jumlah" placeholder="masukkan jumlah" v-model="jumlah">
                            </div>
                        </div>
                    </div>
                </div>
               
               <div class="container">
                   <div class="row">
                       <div class="col-sm-12">
                           <div class="form-group">
                                <div class="label">Gaji*</div>
                                <input class="form-control" type="number" id="gaji" placeholder="masukkan gaji" v-model="gaji">
                                <small class="form-text text-muted">Gaji dalam rupiah (Rp)</small>
                            </div>
                       </div>
                   </div>
               </div>

               <div class="container">
                   <div class="row">
                       <div class="col-sm-12">
                           <div class="form-group">
                            <div class="label">Nama replacement</div>
                            <input class="form-control" id="nama-replacement" placeholder="Tuliskan nama dipisahkan dengan koma (contoh: budi, andi, didu)" v-model="replacement">
                        </div>
                       </div>
                   </div>
               </div>


                
            
                <br>

                <div class="container">
                   <div class="row">
                       <div class="col-sm-12">
                           <b-button v-b-modal.modal-1 class="btn btn-danger">Simpan</b-button>
                       </div>
                   </div>
               </div>
                <br>
                <br>
            <b-modal id="modal-1" title="Rangkuman" v-bind:hide-footer="true">
                <div class="detail">
                    <div class="col-out">
                        <p class="title">Judul</p>
                        <p class="subtitle">{{ judul }}</p>
                        <hr>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <p class="title">Departemen</p>
                                <p class="subtitle">{{departemen}}</p>
                                <hr>
                            </div>
                            <hr>
                            <div class="col-sm">
                                <p class="title">Section</p>
                                <p class="subtitle">{{section}}</p>
                                <hr>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <p class="title">Supervisor</p>
                                <p class="subtitle">{{supervisor}}</p>
                                <hr>
                            </div>
                            <div class="col-sm">
                                <p class="title">Tanggal</p>
                                <p class="subtitle">{{tanggal}}</p>
                                <hr>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <p class="title">Shift</p>
                                <p class="subtitle">{{shift}}</p>
                                <hr>
                            </div>
                            <div class="col-sm">
                                <p class="title">Periode</p>
                                <p class="subtitle">{{periode}}</p>
                                <hr>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <p class="title">Addition</p>
                                <p class="subtitle">{{addition}}</p>
                                <hr>
                            </div>
                            <div class="col-sm">
                                <p class="title">Jumlah</p>
                                <p class="subtitle">{{jumlah}}</p>
                                <hr>
                            </div>
                        </div>
                    </div>     
                    <div class="col-out">
                        <p class="title">Gaji</p>
                        <p class="subtitle">{{gaji}}</p>
                        <hr class="hr-special">
                    </div>
                    <div class="col-out">
                        <p class="title">Replacement</p>
                        <p class="subtitle">{{replacement}}</p>
                        <hr class="hr-special">
                    </div>
                    <button type="submit" class="btn btn-danger" @click="formSubmit">Submit</button>
                </div>
            </b-modal>
            </form>
            <div>
            </div>
        </div>
        <br>
        <br>

<b-modal size="lg" ref="my-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Employment requisition berhasil dibuat
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
                        Employment requisition gagal dibuat
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


        <b-modal size="lg" ref="error-kosong" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil" v-text="this.errMsg+' belum diisi!'">
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
import authHeader from '../../service/AuthHeader'

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
            retStatus: '',
            errMsg: '',
            kosongCount: 0,
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
    created(){
        if (!this.loggedIn) {
            this.$router.push('/auth/login');
        }
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;
            if (this.kosongCount != 0){
                this.kosongCount = 0;
                this.errMsg = "";
            }
            if(!this.judul){
                this.errMsg = this.errMsg + "Judul ," + " "; 
                // this.kosongCount ++;
                // this.$refs['error-kosong'].show();
            }
            if(!this.departemen){
                this.errMsg = this.errMsg + "Departemen ," + " ";
            }
            if(!this.section){
                this.errMsg = this.errMsg + "Section ," + " ";
            }
            if(!this.supervisor){
                this.errMsg = this.errMsg + "Supervisor ," + " ";
            }
            if(!this.tanggal){
                this.errMsg = this.errMsg + "Tanggal diinginkan ," + " ";
            }
            if(!this.shift){
                this.errMsg = this.errMsg + "Shift ," + " ";
            }
            if(!this.jumlah){
                this.errMsg = this.errMsg + "Jumlah ," + " ";
            }
            if(!this.gaji){
                this.errMsg = this.errMsg + "Gaji ," + " ";
            }
            if(!this.periode){
                this.errMsg = this.errMsg + "Periode kontrak ," + " ";
            }
            if(!this.addition){
                this.errMsg = this.errMsg + "Addition ," + " ";
            }
            if(this.errMsg != ""){
                this.kosongCount ++;
                this.$refs['error-kosong'].show();
            }
                else{
                    this.axios.post('http://localhost:8081/request/add', {
                    "jobTitle" : this.judul,
                    "departement" : this.departemen,
                    "section" : this.section,
                    "supervisor" : this.supervisor,
                    "dateWanted" : this.tanggal,
                    "shift" : (this.shift == "yes"),
                    "jumlah" : this.jumlah,
                    "gaji" : this.gaji,
                    "status" : "pending",
                    "periodeKontrak" : this.periode,
                    "addition" : (this.addition == "yes"),
                    "namaReplacement" : this.replacement
                } ,{ headers:authHeader() })
                // .then(function (response) {
                //     currentObj.output = response.data;
                //     console.log(currentObj.status)
                // })
                .then(ress => {
                    this.retStatus = ress.data

                    if(ress.status == 200){
                        this.openModal()
                    }
                    else{
                        this.errorModal()
                    }
                })
                .catch((err) => {
                    currentObj.output = err;
                    console.log(err);
                    this.errorModal()
                })
                }
            
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

<style scoped>
.col-out{
    padding-right: 15px;
    padding-left: 15px;
}

.hr-special{
    margin-top: 1px;
}

hr{
    color: black;
    margin-top: 0.83px;
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
    margin-left: 300px;
}

.box{
    margin-left: 300px;
    margin-right: 300px;
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

@media only screen and (max-width: 600px){
    .box{
        margin-left: 10px !important;
        margin-right: 10px !important;
    }

    h1{
        margin-left: 10px;
    }
}

.label{
    text-align: left;
    font-family: 'archivo';
    color: black;
    margin-bottom: 2px;
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