<template>
    <div class="all">
        <div class="red-top">
            <br>
            <br>
            <br>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-1">

                    </div>
                    <div class="col-11">
                        <div class="name">{{this.$store.state.auth.user.username}}</div>
                        <div class="role"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <br>
        <b-modal size="lg" hide-footer title="Buat profil" id="create-modal" ref="create">
            <form @submit ="formSubmit">
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <div class="form-group">
                                <div class="label">Nomor Induk Kependudukan*</div>
                                <input class="form-control" type="number" id="nik" placeholder="masukkan nomor induk kependudukan" v-model="nik" required="true">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <div class="form-group">
                                <div class="label">Nama*</div>
                                <input class="form-control" id="nama" placeholder="masukkan nama" v-model="nama">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Tanggal lahir*</div>
                                <input class="form-control" type="date" id="tanggal_lahir" placeholder="masukkan tanggal lahir" v-model="tanggal_lahir">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Jenis Kelamin*</div>
                                <input type="radio" name="jenis_kelamin" v-model="jenis_kelamin" value=true>Laki-laki
                                <br>
                                <input type="radio" name="jenis_kelamin" v-model="jenis_kelamin" value=false>Perempuan
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Tempat lahir*</div>
                                <input class="form-control" id="tempat_lahir" placeholder="masukkan tempat lahir" v-model="tempat_lahir">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Alamat*</div>
                                <input class="form-control" id="alamat" placeholder="masukkan alamat" v-model="alamat">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">RT*</div>
                                <input class="form-control" type="number" id="rt" placeholder="masukkan RT" v-model="rt">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">RW*</div>
                                <input class="form-control" type="number" id="rw" placeholder="masukkan RW" v-model="rw">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Kelurahan*</div>
                                <input class="form-control" id="kelurahan" placeholder="masukkan kelurahan" v-model="kelurahan">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Kecamatan*</div>
                                <input class="form-control" id="kecamatan" placeholder="masukkan kecamatan" v-model="kecamatan">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Kode pos*</div>
                                <input class="form-control" type="number" id="kode_pos" placeholder="masukkan kode pos" v-model="kodepos">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Telepon*</div>
                                <input class="form-control" id="telepon" placeholder="masukkan telepon" v-model="telepon">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Email*</div>
                                <input class="form-control" id="email" placeholder="masukkan email" v-model="email">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Nomor pokok wajib pajak (NPWP)*</div>
                                <input class="form-control" id="npwp" placeholder="masukkan nomor pokok wajib pajak (NPWP)" v-model="npwp">
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="container">
                   <div class="row">
                       <div class="col-sm-12">
                           <button type="submit" class="btn btn-danger" @click="formSubmit">Submit</button>
                       </div>
                   </div>
               </div>
                

            </form>
        </b-modal>
        <b-button v-b-modal.create-modal v-if="this.$store.state.auth.user.user == null">Show Modal</b-button>

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

<style>
.label{
    text-align: left;
    font-family: 'archivo';
    color: black;
    margin-bottom: 2px;
}
.name{
    font-family: "oswald";
    color: white;
    font-size: 25px;
}
.red-top{
    background-color: #C53751;
}
</style>

<script>
import authHeader from '../../service/AuthHeader'

export default{
    mounted(){
        this.checkProfil();
        this.getProfil();
        
    },
    data(){
        return {
            nik: '',
            nama: '',
            tanggal_lahir: '',
            jenis_kelamin: '',
            tempat_lahir: '',
            alamat: '',
            rt: '',
            rw: '',
            kelurahan: '',
            kecamatan: '',
            kodepos: '',
            telepon: '',
            email: '',
            npwp: '',
            retStatus: '',
            errMsg: '',
            kosongCount: 0,
        }
    },
    methods: {
        getProfil(){
            // console.log(this.$store.state.auth.user);
        },
        checkProfil(){
            // if(this.$store.state.auth.user.user == null){
            //     this.$refs['create'].show();
            // }
            // if(
                this.axios.get('http://localhost:8081/profil/users/'+this.$store.state.auth.user.id,{ headers:authHeader() }).then(res =>{
                    // console.log(res.data)
                    if(res.data.user === null){
                    // console.log(res.data.user)
                    this.$refs['create'].show();
                }
                })
            // )
        },
        formSubmit(e){
            e.preventDefault();
            let currentObj = this;
            if (this.kosongCount != 0){
                this.kosongCount = 0;
                this.errMsg = "";
            }
            if(!this.nik){
                this.errMsg = this.errMsg + "NIK ," + " "; 
            }
            if(!this.nama){
                this.errMsg = this.errMsg + "Nama ," + " "; 
            }
            if(!this.tanggal_lahir){
                this.errMsg = this.errMsg + "Tanggal lahir ," + " "; 
            }
            if(!this.jenis_kelamin){
                this.errMsg = this.errMsg + "Jenis kelamin ," + " "; 
            }
            if(!this.tempat_lahir){
                this.errMsg = this.errMsg + " Tempat lahir ," + " "; 
            }
            if(!this.alamat){
                this.errMsg = this.errMsg + " Alamat ," + " "; 
            }
            if(!this.rt){
                this.errMsg = this.errMsg + " RT ," + " "; 
            }
            if(!this.rw){
                this.errMsg = this.errMsg + " RW ," + " "; 
            }
            if(!this.kelurahan){
                this.errMsg = this.errMsg + " Kelurahan ," + " "; 
            }
            if(!this.kecamatan){
                this.errMsg = this.errMsg + " Kecamatan ," + " "; 
            }
            if(!this.kodepos){
                this.errMsg = this.errMsg + " Kode pos ," + " "; 
            }
            if(!this.telepon){
                this.errMsg = this.errMsg + " Telepon ," + " "; 
            }
            if(!this.email){
                this.errMsg = this.errMsg + " Email ," + " "; 
            }
            if(!this.npwp){
                this.errMsg = this.errMsg + " NPWP ," + " "; 
            }
            if(this.errMsg != ""){
                this.kosongCount ++;
                this.$refs['error-kosong'].show();
            }
            else{
                this.axios.put('http://localhost:8081/profil/setUser/'+this.$store.state.auth.user.id, {
                    "nik" :this.nik,
                    "nama" : this.nama,
                    "tanggal_lahir" :this.tanggal_lahir,
                    "jenis_kelamin" : this.jenis_kelamin,
                    "tempat_lahir" : this.tempat_lahir,
                    "alamat" : this.alamat,
                    "rt" : this.rt,
                    "rw" : this.rw,
                    "kelurahan" : this.kelurahan,
                    "kecamatan" : this.kecamatan,
                    "kodePos" : this.kodepos,
                    "telepon" : this.telepon,
                    "email" : this.email,
                    "npwp" :this.npwp
                    }, { headers:authHeader() })
                    .then (ress => {
                        this.retStatus = ress.data
                    })
                    .catch((err) => {
                        currentObj.output = err;
                        console.log(err);
                    })
                }
            
         
            



        }
    }
}

</script>