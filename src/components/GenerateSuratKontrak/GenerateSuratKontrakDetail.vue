<template>
    <div class="GenerateSuratKontrakHome">
        Test
        <div id="print">
            Bismillah
            Alhamdulillah
            Allahuakbar
        </div>
        <button @click="generate">Generate</button>
    </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
    methods : {
        generate() {
            var doc = new jsPDF();
            doc.setFontSize(11);
            doc.setLineHeightFactor(1);
            doc.setFontStyle('Times New Roman');
            var paragraph="                                                                      SURAT KONTRAK KERJA\n\n                                                                                   00000000001\n\nYang bertanda tangan dibawah ini\n\n  Nama         : Widiawati Nuraini\n\n  Jabatan       : Staf Sumber Daya Manusia\n\nDalam hal ini bertindak untuk dan atas nama PT. Xacti Indonesia yang beralamat di Jl. Raya Bogor Km. 35, Sukamaju Baru, Tapos, Depok 16455, Jawa Barat, Indonesia yang akan disebut Pihak Pertama\n\n  Nama                            : Rahayu Tresnawati\n\n  Tempat/Tanggal Lahir : Kulon Progo, 13 Januari 1992\n\n  Alamat                         : Jl. Wates Km. 2 Sleman Yogyakarta\n\n  Jabatan                         : Karyawan Kontrak\n\nDalam hal ini bertindak atas nama sendiri, yang disebut sebagai Pihak Kedua.\n\nPada hari Jumat 21 Juli 2017, dengan memilih tempat di PT. Xacti Indonesia Manajemen Pihak Pertama dan Pihak Kedua sepakat untuk saling terikat dalam surat kontrak kerja karyawan dengan syarat dan ketentuan diatur sebagai berikut :\n\n                                                                   PASAL 1 KETENTUAN UMUM\n\n  1.  Pihak Kedua akan taat serta tunduk pada tata tertib kerja yang berlaku, perintah langsung maupun tidak dari Pihak Pertama ataupun wakil dari PT. Xacti Indonesia.\n\n  2.  Apabila Pihak Kedua melakukan pelanggaran kerja maka Pihak Pertama berhak memberikan sanksi sesuai dengan pelangaran yang dilakukan oleh Pihak Kedua.\n\n                                                                     PASAL 2 JANGKA WAKTU\n\n  1.  Kontrak kerja ini akan berlaku selama 3 (tiga) tahun terhitung dari penandatangan, yakni pada tanggal 21 Juli 2017 sampai dengan 2 Agustus 2020.\n\n  2.  Apabila kontrak kerja ini habis masa berlakunya, maka kedua kedua belah pihak bisa melakukan perpanjangan kontrak baru dengan kesepakatan bersama.\n\n                                                                     PASAL 3 WAKTU KERJA\n\nPihak kedua akan bekerja selama 6 jam perharinya dan 5 hari perminggunya belum termasuk waktu istirahat dengan rincian sebagi berikut :\n\n  Senin-Jumat        : 08.00-16.00 WIB\n\n  Istirahat      : 11.15-13.15 WIB\n\n                                                                             PASAL 4 UPAH\n\nPihak Kedua akan menerima gaji sebesar Rp. 3.000.000,00 (tiga juta rupiah) perbulannya.\n\n                                                          PASAL 5 PEMBERHENTIAN KERJA\n\nApabila Pihak Kedua melakukan tindak kriminal yang merugikan Pihak Pertama serta juga melakukan tindakan indisipiner kerja dan sudah mendapat surat peringatan sebanyak 3 (tiga) kali maka Pihak Pertama akan langsung memberhentikan Pihak Kedua dari pekerjaannya walaupun masa kontraknya masih\n\nDepok, 21 Juli 2017\n\n                                           Pihak pertama                                                          Pihak kedua\n\n\n\n\n\n                                        Widiawati Nuraini                                                   Rahayu Tresnawati";
            var lines =doc.splitTextToSize(paragraph, (210-15-15));
            doc.text(15,20,lines);
            doc.save('panjang.pdf');
        } 
    }
}
</script>