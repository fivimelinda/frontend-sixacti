<template>
    <div class="GenerateSuratKontrakHome">
        <br>
        <h1>Generate Surat Kontrak</h1>
        <br>
        <v-card
        color="#FFE3E3"
        id="main"
        max-width="600">
         <v-card-title  dense class="white--text" id="title">Detail Kontrak</v-card-title>
         <v-card-text class="black--text font-weight-bold" id="sub-title">{{name[this.$route.params.index]}}</v-card-text>
         <v-divider light id="line"></v-divider>
         <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Departemen</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{departemen[this.$route.params.index]}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Tanggal Mulai</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.tanggal_mulai.substring(0,10)}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Tanggal Berakhir</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.tanggal_berakhir.substring(0,10)}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Periode</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.periode}}</v-card-text>
            </v-flex>
        </v-layout>
         <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Gaji</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">Rp. {{formatPrice(gaji)}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Nomor Kontrak</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <v-card-text class="data">{{req.noSurat}}</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Nomor Surat</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <input class="form-control" type="string" id="nomorSurat" placeholder="masukkan nomor surat" v-model="nomorSurat">
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Nama penandatangan</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <input class="form-control" type="string" id="namaTtd" placeholder="masukkan nama penandatangan" v-model="namaTtd">
            </v-flex>
        </v-layout>
        <v-card flat color="#FBC4C4" class="notify">
            <div id="attention">Perhatian!</div>
            <div id="attention-detail">Apabila nomor surat dan nama penandatangan tidak diisi, maka nomor surat akan diisi nomor kontrak dan nama penandatangan akan diisi nama pemilik akun ini</div>
        </v-card>
        <div class="button-wrapper">
            <b-button v-b-modal.modal-1 class="btn btn-light" @click="generate" style="margin-right: 3px">Generate Surat Kontrak</b-button>
            <b-button v-b-modal.modal-1 class="btn btn-dark" @click="batal" style="margin-left: 3px">Batalkan</b-button>
        </div>
        </v-card>

    </div>







</template>
<script src="js/jspdf.customfonts.min.js"></script>
<script src ="arial-normal.js" type="module"></script>
<script>
import jsPDF from 'jspdf';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/id';
import authHeader from '../../service/AuthHeader';

export default {
    data() {
        return {
            name: [],
            departemen: [],
            req: '',
            today1: '',
            gaji: '',
            nomorSurat: '',
            namaTtd: ''
        }
    },
    mounted() {
        this.loadName(),
        this.loadDepartemen(),
        this.load(),
        this.today(),
        this.getGaji()
    },
    methods : {
        generate() {
            if(this.nomorSurat === ''){
                this.nomorSurat = this.req.noSurat.toString()
            }
            if(this.namaTtd === ''){
                this.namaTtd = this.$store.state.auth.user.username
                console.log(this.$store.state.auth.user)
            }
            this.changeStatus();
            var doc = new jsPDF();
            doc.setFontSize(13);
            doc.setLineHeightFactor(1);
            doc.setFont('helvetica');
            doc.setFontType('bold');
            doc.text('PERJANJIAN KERJA PARUH WAKTU', 105, 10, 'center');
            doc.setFontType('normal');
            // var paragraph="                                                                      SURAT KONTRAK KERJA\n\n                                                                                   "+"\n\n"+"\n\nYang bertanda tangan dibawah ini\n\n  Nama         : "+this.namaTtd+"\n\n  Jabatan       : Staf Sumber Daya Manusia\n\nDalam hal ini bertindak untuk dan atas nama PT. Xacti Indonesia yang beralamat di Jl. Raya Bogor Km. 35, Sukamaju Baru, Tapos, Depok 16455, Jawa Barat, Indonesia yang akan disebut Pihak Pertama\n\n  Nama                            : "+this.name[this.$route.params.index]+"\n\n  Jabatan                         : Karyawan Kontrak\n\nDalam hal ini bertindak atas nama sendiri, yang disebut sebagai Pihak Kedua.\n\nPada "+this.today1+", dengan memilih tempat di PT. Xacti Indonesia Manajemen Pihak Pertama dan Pihak Kedua sepakat untuk saling terikat dalam surat kontrak kerja karyawan dengan syarat dan ketentuan diatur sebagai berikut :\n\n                                                                   PASAL 1 KETENTUAN UMUM\n\n  1.  Pihak Kedua akan taat serta tunduk pada tata tertib kerja yang berlaku, perintah langsung maupun tidak dari Pihak Pertama ataupun wakil dari PT. Xacti Indonesia.\n\n  2.  Apabila Pihak Kedua melakukan pelanggaran kerja maka Pihak Pertama berhak memberikan sanksi sesuai dengan pelangaran yang dilakukan oleh Pihak Kedua.\n\n                                                                     PASAL 2 JANGKA WAKTU\n\n  1.  Kontrak kerja ini akan berlaku selama 3 (tiga) tahun terhitung dari penandatangan, yakni pada tanggal 21 Juli 2017 sampai dengan 2 Agustus 2020.\n\n  2.  Apabila kontrak kerja ini habis masa berlakunya, maka kedua kedua belah pihak bisa melakukan perpanjangan kontrak baru dengan kesepakatan bersama.\n\n                                                                     PASAL 3 WAKTU KERJA\n\nPihak kedua akan bekerja selama 6 jam perharinya dan 5 hari perminggunya belum termasuk waktu istirahat dengan rincian sebagi berikut :\n\n  Senin-Jumat        : 08.00-16.00 WIB\n\n  Istirahat      : 11.15-13.15 WIB\n\n                                                                             PASAL 4 UPAH\n\nPihak Kedua akan menerima gaji sebesar Rp. 3.000.000,00 (tiga juta rupiah) perbulannya.\n\n                                                          PASAL 5 PEMBERHENTIAN KERJA\n\nApabila Pihak Kedua melakukan tindak kriminal yang merugikan Pihak Pertama serta juga melakukan tindakan indisipiner kerja dan sudah mendapat surat peringatan sebanyak 3 (tiga) kali maka Pihak Pertama akan langsung memberhentikan Pihak Kedua dari pekerjaannya walaupun masa kontraknya masih\n\nDepok, 21 Juli 2017\n\n                                           Pihak pertama                                                          Pihak kedua\n\n";
            doc.setFontSize(9);
            var paragraph = 'PERJANJIAN KERJA WAKTU TERTENTU ( “Perjanjian” ) ini dibuat dan ditandatangani di Depok, Jawa Barat, pada '+this.today1+' oleh dan antara :'
            var par2 = 'PT Xacti Indonesia suatu perusahaan yang didirikan berdasarkan hukum Negara Republik Indonesia, bergerak dalam bidang Pembuatan Peralatan Elektronika dan Komponen serta Suku Cadang untuk Barang dan Peralatan Elektronika, beralamat di Jl. Raya Jakarta Bogor Km. 35, Tapos, Depok, Jawa Barat, dalam hal ini diwakili oleh '+this.namaTtd+'., selaku Section Manajer HRD\n\n(selanjutnya disebut "PIHAK PERTAMA")'
            // doc.text(this.namaTtd, 68, 287, 'center')
            // doc.text(this.name[this.$route.params.index], 146, 287, 'center')
            var lines =doc.splitTextToSize(paragraph, (210-15-15));
            var lines2 =doc.splitTextToSize(par2, (210-15-15));
            doc.text(15,20,lines);
            doc.text(15,30,'1.');
            doc.text(20,30,lines2);
            doc.text(15,50,'2.');
            doc.text(20,50,'a. Nama                                              :\n\nb. No. Kartu Tanda Penduduk (KTP)  :\n\nc. Alamat                                             :')
            doc.addPage();
            doc.text(20,20,'halo2');
            doc.save(this.req.noSurat+'.pdf');
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
        batal() {
            window.location.href = "/GenerateSuratKontrak"
        },
        today() {
            moment.locale('id');
            this.today1 = moment().format('Do MMMM YYYY');
        },
        load() {
            axios.get('http://localhost:8081/detailKontrak/get/'+this.$route.params.id,{ headers:authHeader() }).then(res => {
                this.req = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        loadName() {
            axios.get('http://localhost:8081/detailKontrak/getName',{ headers:authHeader() }).then(res => {
                this.name = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        loadDepartemen() {
            axios.get('http://localhost:8081/detailKontrak/getDepartemen',{ headers:authHeader() }).then(res => {
                this.departemen = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        changeStatus(){
            axios.put('http://localhost:8081/detailKontrak/changeStatus/'+this.$route.params.id,{ headers:authHeader() }).then(res => {
                console.log(res)
            })
        },
        loadDetailKontrak() {

        },
        getGaji() {
            axios.get('http://localhost:8081/detailKontrak/gaji/'+this.$route.params.id,{ headers:authHeader() }).then(res => {
                this.gaji = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>

<style>

.wrapper {
    text-align: center;
}

.button-wrapper{
    text-align: center;
}

/* .modal-button {
    position: absolute;
    top: 50%;
} */

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
    float: right ;
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



#main{
    margin-left: 100px;
}

@media only screen and (max-width: 600px){
    #main{
        margin-left: 10px;
        margin-right: 10px;
    }
    h1{
        margin-left: 10px;
    }
    .nav{
        margin-left: 0px;
    }
}

#title{
    font-family: 'oswald';
    background-color: #C53751;
    font-size: 18px;
    padding-top: 0;
    padding-bottom: 0;
}
#sub-title{
    margin-top: 15px;
    padding-bottom: 0;
}
#line{
    border-color: black;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
}
.v-card__text{
    color: #898989;
    padding-bottom: 0 ;
    padding-top: 10px;
}
.data{
    text-align:end;
    color: black;
    font-weight: bold;
    font-size: 18px !important;
}
.detail{
    padding-left: 15px;
    padding-right: 15px;
    /* font-size: 50px; */
}
.notify{
    margin: 15px 15px 15px 15px;
    padding: 5px 5px 5px 5px;
    font-size: 13px;
}
#attention{
    color: black;
    font-weight: bold;
}
#attention-detail{
    color: black;
}
#main{
    padding-bottom: 20px;
}
#btn-ubah{
    background-color: white;
    outline-color: black;
    outline-width: 3;
    color: black;
    font-weight: bold;
    font-size: 14px;
}
#btn-batal{
    background-color: black;
    font-weight: bold;
    font-size: 14px;
}
#my-btn-1{
    padding-left: 30px;
}
#my-btn-2{
    padding-right: 30px;
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