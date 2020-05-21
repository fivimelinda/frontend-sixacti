<template>
    <div>
        <v-container class="tes text">
            <div>
            <div v-if="status === 200 && !(pelamar === null)">
                <b-card class="mb-5 mt-5">
                    <b-card-text>
                        <b-row>
                            <b-col class="mx-auto my-auto" col md="4" lg="4">
                                <b-avatar class="ml-5" rounded="lg" variant="dark" size="16vw"></b-avatar>
                            </b-col>
                            <b-col class="my-auto" col md="8" lg="8">
                                <ol style="decoration:none !important">
                                    <li class="name h4 mb-3">{{pelamar.userPelamar.nama}}</li>
                                    <li class="mb-3"><v-icon color="black" class="mr-3">{{icons.card}}</v-icon>{{pelamar.userPelamar.nik}}</li>
                                    <li class="mb-3"><v-icon class="mr-3">{{icons.tgl}}</v-icon>{{pelamar.userPelamar.tempat_lahir}}, {{pelamar.userPelamar.tanggal_lahir | format}}</li>
                                    <li class="mb-3"><v-icon color="red" class="mr-3">{{icons.location}}</v-icon>{{pelamar.userPelamar.alamat}}</li>
                                    <li class="mb-3"><v-icon color="green" class="mr-3">{{icons.phone}}</v-icon>{{pelamar.userPelamar.telepon}}</li>
                                </ol>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card>

            <div class="row" v-if="status !== 'lulus Seleksi Berkas'">
                <div class="col-xs-12 col-sm-6 col-md-8" >
                    <div class="card">
                        <div class="card-header" id="headerCardBerkas">
                            Data Lamaran
                        </div>
                        <div class="card-body">
                            <div class="row justify-start">
                                <div class="col col-6">
                                <p>
                                    <strong 
                                    style="color:#C53751">NIK : </strong>
                                    
                                </p>
                                </div>
                                <div class="col col-6">
                                <p>
                                    {{nik}}
                                </p>
                                </div>
                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                <p>
                                    <strong 
                                    style="color:#C53751">Nama Ibu : </strong>
                                    
                                </p>
                                </div>
                                <div class="col col-6">
                                <p>
                                    {{namaIbu}}
                                </p>
                                </div>
                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                <p>
                                    <strong 
                                    style="color:#C53751">Alamat Domisili : </strong>
                                    
                                </p>
                                </div>
                                <div class="col col-6">
                                <p>
                                    {{alamatDomisili}}
                                </p>
                                <p>
                                    <strong 
                                    style="color:#C53751">RT / RW : </strong>
                                    {{rtDomisili}} / {{rwDomisili}}
                                </p>
                                <p>
                                    <strong 
                                    style="color:#C53751">Kelurahan : </strong>
                                    {{kelurahanDomisili}}
                                </p>
                                <p>
                                    <strong 
                                    style="color:#C53751">Kecamatan : </strong>
                                    {{kecamatanDomisili}}
                                </p>
                                <p>
                                    <strong 
                                    style="color:#C53751">Kode Pos : </strong>
                                    {{kodePosDomisili}}
                                </p>
                                </div>

                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                    <p>
                                        <strong 
                                        style="color:#C53751">No. Telepon : </strong>
                                        
                                    </p>
                                </div>
                                <div class="col col-6">
                                    <p>
                                        {{telepon}}
                                    </p>
                                </div>
                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                    <p>
                                        <strong 
                                        style="color:#C53751">Pendidikan : </strong>
                                        
                                    </p>
                                </div>
                                <div class="col col-6">
                                    <p>
                                        {{pendidikan}}
                                    </p>
                                </div>
                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                    <p>
                                        <strong 
                                        style="color:#C53751">No. BPJS Kesehatan : </strong>
                                        
                                    </p>
                                </div>
                                <div class="col col-6">
                                    <p>
                                        {{noBpjsKesehatan}}
                                    </p>
                                </div>
                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                    <p>
                                        <strong 
                                        style="color:#C53751">No. BPJS Ketenagakerjaan : </strong>
                                        
                                    </p>
                                </div>
                                <div class="col col-6">
                                    <p>
                                        {{noBpjsKetenagakerjaan}}
                                    </p>
                                </div>
                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                    <p>
                                        <strong 
                                        style="color:#C53751">No. Kartu Indonesia Sehat : </strong>
                                        
                                    </p>
                                </div>
                                <div class="col col-6">
                                    <p>
                                        {{noKis}}
                                    </p>
                                </div>
                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                    <p>
                                        <strong 
                                        style="color:#C53751">Nomor Pokok Wajib Pajak : </strong>
                                        
                                    </p>
                                </div>
                                <div class="col col-6">
                                    <p>
                                        {{noNpwp}}
                                    </p>
                                </div>
                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                    <p>
                                        <strong 
                                        style="color:#C53751">Pengalaman Kerja Terakhir : </strong>
                                        
                                    </p>
                                </div>
                                <div class="col col-6">
                                    <p>
                                        <strong 
                                        style="color:#C53751">Tahun Kerja : </strong>
                                        {{tahunKerja}}
                                    </p>
                                    <p>
                                        <strong 
                                        style="color:#C53751">Nama Pekerjaan : </strong>
                                        {{namaPekerjaan}}
                                    </p>
                                </div>
                            </div>

                          
                            
                        </div>
                    </div>
                </div>
                 <div class="col-xs-12 col-sm-6 col-md-4" >
                    <div class="card">
                        <div class="card-header" id="headerCardBerkas">
                            Berkas-Berkas Lamaran
                        </div>
                        <div class="card-body">
                            <p>
                                <strong>Resume : </strong>
                                <a @click="downloadBerkas(berkas.fileName)">
                                    {{berkas.fileName}}                                
                                </a> 
                            </p>
                            <p>
                                <strong>KTP : </strong>
                                <a @click="downloadKtp(ktp.fileName)">
                                    {{ktp.fileName}}                                
                                </a> 
                            </p>
                            <p>
                                <strong>Kartu Keluarga : </strong>
                                <a @click="downloadKK(kk.fileName)">
                                    {{kk.fileName}}                                
                                </a> 
                            </p>
                            <p v-if="bpjsKes">
                                <strong>BPJS Kesehatan : </strong>
                                <a @click="downloadBpjsKes(bpjsKes.fileName)">
                                    {{bpjsKes.fileName}}                                
                                </a> 
                            </p>
                            <p v-if="bpjsKet">
                                <strong>BPJS Ketenagakerjaan : </strong>
                                <a @click="downloadBpjsKet(bpjsKet.fileName)">
                                    {{bpjsKet.fileName}}                                
                                </a> 
                            </p>
                            <p v-if="kis">
                                <strong>Kartu Indonesia Sehat : </strong>
                                <a @click="downloadKIS(kis.fileName)">
                                    {{kis.fileName}}                                
                                </a> 
                            </p>
                            <p v-if="npwp">
                                <strong>NPWP : </strong>
                                <a @click="downloadNPWP(npwp.fileName)">
                                    {{npwp.fileName}}                                
                                </a> 
                            </p>
                            
                        </div>
                    </div>

                    <div class="mt-2">
                        <div class="mt-3">
                            Status lamaran: 
                            <strong v-if="statusLamaran == 'Lulus Seleksi Berkas'"
                            style="color : #2b961f">{{ statusLamaran }}</strong>

                            <strong v-else-if="statusLamaran == 'Tidak Lulus Seleksi Berkas'"
                            style="color : #ff0000">{{ statusLamaran }}</strong>
                        </div>
                        <div v-if="statusLamaran == null && currentUser.role == 'ROLE_ADMIN'">
                            <b-form-select v-model="tmpStatus" :options="options"></b-form-select>
                            <b-btn v-b-modal.modal-1 class="mt-3">Simpan</b-btn>
                        </div>
                        <b-modal ref="modal" id="modal-1" title="Konfirmasi Pengubahan Status Lamaran" v-bind:hide-footer="true">
                            <div class="detail">
                                <p class="title">Apakah anda yakin untuk mengubah statusnya ? </p>
                                <hr>
                                <div class="btn-group">
                                <button type="submit" class="btn btn-danger mr-2" @click="setStatus()">Ubah</button>
                                <button class="btn btn-light" @click="hideModal">Batal</button>
                                </div>
                            </div>
                        </b-modal>
                        
                    </div>
                </div>
            </div>
            
                
            </div>
            <div v-if="statusLamaran == 'Lulus Seleksi Berkas'">
                <hr/>
                <div>
                    <div class="text-md-left h5" style="color:#C53751">
                        Tes Medis
                    </div>
                    <hr style="border:2px solid #C53751"/>
                    <tes-medis
                    v-bind:tes_medis="tesMedis.data"
                    v-bind:id_pelamar="idPelamar"
                    @refreshTesMedis="loadNewTesMedis()"></tes-medis>
                </div>
                <div>
                    
                    <div class="text-md-left h5" style="color:#C53751">
                        Tes Tulis
                    </div>
                    
                    <hr style="border:2px solid #C53751"/>
                    <tes-tulis
                    v-bind:tes_tulis="tesTulis.data"
                    v-bind:tes_medis="tesMedis.data"
                    v-bind:id_pelamar="idPelamar"
                    @refreshTesTulis="loadNewTesTulis()"></tes-tulis>
                </div>
                <div>
                    
                    <div class="text-md-left h5" style="color:#C53751">
                        Tes Wawancara
                    </div >
                    <hr style="border:2px solid #C53751"/>
                    <tes-wawancara
                    v-bind:tes_wawancara="tesWawancara.data"
                    v-bind:tes_tulis="tesTulis.data"
                    v-bind:id_pelamar="idPelamar"
                    @refreshTesWawancara="loadNewTesWawancara()"></tes-wawancara>
                </div>
            </div>

            <b-modal size="lg" ref="modalOk" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Status Lamaran Berhasil di Ubah
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
                        Status Lamaran Gagal di Ubah
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
        </v-container>
        
        <!-- <b-container v-else-if="pelamar === null && status === 200" class="my-auto" style="height:100%;width:100%">
            <b-container class="my-auto h-100 w-50 mx-auto ">
            <b-card class="my-auto">
                <b-card-text>
                    <div class="alert alert-danger">
                        Data yang anda cari tidak dapat ditemukan!
                    </div>
                    <div class="d-flex justify-content-center">
                        <b-button class="button-back pl-5 pr-5" @click="errorBack()">Kembali</b-button>
                    </div>
                </b-card-text>
            </b-card>
            </b-container>
        </b-container> -->
        <!-- <b-container v-else-if="!(status === 200)" class="my-auto" style="height:100%;width:100%">
            <b-container class="my-auto h-100 w-50 mx-auto ">
            <b-card class="my-auto">
                <b-card-text>
                    <div class="alert alert-danger">
                       Erro Path, Gunakan Pattern Path yang sesuai dan dapat digunakan!
                    </div>
                    <div class="d-flex justify-content-center">
                        <b-button class="button-back pl-5 pr-5" @click="errorBack()">Kembali</b-button>
                    </div>
                </b-card-text>
            </b-card>
        </b-container>
        </b-container> -->
    </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import TesMedis from './TesMedis/TesMedis.vue'
import TesTulis from './TesTulis/TesTulis.vue'
import TesWawancara from './TesWawancara/TesWawancara.vue'
import LamaranService from '../../service/LamaranService'
import axios from 'axios'
import authHeader from '../../service/AuthHeader'

Vue.config.productionTip = false
Vue.filter('format', function(value){
  if(value){
    return moment(String(value)).format('DD MMMM YYYY')
  }
});
export default {
    name:"tes-layout",
    components : {
        TesTulis,
        TesMedis,
        TesWawancara
    },
    data(){
        return{
            icons:{
                card:'mdi-account-card-details',
                location:'mdi-map-marker-radius',
                handphone:'mdi-cellphone-android',
                phone:'mdi-phone',
                tgl:'mdi-table-large'
            },
            idPelamar :0,
            pelamar : Object,
            berkas : Object,
            ktp : Object,
            kk : Object,
            npwp : Object,
            bpjsKet : Object,
            bpjsKes : Object,
            kis : Object,
            tesMedis : null,
            tesTulis : null,
            tesWawancara : null,

            nik : "",
            namaIbu : "",
            alamatDomisili : "",
            rtDomisili : "",
            rwDomisili : "",
            kelurahanDomisili : "",
            kecamatanDomisili : "",
            kodePosDomisili : "",
            telepon : "",
            pendidikan : "",
            noNpwp : "",
            noBpjsKetenagakerjaan : "",
            noBpjsKesehatan : "",
            noKis : "",
            pengalamanKerja : "",
            tahunKerja : "",
            namaPekerjaan : "",
            status : true,
            statusLamaran :'',
            tmpStatus : '',
            options :[
                { text: '---', value: null, },
                {text: 'Lulus Seleksi Berkas', value: 'Lulus Seleksi Berkas'},
                {text: 'Tidak Lulus Seleksi Berkas', value: 'Tidak Lulus Seleksi Berkas'}
            ]
        
        }
    },

    //check error
    async created(){
        try{
            const URI = 'https://sixacti-api.herokuapp.com/api';
            this.idPelamar = Number(this.$route.params.id);
            this.user = this.$store.state.dummy[this.idPelamar-1]
            const getData = await axios.get(URI + "/pelamar/get/" + this.$route.params.id, {responseType:'json', headers:authHeader()});
            this.data = getData;
            this.pelamar = getData.data;
            const getTesMedis = await axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id, {responseType:'json', headers:authHeader()});
            this.tesMedis = getTesMedis;
            const getTesTulis = await axios.get(URI + "/tes/tulis/pelamar/" + this.$route.params.id, {responseType:'json', headers:authHeader()});
            this.tesTulis = getTesTulis;
            const getTesWawancara = await axios.get(URI + "/tes/wawancara/pelamar/" + this.$route.params.id, {responseType:'json', headers:authHeader()});
            this.tesWawancara = getTesWawancara;
            console.log(getTesMedis);
            console.log(getTesTulis);
            console.log(getTesWawancara);
            console.log(this.pelamar);

            this.refreshDetailLamaran();
        }catch(error){
            console.log(error);
        }
    },
    async mounted(){
        try{
            const URI = 'https://sixacti-api.herokuapp.com/api';
            const getTesMedis = await axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id, {responseType:'json', headers:authHeader()});
            this.tesMedis = getTesMedis;
            console.log(getTesMedis);
            // console.log(getData);
        }catch(error){
            console.log(error)
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods:{
        refreshDetailLamaran() {
            LamaranService.getLamaranById(this.id).then(res => {
                this.pelamar = res.data.pelamar;
                this.berkas = res.data.berkasModel;
                this.ktp = res.data.ktpModel;
                this.kk = res.data.kkModel;
                this.npwp = res.data.npwpModel;
                this.bpjsKet = res.data.bpjsKetenagakerjaan;
                this.bpjsKes = res.data.bpjsKesehatanModel;
                this.kis = res.data.kisModel;

                this.nik = res.data.nik;
                this.namaIbu = res.data.namaIbu;
                this.alamatDomisili = res.data.alamatDomisili;
                this.rtDomisili = res.data.rtDomisili;
                this.rwDomisili = res.data.rwDomisili;
                this.kelurahanDomisili = res.data.kelurahanDomisili;
                this.kecamatanDomisili = res.data.kecamatanDomisili;
                this.kodePosDomisili = res.data.kodePosDomisili;
                this.telepon = res.data.telepon;
                this.pendidikan = res.data.pendidikan;
                this.noBpjsKetenagakerjaan = res.data.noBpjsKetenagakerjaan;
                this.noBpjsKesehatan = res.data.noBpjsKesehatan;
                this.noKis = res.data.noKis;
                this.noNpwp = res.data.npwp;
                this.tahunKerja = res.data.tahunKerja;
                this.pengalamanKerja = res.data.pengalamanKerja;
                this.namaPekerjaan = res.data.namaPekerjaan;
                this.statusLamaran = res.data.statusLamaran;

                this.status =res.status;
            });
            


        },
        errorBack(){
             this.$router.push('/listPelamar', { headers:authHeader() });
        },
        async loadNewTesMedis(){
            try{
                const URI = 'https://sixacti-api.herokuapp.com/api';
                const getTesMedis =await axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id, { headers:authHeader() });
                this.tesMedis = getTesMedis;
            }catch(error){
                console.log(error);
            }
        },
        async loadNewTesTulis(){
            try{
                const URI = 'https://sixacti-api.herokuapp.com/api';
                const getTesTulis = await axios.get(URI + "/tes/tulis/pelamar/" + this.$route.params.id, { headers:authHeader() });
                this.tesTulis = getTesTulis;
            }catch(error){
                console.log(error);
            }
        },
        async loadNewTesWawancara(){
            try{
                const URI = 'https://sixacti-api.herokuapp.com/api';
                const getTesWawancara = await axios.get(URI + "/tes/wawancara/pelamar/" + this.$route.params.id, { headers:authHeader() });
                this.tesWawancara = getTesWawancara;
            }catch(error){
                console.log(error);
            }
        },
        setStatus(){
            try{
                LamaranService.setStatus(this.id, {
                    statusLamaran : this.tmpStatus
                })
                .then(ress => {
                    this.retStatus = ress.data

                    if(ress.status == 200){
                        this.openModal(this.id)
                    }
                    else{
                        this.errorModal()
                    }
                });
                
            }catch(error){
                console.log(error);
            }
        },
        openModal(id) {
            this.$refs['modalOk'].show();
            window.setTimeout(function() {
                window.location.href = "/tes/" + id;
            }, 2000);
        },

        errorModal(){
            this.$refs['error-modal'].show();
        },
        hideModal(){
          this.$refs['modal'].hide();
        },
        downloadKtp(fileName){
            // BerkasLamaran.downloadKTP(fileName).then(() => {
            //     this.refreshDetailLamaran();
            // })
            
            axios({
                url: 'https://sixacti-api.herokuapp.com/api/download/ktp/' + fileName,
                method : 'GET',
                responseType : 'blob',
                headers:authHeader(),
            }).then((response) =>  {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', fileName);
                document.body.appendChild(fileLink);

                fileLink.click();
            })
        },
        downloadBerkas(fileName){
           
            axios({
                url: 'https://sixacti-api.herokuapp.com/api/download/resume/' + fileName,
                method : 'GET',
                responseType : 'blob',
                headers:authHeader()
            }).then((response) =>  {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', fileName);
                document.body.appendChild(fileLink);

                fileLink.click();
            })
        },
        downloadKK(fileName){
            // BerkasLamaran.downloadKTP(fileName).then(() => {
            //     this.refreshDetailLamaran();
            // })
            axios({
                url: 'https://sixacti-api.herokuapp.com/api/download/kk/' + fileName,
                method : 'GET',
                responseType : 'blob',
                headers:authHeader(),
            }).then((response) =>  {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', fileName);
                document.body.appendChild(fileLink);

                fileLink.click();
            })
        },
        downloadBpjsKes(fileName){
            // BerkasLamaran.downloadKTP(fileName).then(() => {
            //     this.refreshDetailLamaran();
            // })
            axios({
                url: 'https://sixacti-api.herokuapp.com/api/download/bpjsKes/' + fileName,
                method : 'GET',
                responseType : 'blob',
                headers:authHeader(),
            }).then((response) =>  {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', fileName);
                document.body.appendChild(fileLink);

                fileLink.click();
            })
        },
        downloadBpjsKet(fileName){
            // BerkasLamaran.downloadKTP(fileName).then(() => {
            //     this.refreshDetailLamaran();
            // })
            axios({
                url: 'https://sixacti-api.herokuapp.com/api/download/bpjsKet/' + fileName,
                method : 'GET',
                responseType : 'blob',
                headers:authHeader(),
            }).then((response) =>  {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', fileName);
                document.body.appendChild(fileLink);

                fileLink.click();
            })
        },
        downloadKIS(fileName){
            // BerkasLamaran.downloadKTP(fileName).then(() => {
            //     this.refreshDetailLamaran();
            // })
            axios({
                url: 'https://sixacti-api.herokuapp.com/api/download/kis/' + fileName,
                method : 'GET',
                responseType : 'blob',
                headers:authHeader(),
            }).then((response) =>  {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', fileName);
                document.body.appendChild(fileLink);

                fileLink.click();
            })
        },
        downloadNPWP(fileName){
            // BerkasLamaran.downloadKTP(fileName).then(() => {
            //     this.refreshDetailLamaran();
            // })
            axios({
                url: 'https://sixacti-api.herokuapp.com/api/download/npwp/' + fileName,
                method : 'GET',
                responseType : 'blob',
                headers:authHeader(),
            }).then((response) =>  {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', fileName);
                document.body.appendChild(fileLink);

                fileLink.click();
            })
        }
    }
}

</script>

<style lang="scss">
.text{
    font-family: 'oswald';
}
.button{
    border:none !important;
    color:white !important;
    background-color: black !important;
}
.button-secondary{
    border:none !important;
    color:black !important;
    background-color: transparent !important;
}
.button-back{
    color:black !important;
    background-color: transparent !important;
}
.button-back:hover{
    color:black !important;
    background-color: rgba(0, 0, 0, 0.096) !important;
}
.name{
    color:#C53751;
}

#headerCardBerkas{
    background: #C53751;

    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height */


    color: #FFFFFF;
}

ol li{
  list-style-type: none;
}

.background{
    background-color: white !important;
}
</style>