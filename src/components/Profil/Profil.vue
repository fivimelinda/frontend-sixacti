<template>
<v-container>
    <div>
        
    </div>
    <div class="all">
        <div class="red-top">
            <br>
            <br>
            <br>
            <div>
            </div>
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div class="" v-if="this.usersData.user != null">
                        <div class="name" >{{this.usersData.user.nama}}</div>
                        <div class="role" v-if="this.usersData.roles.length != kosongCount" >{{this.usersData.roles[0].roleName}}</div>
                    </div>
                    <div v-if="(this.usersData.roles[0].roleName === 'ROLE_KARYAWANKONTRAK')" class="mb-0">
                        <b-button @click="directAtribut()" class="btn-atribut">Atribut</b-button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="container">
        </div>
        <div class="container" v-if="this.usersData.user != null">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Nomor Induk Kependudukan</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.nik}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Username</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.username}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Nama</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.nama}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Tanggal lahir</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.tanggal}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Tempat lahir</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.tempat_lahir}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Jenis kelamin</b></div>
                </div>
                <div class="col-4">
                    <div class="content" v-if="this.usersData.user.jenis_kelamin == true ">Laki-laki</div>
                    <div class="content" v-if="this.usersData.user.jenis_kelamin == false ">Perempuan</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Alamat</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.alamat}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>RT</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.rt}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>RW</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.rw}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Kelurahan</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.kelurahan}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Kecamatan</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.kecamatan}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Kode pos</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.kode_pos}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Telepon</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.telepon}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Email</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.email}}</div>
                </div>
            </div>
            <hr class="spacer">
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-5">
                    <div class="identifier"><b>Nomor pokok wajib pajak</b></div>
                </div>
                <div class="col-4">
                    <div class="content">{{this.usersData.user.npwp}}</div>
                </div>
                
            </div>
            <div v-if="!(this.usersData.roles[0].roleName === 'ROLE_PELAMAR')">
                <hr class="spacer"/>
                <div class="row">
                    <div class="col-1">
                    </div>
                    <div class="col-5">
                        <div class="identifier"><b>Gaji</b></div>
                    </div>
                    <div class="col-4">
                        <div class="content">{{this.karyawan.gaji}}</div>
                    </div>
                    
                </div>
                    <hr class="spacer"/>
                <div class="row">
                    <div class="col-1">
                    </div>
                    <div class="col-5">
                        <div class="identifier"><b>Sisa Cuti</b></div>
                    </div>
                    <div class="col-4">
                        <div class="content">{{this.karyawan.sisaCuti}}</div>
                    </div>
                    
                </div>
                <hr class="spacer"/>
                <div class="row">
                    <div class="col-1">
                    </div>
                    <div class="col-5">
                        <div class="identifier"><b>Departemen</b></div>
                    </div>
                    <div class="col-4">
                        <div class="content">{{this.karyawan.departemen.namaDepartemen}}</div>
                    </div>
                    
                </div>
                <hr class="spacer"/>
                <div class="row">
                    <div class="col-1">
                    </div>
                    <div class="col-5">
                        <div class="identifier"><b>Section</b></div>
                    </div>
                    <div class="col-4">
                        <div class="content">{{this.karyawan.section.namaSection}}</div>
                    </div>
                    
                </div>
            </div>

            
        </div>

        <div class="mt-3 d-flex justify-content-center">
                    <b-button class="btn-primer" v-b-modal.create-modal v-if="this.usersData.user == null">Buat profil</b-button>
                    <b-button class="btn-primer" v-b-modal.edit-modal v-if="this.usersData.user != null">Edit profil</b-button>
                </div>
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
                <div v-if="!(this.usersData.roles[0].roleName === 'ROLE_PELAMAR')">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="label">Gaji*</div>
                                    <input class="form-control" id="gaji" placeholder="masukkan gaji" v-model="gaji">
                                </div>
                            </div>
                            <hr>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="label">Sisa Cuti*</div>
                                    <input class="form-control" id="sisaCuti" :disabled="(this.usersData.roles[0].roleName === 'ROLE_KARYAWANKONTRAK')" placeholder="masukkan sisa cuti anda" v-model="sisaCuti">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="label">Departemen*</div>
                                    <div>
                                        <b-form-select v-model="idSect">
                                            <b-form-select-option :value="null" disabled>Please select an option</b-form-select-option>
                                            
                                                <b-form-select-option v-for="(dept,index) in departemen" :key="index" value="index+1">{{departemen[index].namaDepartemen}}</b-form-select-option>
                                            
                                        </b-form-select>
                                    </div>
                                    <!-- <input class="form-control" type="number" id="dept" placeholder="masukkan nomor departemen" v-model="idDept"> -->
                                </div>
                            </div>
                            <hr>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="label">Section*</div>
                                    <div>
                                        <b-form-select v-model="idSect">
                                            <b-form-select-option :value="null" disabled>Please select an option</b-form-select-option>
                                            
                                                <b-form-select-option v-for="(sect,index) in section" :key="index" value="index+1">{{section[index].namaSection}}</b-form-select-option>
                                            
                                        </b-form-select>
                                    </div>
                                    <!-- <input class="form-control" type="number" id="sect" placeholder="masukkan nomor nomor section" v-model="idSect"> -->
                                </div>
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

        <b-modal size="lg" hide-footer title="Edit profil" id="edit-modal" ref="edit" v-if="this.usersData.user !== null">
            <form @submit ="formEdit">
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <div class="form-group">
                                <div class="label">Nomor Induk Kependudukan*</div>
                                <input class="form-control" type="number" id="nik" :placeholder="[[this.usersData.user.nik]]" v-model="nik" required="true" disabled>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <div class="form-group">
                                <div class="label">Nama*</div>
                                <input class="form-control" id="nama" :placeholder="[[this.usersData.user.nama]]" v-model="nama">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Tanggal lahir*</div>
                                <input class="form-control" type="date" id="tanggal_lahir" :placeholder="[[this.usersData.user.tanggal_lahir]]" v-model="tanggal_lahir">
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
                                <input class="form-control" id="tempat_lahir" :placeholder="[[this.usersData.user.tempat_lahir]]" v-model="tempat_lahir">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Alamat*</div>
                                <input class="form-control" id="alamat" :placeholder="[[this.usersData.user.alamat]]" v-model="alamat">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">RT*</div>
                                <input class="form-control" type="number" id="rt" :placeholder="[[this.usersData.user.rt]]" v-model="rt">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">RW*</div>
                                <input class="form-control" type="number" id="rw" :placeholder="[[this.usersData.user.rw]]" v-model="rw">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Kelurahan*</div>
                                <input class="form-control" id="kelurahan" :placeholder="[[this.usersData.user.kelurahan]]" v-model="kelurahan">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Kecamatan*</div>
                                <input class="form-control" id="kecamatan" :placeholder="[[this.usersData.user.kecamatan]]" v-model="kecamatan">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Kode pos*</div>
                                <input class="form-control" type="number" id="kode_pos" :placeholder="[[this.usersData.user.kode_pos]]" v-model="kodepos">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Telepon*</div>
                                <input class="form-control" id="telepon" :placeholder="[[this.usersData.user.telepon]]" v-model="telepon">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Email*</div>
                                <input class="form-control" id="email" :placeholder="[[this.usersData.user.email]]" v-model="email">
                            </div>
                        </div>
                        <hr>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <div class="label">Nomor pokok wajib pajak (NPWP)*</div>
                                <input class="form-control" id="npwp" :placeholder="[[this.usersData.user.npwp]]" v-model="npwp">
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!(this.usersData.roles[0].roleName === 'ROLE_PELAMAR')">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="label">Gaji*</div>
                                    <input class="form-control" id="gaji" placeholder="masukkan email" v-model="karyawan.gaji">
                                </div>
                            </div>
                            <hr>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="label">Sisa Cuti*</div>
                                    <input class="form-control" id="sisaCuti" placeholder="masukkan nomor pokok wajib pajak (NPWP)" :disabled="(this.usersData.roles[0].roleName === 'ROLE_KARYAWANKONTRAK')" v-model="karyawan.sisaCuti">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <br>
                <div class="container">
                   <div class="row">
                       <div class="col-sm-12">
                           <button type="submit" class="btn btn-danger" @click="formEdit">Submit</button>
                       </div>
                   </div>
               </div>
            </form>
        </b-modal>




        <b-modal size="lg" ref="error-kosong" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil" v-text="this.errMsg+' belum diisi!'">
                    </div>
                    <div class="col-sm">
                        <v-img class="gagal"
            :src="require('@/assets/fail.png')"
            ></v-img>
                    </div>
                </div>
            </div>
            
        </b-modal>


        <b-modal size="lg" ref="my-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Profil berhasil diedit
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
                        Profil gagal diedit
                    </div>
                    <div class="col-sm">
                        
                        <v-img class="gagal"
            :src="require('@/assets/fail.png')"
            ></v-img>
                    </div>
                </div>
            </div>
            
        </b-modal>

        <b-modal size="lg" ref="my-modal2" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Profil berhasil dibuat
                    </div>
                    <div class="col-sm">
                        
                        <v-img class="centang"
            :src="require('@/assets/success.png')"
            ></v-img>
                    </div>
                </div>
            </div>
            
        </b-modal>

        <b-modal size="lg" ref="error-modal2" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Profil gagal dibuat
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
    </v-container>
</template>



<script>
import authHeader from '../../service/AuthHeader'
import moment from 'moment';
import 'moment/locale/id';
import axios from 'axios'

export default{
    mounted(){
        this.checkProfil();
        //this.loadSection()
        //this.loadDepartement()
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
            usersData: '',
            tanggal:'',
            gaji:'',
            sisaCuti:'',
            idDept:'',
            idSect:null,
            karyawan:null,
            pelamar:null,
            section:null,
            departemen:null,
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
        this.getSection();
        this.getDepartemen();
    },
    methods: {
        directAtribut(){
            this.$router.push('/atribut/'+this.pelamar.idPelamar)
        },
        async getSection(){
            
            const getSection = await this.axios.get('https://sixacti-api.herokuapp.com/api/get-section',{ headers:authHeader() });
            this.section = getSection.data;
            // console.log(this.section)
        },
        async getDepartemen(){
            const getDepartemen = await this.axios.get('https://sixacti-api.herokuapp.com/api/get-departemen',{ headers:authHeader() });
            this.departemen = getDepartemen.data;
            // console.log(this.departemen);
        },
        checkProfil(){
            // if(this.$store.state.auth.user.user == null){
            //     this.$refs['create'].show();
            // }
            // if(

                // console.log(this.$store.state.auth.user)
                // console.log(authHeader())
                
                //this.axios.get('http://localhost:8081/profil/users/'+this.$store.state.auth.user.id,{ headers:authHeader() }).then(res =>{
                console.log(this.$store.state.auth.user)
                
                this.axios.get('https://sixacti-api.herokuapp.com/profil/users/'+this.$store.state.auth.user.id,{ headers:authHeader() }).then(res =>{

                    
                    this.usersData = res.data;
                    console.log(this.usersData)
                    
                    if(res.data.user === null){
                        // this.$refs['create'].show();
                        this.createModal();
                    }
                    else{
                        this.tanggal = res.data.user.tanggal_lahir;
                        console.log(this.tanggal)
                        moment.locale('id')
                        this.tanggal = new Date(this.tanggal)
                        this.tanggal = moment(this.tanggal).format('MMMM Do YYYY')
                        console.log(this.tanggal)
                        if(res.data.roles[0].roleName === 'ROLE_PELAMAR'){
                            this.axios.get('https://sixacti-api.herokuapp.com/profil/getPelamar/'+res.data.user.nik,{ headers:authHeader() })
                            .then(ress =>{
                                this.pelamar = ress.data;
                                console.log(this.pelamar);
                            })
                        }
                        else{
                            this.axios.get('https://sixacti-api.herokuapp.com/api/karyawan/get/'+res.data.user.nik,{ headers:authHeader() }).then(ress=>{
                            this.karyawan = ress.data;
                        });
                        }
                        
                    }
                });
                
            // )
        },
        formEdit(e){
            e.preventDefault();
            let currentObj = this;
            if(!this.nik){
                this.nik = this.usersData.user.nik;
            }
            if(!this.nama){
                this.nama = this.usersData.user.nama; 
            }
            if(!this.tanggal_lahir){
                this.tanggal_lahir = this.usersData.user.tanggal_lahir; 
            }
            if(!this.jenis_kelamin){
                this.jenis_kelamin = this.usersData.user.jenis_kelamin; 
            }
            if(!this.tempat_lahir){
                this.tempat_lahir = this.usersData.user.tempat_lahir; 
            }
            if(!this.alamat){
                this.alamat = this.usersData.user.alamat; 
            }
            if(!this.rt){
                this.rt = this.usersData.user.rt; 
            }
            if(!this.rw){
                this.rw = this.usersData.user.rw; 
            }
            if(!this.kelurahan){
                this.kelurahan = this.usersData.user.kelurahan; 
            }
            if(!this.kecamatan){
                this.kecamatan = this.usersData.user.kecamatan; 
            }
            if(!this.kodepos){
                this.kodepos = this.usersData.user.kode_pos; 
            }
            if(!this.telepon){
                this.telepon = this.usersData.user.telepon; 
            }
            if(!this.email){
                this.email = this.usersData.user.email; 
            }
            if(!this.npwp){
                this.npwp = this.usersData.user.npwp; 
            }
            this.axios.put('https://sixacti-api.herokuapp.com/profil/editUser/'+this.$store.state.auth.user.id, {
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
            }, {headers:authHeader()})
            .then (ress => {
                    this.retStatus = ress.data
                    if(ress.status == 200){
                        if(!(this.usersData.roles[0].roleName === 'ROLE_PELAMAR') && !(this.usersData.roles[0].roleName === 'ROLE_KARYAWANKONTRAK')){
                            this.axios.put('https://sixacti-api.herokuapp.com/api/karyawan/edit/'+this.nik,{
                                "nik":this.nik,
                                "gaji":this.karyawan.gaji,
                                "sisaCuti":this.karyawan.sisaCuti,
                                "idDept":this.karyawan.departemen.id,
                                "idSect":this.karyawan.section.idSection
                            },{headers:authHeader()}).then(res =>{
                                console.log(res);
                            });
                            this.openModal();
                        }
                        
                    }
                    else{
                        this.errorModal()
                    }
                })
                .catch((err) => {
                    currentObj.output = err;
                    console.log(err);
                })
        },
        formSubmit(e){
            e.preventDefault();
            let currentObj = this;
            const nol = 0;
            if (this.kosongCount != nol){
                this.kosongCount = nol;
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
                this.axios.put('https://sixacti-api.herokuapp.com/profil/setUser/'+this.$store.state.auth.user.id, {
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
                        if(ress.status == 200){
                            if((this.usersData.roles[0].roleName === 'ROLE_KARYAWANKONTRAK')){
                                this.sisaCuti=0;
                            }
                            if(!(this.usersData.roles[0].roleName === 'ROLE_PELAMAR') && !(this.usersData.roles[0].roleName === 'ROLE_KARYAWANKONTRAK')){
                            this.axios.post('https://sixacti-api.herokuapp.com/api/karyawan/tambah',{
                                "nik":this.nik,
                                "gaji":this.gaji,
                                "sisaCuti":this.sisaCuti,
                                "idDept":this.idDept,
                                "idSect":this.idSect
                            },{headers:authHeader()}).then(res =>{
                                console.log(res);
                                
                            });
                            this.openModal2()
                            }else if(this.usersData.roles[0].roleName === 'ROLE_PELAMAR'){
                                this.createPelamar();
                                   
                            }
                            
                        }
                        else{
                            this.errorModal2()
                        }
                    })
                    .catch((err) => {
                        currentObj.output = err;
                        console.log(err);
                    })
                }
        },
        openModal() {
            this.$refs['my-modal'].show();
            window.setTimeout(function() {
                window.location.href = "/profil";
            }, 2000);
        },

        createPelamar(){
            this.pelamar = axios.get('https://sixacti-api.herokuapp.com/profil/addPelamar/'+this.nik, { headers:authHeader() });
            this.openModal2()
            
            },

        errorModal(){
            this.$refs['error-modal'].show();
        },
        openModal2() {
            this.$refs['my-modal2'].show();
            window.setTimeout(function() {
                window.location.href = "/profil";
            }, 2000);
        },
        errorModal2(){
            this.$refs['error-modal2'].show();
        },
        createModal(){
            this.$refs['create'].show();
        }
    }
}

</script>

<style>
.row{
    margin-top: -10px;
    margin-bottom: -10px;
}
.spacer{
    margin-left: 93px;
}
.identifier{
    font-family: 'archivo';
    color: 'black';
    font-size: 18px;
}
.content{
    font-family: 'archivo';
    color: #454545;
    font-size: 18px;
}
.role{
    font-family: 'archivo';
    font-size: 16px;
    color: white;
}
.label{
    text-align: left;
    font-family: 'archivo';
    color: black;
    margin-bottom: 2px;
}
.name{
    font-family: "oswald";
    color: white;
    font-size: 35px;
}
.red-top{
    background-color: #C53751;
}
.btn-primer{
    background-color: #C53751 !important;
    border:1px solid #C53751 !important;
}
.btn-primer:hover{
    background-color: rgba(197, 55, 81, 0.883) !important;
    border:1px solid rgba(197, 55, 81, 0.904) !important;
}

.btn-atribut{
    background-color: white !important;
    color: #C53751 !important;
    border:1px solid white !important;
}
</style>