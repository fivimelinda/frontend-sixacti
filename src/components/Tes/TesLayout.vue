<template>
    <div class="tes text" >
        <v-container v-if="status === 200 && !(pelamar === null)">
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
                                    <bold 
                                    style="color:#C53751">NIK : </bold>
                                    
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
                                    <bold 
                                    style="color:#C53751">Nama Ibu : </bold>
                                    
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
                                    <bold 
                                    style="color:#C53751">Alamat Domisili : </bold>
                                    
                                </p>
                                </div>
                                <div class="col col-6">
                                <p>
                                    {{alamatDomisili}}
                                </p>
                                <p>
                                    <bold 
                                    style="color:#C53751">RT / RW : </bold>
                                    {{rtDomisili}} / {{rwDomisili}}
                                </p>
                                <p>
                                    <bold 
                                    style="color:#C53751">Kelurahan : </bold>
                                    {{kelurahanDomisili}}
                                </p>
                                <p>
                                    <bold 
                                    style="color:#C53751">Kecamatan : </bold>
                                    {{kecamatanDomisili}}
                                </p>
                                <p>
                                    <bold 
                                    style="color:#C53751">Kode Pos : </bold>
                                    {{kodePosDomisili}}
                                </p>
                                </div>

                            </div>

                            <div class="row justify-start">
                                <div class="col col-6">
                                    <p>
                                        <bold 
                                        style="color:#C53751">No. Telepon : </bold>
                                        
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
                                        <bold 
                                        style="color:#C53751">Pendidikan : </bold>
                                        
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
                                        <bold 
                                        style="color:#C53751">No. BPJS Kesehatan : </bold>
                                        
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
                                        <bold 
                                        style="color:#C53751">No. BPJS Ketenagakerjaan : </bold>
                                        
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
                                        <bold 
                                        style="color:#C53751">No. Kartu Indonesia Sehat : </bold>
                                        
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
                                        <bold 
                                        style="color:#C53751">Nomor Pokok Wajib Pajak : </bold>
                                        
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
                                        <bold 
                                        style="color:#C53751">Pengalaman Kerja Terakhir : </bold>
                                        
                                    </p>
                                </div>
                                <div class="col col-6">
                                    <p>
                                        <bold 
                                        style="color:#C53751">Tahun Kerja : </bold>
                                        {{tahunKerja}}
                                    </p>
                                    <p>
                                        <bold 
                                        style="color:#C53751">Nama Pekerjaan : </bold>
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
                                <bold>Resume : </bold>
                                <a @click="downloadBerkas(berkas.fileName)">
                                    {{berkas.fileName}}                                
                                </a> 
                            </p>
                            <p>
                                <bold>KTP : </bold>
                                <a @click="downloadKtp(ktp.fileName)">
                                    {{ktp.fileName}}                                
                                </a> 
                            </p>
                            <p>
                                <bold>Kartu Keluarga : </bold>
                                <a @click="downloadKK(kk.fileName)">
                                    {{kk.fileName}}                                
                                </a> 
                            </p>
                            <p v-if="bpjsKes">
                                <bold>BPJS Kesehatan : </bold>
                                <a @click="downloadBpjsKes(bpjsKes.fileName)">
                                    {{bpjsKes.fileName}}                                
                                </a> 
                            </p>
                            <p v-if="bpjsKet">
                                <bold>BPJS Ketenagakerjaan : </bold>
                                <a @click="downloadBpjsKet(bpjsKet.fileName)">
                                    {{bpjsKet.fileName}}                                
                                </a> 
                            </p>
                            <p v-if="kis">
                                <bold>Kartu Indonesia Sehat : </bold>
                                <a @click="downloadKIS(kis.fileName)">
                                    {{kis.fileName}}                                
                                </a> 
                            </p>
                            <p v-if="npwp">
                                <bold>NPWP : </bold>
                                <a @click="downloadNPWP(npwp.fileName)">
                                    {{npwp.fileName}}                                
                                </a> 
                            </p>
                            
                        </div>
                    </div>

                    <!-- <div class="mt-2">
                        <form >
                            <label>Status</label>
                            <b-dropdown></b-dropdown>
                        </form>
                    </div> -->
                </div>
            </div>

            <!-- <div>
                <div class="text-md-left h5" style="color:#C53751">
                    Berkas Pelamar
                </div>
                <hr/>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="card-header" id="headerCardBerkas">
                                Berkas KTP
                            </div>
                            <div class="card-body">
                                <a @click="downloadKtp(ktp.fileName)">
                                    {{ktp.fileName}}                                
                                </a> 
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="card-header" id="headerCardBerkas">
                                Berkas Resume
                            </div>
                            <div class="card-body">
                                {{berkas.fileName}}
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="card-header" id="headerCardBerkas">
                                Berkas Resume
                            </div>
                            <div class="card-body">
                                {{berkas.fileName}}
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="card-header" id="headerCardBerkas">
                                Berkas Resume
                            </div>
                            <div class="card-body">
                                {{berkas.fileName}}
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="card-header" id="headerCardBerkas">
                                Berkas Resume
                            </div>
                            <div class="card-body">
                                {{berkas.fileName}}
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="card-header" id="headerCardBerkas">
                                Berkas Resume
                            </div>
                            <div class="card-body">
                                {{berkas.fileName}}
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <div v-if="status == 'Lulus Seleksi Berkas'">
                <div>
                    <div class="text-md-left h5" style="color:#C53751">
                        Tes Medis
                    </div>
                    <hr/>
                    <tes-medis
                    v-bind:tes_medis="tesMedis.data"
                    v-bind:id_pelamar="idPelamar"
                    @refreshTesMedis="loadNewTesMedis()"></tes-medis>
                </div>
                <div>
                    <div class="text-md-left h5" style="color:#C53751">
                        Tes Tulis
                    </div>
                    
                    <hr/>
                    <tes-tulis
                    v-bind:tes_tulis="tesTulis.data"
                    v-bind:tes_medis="tesMedis.data"
                    v-bind:id_pelamar="idPelamar"
                    @refreshTesTulis="loadNewTesTulis()"></tes-tulis>
                </div>
                <div>
                    <div class="text-md-left h5" style="color:#C53751">
                        Tes Wawancara
                    </div>
                    <hr/>
                    <tes-wawancara
                    v-bind:tes_wawancara="tesWawancara.data"
                    v-bind:tes_tulis="tesTulis.data"
                    v-bind:id_pelamar="idPelamar"
                    @refreshTesWawancara="loadNewTesWawancara()"></tes-wawancara>
                </div>
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
//import BerkasLamaran from '../../service/BerkasLamaran'
import axios from 'axios'

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
            tesMedis : Object,
            tesTulis : Object,
            tesWawancara : Object,

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
            status : ""
        
        }
    },

    //check error
    async created(){
        try{
            this.refreshDetailLamaran();

            // const URI = 'http://localhost:8081/api';
            // this.idPelamar = Number(this.$route.params.id);
            // this.user = this.$store.state.dummy[this.idPelamar-1]
            // const getData = await axios.get(URI + "/pelamar/get/" + this.$route.params.id, {responseType:'json'});
            // this.data = getData;
            // this.pelamar = getData.data;
            // const getTesMedis = await axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id, {responseType:'json'});
            // this.tesMedis = getTesMedis;
            // const getTesTulis = await axios.get(URI + "/tes/tulis/pelamar/" + this.$route.params.id, {responseType:'json'});
            // this.tesTulis = getTesTulis;
            // const getTesWawancara = await axios.get(URI + "/tes/wawancara/pelamar/" + this.$route.params.id, {responseType:'json'});
            // this.tesWawancara = getTesWawancara;
            // console.log(getTesMedis);
            // console.log(getTesTulis);
            // console.log(getTesWawancara);
            // console.log(getData);
        }catch(error){
            console.log(error);
        }
    },
    async mounted(){
        try{
            const URI = 'http://localhost:8081/api';
            const getTesMedis = await axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id, {responseType:'json'});
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
                this.status =res.status;
            });
            const URI = 'http://localhost:8081/api';
            this.idPelamar = Number(this.id);
            const getTesMedis = axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id, {responseType:'json'});
            this.tesMedis = getTesMedis;
            const getTesTulis = axios.get(URI + "/tes/tulis/pelamar/" + this.$route.params.id, {responseType:'json'});
            this.tesTulis = getTesTulis;
            const getTesWawancara = axios.get(URI + "/tes/wawancara/pelamar/" + this.$route.params.id, {responseType:'json'});
            this.tesWawancara = getTesWawancara;


        },
        errorBack(){
             this.$router.push('/listPelamar');
        },
        async loadNewTesMedis(){
            try{
                const URI = 'http://localhost:8081/api';
                const getTesMedis =await axios.get(URI + "/tes/medis/pelamar/" + this.$route.params.id);
                this.tesMedis = getTesMedis;
            }catch(error){
                console.log(error);
            }
        },
        async loadNewTesTulis(){
            try{
                const URI = 'http://localhost:8081/api';
                const getTesTulis = await axios.get(URI + "/tes/tulis/pelamar/" + this.$route.params.id);
                this.tesTulis = getTesTulis;
            }catch(error){
                console.log(error);
            }
        },
        async loadNewTesWawancara(){
            try{
                const URI = 'http://localhost:8081/api';
                const getTesWawancara = await axios.get(URI + "/tes/wawancara/pelamar/" + this.$route.params.id);
                this.tesWawancara = getTesWawancara;
            }catch(error){
                console.log(error);
            }
        },
        downloadKtp(fileName){
            // BerkasLamaran.downloadKTP(fileName).then(() => {
            //     this.refreshDetailLamaran();
            // })
            axios({
                url: 'http://localhost:8081/api/download/ktp/' + fileName,
                method : 'GET',
                responseType : 'blob',
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
            // BerkasLamaran.downloadKTP(fileName).then(() => {
            //     this.refreshDetailLamaran();
            // })
            axios({
                url: 'http://localhost:8081/api/download/resume/' + fileName,
                method : 'GET',
                responseType : 'blob',
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
                url: 'http://localhost:8081/api/download/resume/' + fileName,
                method : 'GET',
                responseType : 'blob',
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
                url: 'http://localhost:8081/api/download/bpjsKes/' + fileName,
                method : 'GET',
                responseType : 'blob',
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
                url: 'http://localhost:8081/api/download/bpjsKet/' + fileName,
                method : 'GET',
                responseType : 'blob',
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
                url: 'http://localhost:8081/api/download/kis/' + fileName,
                method : 'GET',
                responseType : 'blob',
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
                url: 'http://localhost:8081/api/download/npwp/' + fileName,
                method : 'GET',
                responseType : 'blob',
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
    background-color: rgba(255, 227, 227, 0.637) !important;
}
</style>