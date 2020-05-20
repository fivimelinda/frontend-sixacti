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
                <v-card-text>NIK</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <input class="form-control" type="string" id="nomorSurat" placeholder="masukkan nomor surat" v-model="nomorSurat">
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Nama perwakilan PT Xacti</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <input class="form-control" type="string" id="namaTtd" placeholder="masukkan nama perwakilan" v-model="namaTtd">
            </v-flex>
        </v-layout>
        <v-layout row class="detail">
            <v-flex xs6 md6>
                <v-card-text>Jabatan karyawan</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
                <input class="form-control" type="string" id="jabatan" placeholder="masukkan jabatan karyawan" v-model="jabatan">
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
            namaTtd: '',
            user: '',
            section: '',
            jabatan: ''
        }
    },
    mounted() {
        this.loadName(),
        this.loadDepartemen(),
        this.load(),
        this.today(),
        this.getGaji(),
        this.getUser(),
        this.getSection()
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
            doc.text(20,50,'a. Nama                                              :\n\nb. No. Kartu Tanda Penduduk (KTP)  :                                                                                       NIK :\n\nc. Alamat                                             :\n\n\nd. Tempat / Tanggal lahir / Umur         :\n\ne. Jenis kelamin                                   :                                                           Section : \n\n(selanjutnya disebut "PIHAK KEDUA").')
            doc.setFontSize(10);
            doc.setFontType('bold');
            doc.text(this.name[this.$route.params.index].toUpperCase(),76, 50)
            doc.setFontType('normal');
            doc.text(this.user.nik.toUpperCase(),76, 56.7)
            doc.setFontSize(14);
            doc.text(this.nomorSurat,160, 56.6)
            doc.setFontSize(10);
            doc.text(this.user.alamat.toUpperCase()+", "+this.user.kelurahan.toUpperCase()+", "+this.user.kecamatan.toUpperCase(), 76, 63.2)
            var umur = new Date(this.user.tanggal_lahir);
            var umur2 = moment().diff(umur, 'years');
            doc.text(this.user.tempat_lahir.toUpperCase()+"   /   "+this.user.tanggal_lahir.substring(0,10).toUpperCase()+"   /   "+umur2+" TAHUN", 76, 72)
            var kelamin;
            if(this.user.jenis_kelamin == true){
                kelamin = "LAKI-LAKI"
            }else{
                kelamin = "WANITA"
            }
            doc.text(kelamin,76, 78.8)
            doc.text(this.departemen[this.$route.params.index].toUpperCase()+" / "+this.section.toUpperCase(), 140, 78.8)
            doc.setFontSize(9);
            
            doc.setFontType('bold');
            doc.text('Pasal 1', 105, 90.5, 'center');
            doc.setFontType('normal');
            doc.text(15,95,'1.1');
            var par3 = 'PIHAK PERTAMA menerima dan mempekerjakan PIHAK KEDUA, dalam hubungan kerja waktu tertentu, dengan lokasi kerja di alamat PIHAK PERTAMA sebagaimana disebutkan di atas, dengan ketentuan sebagai berikut:'
            var lines3 = doc.splitTextToSize(par3, (210-15-15));
            doc.text(21, 95, lines3)
            doc.setFontSize(10.2);
            doc.text(21, 103, 'Sejak Tanggal/Bulan/Tahun                  : '+this.req.tanggal_mulai.substring(0,10)+'\n\nSampai dengan Tanggal/Bulan/Tahun  : '+this.req.tanggal_berakhir.substring(0,10)+'\n\nJabatan                                                  : '+this.jabatan+'\n\nKewajiban melapor kepada                    : Atasan\n\nUpah Pokok                                            : Rp. '+this.formatPrice(this.gaji)+'\n\nBantuan Transport per bulan                 : Rp.210.000\n\nTotal Jam Kerja Normal Per Minggu      : 40 jam / minggu\n\nMakan                                                    :  1 x sehari yang diberikan secara cuma-cuma oleh PIHAK PERTAMA')
            doc.setFontSize(9);
            var par4 = 'Tugas-tugas PIHAK KEDUA sesuai dengan yang diperlukan dalam jabatannya pada PIHAK PERTAMA serta tugas- tugas lainnya sebagaimana dan pada saat diberikan oleh atasannya. PIHAK KEDUA setuju untuk menggunakan usaha terbaiknya dalam melaksanakan tugasnya dengan tunduk pada peraturan perundang-undangan yang berlaku serta ketentuan, peraturan dan kebijakan di PIHAK PERTAMA.\n\nPIHAK PERTAMA dapat sewaktu-waktu mengubah jabatan PIHAK KEDUA, sebagaimana dimaksud di dalam Perjanjian ini, serta mengubah perincian tugas dan tanggung jawab PIHAK KEDUA sesuai dengan situasi dan kondisi serta kebutuhan PIHAK PERTAMA, dengan pemberitahuan tertulis kepada PIHAK KEDUA.\n\nPIHAK PERTAMA dan PIHAK KEDUA dengan ini setuju bahwa apabila ternyata jangka waktu berlakunya Perjanjian ini perlu diubah, maka perubahan atas jangka waktu berlakunya perjanjian tersebut bukan merupakan perpanjangan ataupun pembaharuan jangka waktu berlakunya perjanjian sepanjang :'
            var lines4 = doc.splitTextToSize(par4, (210-15-15));
            doc.text(21,160,lines4)
            doc.text(15,188.4,'1.2')
            doc.text(22,199, '(i).')
            doc.text(22,205.2, '(ii).')
            var par5 = 'perubahan tersebut telah disepakati oleh PIHAK PERTAMA dan PIHAK KEDUA secara tertulis dalam bentuk suatu perjanjian perubahan terhadap Perjanjian ini; dan\nperubahan tersebut serta perjanjian perubahan sebagaimana dimaksud dalam butir (i) di atas diadakan 1 ( satu ) bulan sebelum ( dan dalam keadaan apapun lebih dari 7 ( tujuh ) hari kerja ) sebelum berakhirnya jangka waktu berlakunya Perjanjian'
            var lines5 = doc.splitTextToSize(par5, (198-15-15));
            doc.text(29, 199, lines5)
            doc.text(15,216,'1.3')
            var par6 = 'Azas yang dianut dalam pembayaran imbalan jasa adalah berdasarkan azas ”NO WORK NO PAY” sesuai dengan UU no. 13 tahun 2003 pasal 93 ayat 1'
            var lines6 = doc.splitTextToSize(par6, (210-15-15));
            doc.text(21, 216, lines6)
            doc.setFontType('bold');
            doc.text('Pasal 2', 105, 223, 'center');
            doc.setFontType('normal');
            var par7 = 'Hak cuti sebanyak 12 ( dua belas ) hari baru timbul dan dapat diberikan kepada PIHAK KEDUA setelah menjalani masa kerja 12 ( dua belas ) bulan di PIHAK PERTAMA. Apabila PIHAK KEDUA belum mencapai masa kerja 12 ( dua belas ) bulan tersebut, hak cuti belum dapat diambil.\n\nHak cuti yang belum diambil, akan diganti oleh PIHAK PERTAMA apabila PIHAK KEDUA telah selesai menjalankan masa kontrak kerja dengan PIHAK PERTAMA\n\nApabila PIHAK KEDUA diperpanjang masa kontrak kerjanya setelah masa kontrak kerja pertamanya selama 12 (dua belas) bulan selesai, maka hak cuti 12 (dua belas) harinya berlaku otomatis.\n\nApabila PIHAK KEDUA sebagaimana disebut pada butir 3 ( tiga ) dan telah mengambil cuti pada masa perpanjangan kontrak kerja keduanya, maka PIHAK PERTAMA hanya membayar sisa hak cuti yang timbul saat menjalani kontrak kerja pertama dikurangi dengan hari cuti yang telah dipergunakannya\n\nPergantian sisa cuti PIHAK KEDUA dibayarkan berdasarkan atas perhitungan nilai upah saat hak cutinya timbul\n\nBagi PIHAK KEDUA yang hak cutinya telah diganti oleh PIHAK PERTAMA, maka PIHAK KEDUA dianggap telah mempergunakan hak cutinya.'
            var lines7 = doc.splitTextToSize(par7, (210-15-15));
            doc.text(21, 227, lines7)
            doc.text(15,227,'2.1')
            doc.text(15,240,'2.2')
            doc.text(15,249.8,'2.3')
            doc.text(15,259,'2.4')
            doc.text(15,270.3,'2.5')
            doc.text(15,277.4,'2.6')
            doc.text('- 1 / 2 -', 105, 288, 'center');

            doc.addPage();
            doc.setFontType('bold');
            doc.text('Pasal 3', 105, 10, 'center');
            doc.setFontType('normal');
            var par8 = 'Dalam hal Keselamatan dan Kesehatan Kerja, PIHAK PERTAMA dan PIHAK KEDUA akan menjalani kewajiban masing-masing sesuai Peraturan Perusahaan yang berlaku.\n\nApabila PIHAK KEDUA sengaja atau karena kelalaiannya menghilangkan / merusakkan alat-alat keselamatan kerja dan atau fasilitas kerja sehingga tidak dapat dipergunakan oleh PIHAK PERTAMA, PIHAK KEDUA sepakat membayar ganti rugi sesuai harga alat / barang yang rusak atau hilang.\n\nGanti rugi dimaksud dalam ayat 2, besarnya dalam bentuk Rupiah dan pelaksanaannya dilakukan oleh PIHAK PERTAMA melalui pemotongan gaji per bulan yang tidak melebihi 25 % dari upah pokok PIHAK KEDUA, kecuali hubungan kerja PIHAK PERTAMA dan PIHAK KEDUA berakhir atau tidak diperpanjang lagi, maka PIHAK KEDUA berkewajiban untuk melunasi sekaligus.\n\nPIHAK PERTAMA akan melaksanakan ketentuan-ketentuan yang telah ditetapkan dalam Undang-Undang No. 1 Tahun 1970 Keselamatan Kerja apabila terjadi kecelakaan kerja, melalui Asuransi Sosial Tenaga Kerja.'
            var lines8 = doc.splitTextToSize(par8, (210-15-15));
            doc.text(21,14 , lines8)
            doc.text(15,14,'3.1')
            doc.text(15,23.8,'3.2')
            doc.text(15,36,'3.3')
            doc.text(15,52,'3.4')

            doc.setFontType('bold');
            doc.text('Pasal 4', 105, 60, 'center');
            doc.setFontType('normal');
            var par9 = 'Perjanjian Kerja berakhir sesuai Peraturan Perusahaan yang berlaku. tanpa syarat bagi PIHAK PERTAMA untuk memberikan uang pesangon, uang penghargaan masa kerja, uang penggantian hak, uang pisah maupun pembayaran lainnya kepada PIHAK KEDUA'
            var lines9 = doc.splitTextToSize(par9, (210-15-15));
            doc.text(15, 64, lines9)

            doc.setFontType('bold');
            doc.text('Pasal 5', 105, 74, 'center');
            doc.setFontType('normal');
            var par10 = 'Dalam hal PIHAK PERTAMA masih membutuhkan jasa PIHAK KEDUA, maka dalam waktu selambat-lambatnya 7 ( tujuh ) hari sebelum Perjanjian Kerja ini berakhir akan diberitahukan kepada PIHAK KEDUA mengenai kemungkinan dilakukannya perpanjangan Perjanjian Kerja ini.\n\nDengan berakhirnya Perjanjian Kerja ini maka perpanjangan tidak berlaku dengan sendirinya, dan untuk setiap perpanjangan Perjanjian Kerja yang merupakan Addendum dari Perjanjian Kerja ini.'
            var lines10 = doc.splitTextToSize(par10, (210-15-15));
            doc.text(21, 78, lines10)
            doc.text(15,78,'5.1')
            doc.text(15,91,'5.2')

            doc.setFontType('bold');
            doc.text('Pasal 6', 105, 99, 'center');
            doc.setFontType('normal');
            var par11 = 'Selain yang telah ditetapkan dalam Perjanjian Kerja ini, PIHAK KEDUA tidak berhak atas pembayaran tunjangan ataupun fasilitas lainnya, kecuali ditentukan lain oleh PIHAK PERTAMA.'
            var lines11 = doc.splitTextToSize(par11, (210-15-15));
            doc.text(15, 103, lines11)

            doc.setFontType('bold');
            doc.text('Pasal 7', 105, 112, 'center');
            doc.setFontType('normal');
            var par12 = 'Hak dan kewajiban PIHAK KEDUA sebagai karyawan waktu tertentu yang tidak diatur dalam perjanjian ini tercantum di dalam Peraturan Perusahaan ("PP") kecuali hak-hak yang terkait langsung, timbul karena masa kerja.'
            var lines12 = doc.splitTextToSize(par12, (210-15-15));
            doc.text(15, 116, lines12)

            doc.setFontType('bold');
            doc.text('Pasal 8', 105, 125, 'center');
            doc.setFontType('normal');
            var par13 = 'Jika terdapat kekeliruan dan atau kekurangan dalam Perjanjian Kerja ini maka dapat diadakan perbaikan dan atau perubahan sebagaimana mestinya \nPerjanjian Kerja ini ditanda-tangani oleh kedua belah pihak dengan kesadaran dan tanpa paksaan, dimana masing-masing pihak telah mengetahui dan memahami isinya.'
            var lines13 = doc.splitTextToSize(par13, (210-15-15));
            doc.text(15, 129, lines13)

            doc.setFontType('bold');
            doc.text('Pasal 9', 105, 142, 'center');
            doc.setFontType('normal');
            var par14 = 'Tidak berlakunya salah satu atau lebih dari ketentuan-ketentuan Perjanjian ini tidak akan mempengaruhi keabsahan Perjanjian ini secara keseluruhan, dan dalam hal ketidakberlakuan tersebut, Perjanjian ini akan dianggap tidak mengandung ketentuan yang tidak sah tersebut.'
            var lines14 = doc.splitTextToSize(par14, (210-15-15));
            doc.text(15, 146, lines14)

            doc.setFontType('bold');
            doc.text('Pasal 10', 105, 156, 'center');
            doc.setFontType('normal');
            var par15 = 'Perjanjian ini merupakan kesepakatan final dan menyeluruh antara Para Pihak serta membatalkan dan menggantikan seluruh kesepakatan atau pehamanan sebelumnya, baik secara lisan maupun tertulis.'
            var lines15 = doc.splitTextToSize(par15, (210-15-15));
            doc.text(15, 160, lines15)

            doc.setFontType('bold');
            doc.text('Pasal 11', 105, 170, 'center');
            doc.setFontType('normal');
            var par16 = 'Perjanjian ini tunduk kepada ketentuan peraturan perundang-undangan yang berlaku di Indonesia'
            var lines16 = doc.splitTextToSize(par16, (210-15-15));
            doc.text(15, 174, lines16)

            doc.setFontType('bold');
            doc.text('Pasal 12', 105, 180, 'center');
            doc.setFontType('normal');
            var par17 = 'Perjanjian ini dibuat dalam Bahasa Indonesia.'
            var lines17 = doc.splitTextToSize(par17, (210-15-15));
            doc.text(15, 184, lines17)

            doc.setFontType('bold');
            doc.text('Pasal 13', 105, 190, 'center');
            doc.setFontType('normal');
            var par18 = 'Apabila dalam pelaksanaan Perjanjian ini timbul sengketa maka baik PIHAK PERTAMA maupun PIHAK KEDUA akan berusaha untuk menyelesaikan perselisihan yang timbul dengan musyawarah.\n\nApabila perselisihan tersebut tidak dapat diselesaikan secara musyawarah dan mufakat, PIHAK PERTAMA dan PIHAK KEDUA sepakat bahwa perselisihan tersebut akan diselesaikan menurut mekanisme penyelesaian perselisihan hubungan industrial menurut peraturan perundang-undangan yang berlaku\n\nDemikian Perjanjian Kerja ini dibuat dalam rangkap 3 (tiga) dengan ketentuan hukum yang sama dan masing-masing untuk Pekerja, Pengusaha dan Kantor Dinas Tenaga Kerja setempat untuk dicatat.\n\n\n\n\nDepok, '+this.today1+'\n\nPIHAK PERTAMA:                                                                                                    PIHAK KEDUA:\n\nPT Xacti Indonesia\n\n\n\n\n\n\n\n\n'+this.namaTtd.toUpperCase()
            var lines18 = doc.splitTextToSize(par18, (210-15-15));
            doc.text(15, 194, lines18)
            doc.text(this.name[this.$route.params.index].toUpperCase(),155, 277, 'center')
            doc.text('------------------------------------------------------',15,279)
            doc.text('------------------------------------------------------',130,279)
            doc.text(this.nomorSurat, 130, 282)
            doc.text('- 2 / 2 -', 105, 288, 'center');
            // doc.setFontType('bold');
            // doc.text('Pasal', 105, 96, 'center');
            // doc.setFontType('normal');
            // var par = ''
            // var lines = doc.splitTextToSize(par, (210-15-15));
            

            doc.save(this.req.noSurat+'-'+this.name[this.$route.params.index]+'.pdf');
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
        getUser() {
            axios.get('http://localhost:8081/detailKontrak/user/'+this.$route.params.id,{ headers:authHeader() }).then(res => {
                this.user = res.data
                console.log(this.user);
            }).catch((err) => {
                console.log(err);
            })
        },
        getSection() {
            axios.get('http://localhost:8081/detailKontrak/section/'+this.$route.params.id,{ headers:authHeader() }).then(res => {
                this.section = res.data
                console.log(this.section);
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