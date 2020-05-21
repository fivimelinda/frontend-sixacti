<template>
  <div class="FormCreateLoker">

    <div v-if="this.usersData.user == null">
      <br>
      <br>
      <div class="title-top">
        <h5>Untuk membuat lamaran, silakan lengkapi profil</h5>
        <button class=" btn btn-light border-danger w-10" v-on:click="profil()">Lengkapi Profil</button>
      </div>

    </div>
      <!-- <div this.openModal()>
      </div>
    </div> -->


    <div v-if="this.usersData.user != null">
      {{checkLamar()}}
      <div v-if="this.hasilData == this.nik">
          <div class="title-top">
            <br>
            
            <h5>Lamaran telah dibuat</h5>
        
        </div>
      </div>
      <div v-if="this.hasilData == 'gagal'">
      <br />
      <h1>Buat Lamaran Pekerjaan</h1>
      <br />
          <div class="card">

        <div class="card-header">Formulir Pembuatan Lamaran Pekerjaan</div>
        <div class="card-body">
          <form @submit.prevent="validateAndSubmit">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <div class="mb-2 label">Nomor Induk Kependudukan*</div>
                  <input type="number" class="form-control" id="nik" v-model="nik" placeholder="masukkan nomor induk kependudukan" disabled required>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <div class="mb-2 label">Pendidikan Terakhir*</div>
                  <input class="form-control" id="pendidikan" v-model="pendidikan" placeholder="masukkan pendidikan" required>
                  <!-- <small class="form-text text-muted">Masukkan pendidikan terakhir</small> -->
                </div>
              </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="mb-2 label">Nama Ibu*</div>
                    <input class="form-control" id="namaIbu" v-model="namaIbu" placeholder="masukkan nama" required>
                  </div>
                </div>
              <div class="col-md-6">
                <div class="form-group">
                  <div class="mb-2 label">Alamat Domisili*</div>
                  <input class="form-control" id="alamatDomisili" v-model="alamatDomisili" placeholder="masukkan alamat domisili" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <div class="mb-2 label">RT Domisili*</div>
                  <input type="number" class="form-control" id="rtDomisili" v-model="rtDomisili" placeholder="masukkan rt domisili"  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <div class="mb-2 label">RW Domisili*</div>
                  <input type="number" class="form-control" id="rwDomisili" v-model="rwDomisili" placeholder="masukkan rw domisili" />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <div class="mb-2 label">Kelurahan Domisili*</div>
                  <input class="form-control" id="kelurahanDomisili" v-model="kelurahanDomisili" placeholder="masukkan kelurahan domisili (contoh : Beiji)" required>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <div class="mb-2 label">Kecamatan Domisili*</div>
                  <input class="form-control" id="kecamatanDomisili" v-model="kecamatanDomisili" placeholder="masukkan kecamatan domisili (contoh : Beiji)" required>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <div class="mb-2 label">Kode Pos Domisili*</div>
                  <input class="form-control" id="kodePosDomisili" v-model="kodePosDomisili" type="number" placeholder="masukkan kode pos" required>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                    <div class="mb-2 label">Telepon*</div>
                    <input type="number" class="form-control" id="telepon" v-model="telepon" placeholder="masukkan nomor telepon" required>
                </div>
              </div>
            </div>



                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="mb-2 label">Nomor Kartu BPJS Ketenagakerjaan</div>
                      <input type="number" class="form-control" id="noBpjsKetenagakerjaan" v-model="noBpjsKetenagakerjaan" placeholder="masukkan nomor kartu BPJS ketenagakerjaan"  />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="mb-2 label">Nomor Kartu BPJS Kesehatan</div>
                      <input type="number" class="form-control" id="noBpjsKesehatan" v-model="noBpjsKesehatan" placeholder="masukkan nomor kartu BPJS kesehatan" />
                    </div>
                  </div>
                </div>


              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="mb-2 label">Nomor Kartu Indonesia Sehat</div>
                    <input type="number" class="form-control" id="noKis" v-model="noKis" placeholder="masukkan nomor Kartu Indonesia Sehat">
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <div class="mb-2 label">Nomor Pokok Wajib Pajak</div>
                    <input type="number" class="form-control" id="npwp" v-model="npwp" placeholder="masukkan nomor pokok wajib pajak">
                  </div>
                </div>
              </div>

              <div class="form-group">
              <div class="mb-2 label">Pengalaman Kerja</div>
            
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="mb-2 label">Tahun Kerja</div>
                    <input type="number" class="form-control" id="tahunKerja" v-model="tahunKerja" placeholder="masukkan tahun kerja"  />
                    <small class="form-text text-muted">Pengalaman kerja terakhir</small>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <div class="mb-2 label">Nama Pekerjaan</div>
                    <input type="text" class="form-control" id="namaPekerjaan" v-model="namaPekerjaan" placeholder="masukkan nama pekerjaan" />
                  </div>
                </div>
                
              </div>
            </div>

            <button class=" btn btn-light border-danger w-10" v-on:click="beforeClicked()">Kembali</button>
            <button type="submit" class=" mt-5 mb-5 btn btn-danger">Simpan</button>
            <!-- <button class="btn btn-light border-danger w-10" v-on:click="nextLamaranClicked(idLamaran)">Selanjutnya</button> -->

          </form>

        </div>

      </div>

      
      </div>
    </div>

    <br>
    <br>

  </div>
</template>


<script>
import LamaranService from '../../service/LamaranService'
import authHeader from '../../service/AuthHeader'

export default {
  name : "LamaranKerja",
  data(){
    return{
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
      npwp : "",
      noBpjsKetenagakerjaan : "",
      noBpjsKesehatan : "",
      noKis : "",
      pengalamanKerja : "",
      tahunKerja : "",
      namaPekerjaan : "",
      lolos :"",
      usersData: '',
      hasilData:''
      
    }
  },
  computed: {
    idLowongan(){
      return this.$route.params.idLowongan;
    },
    loggedIn(){
        return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
        return this.$store.state.auth.user;
    }
  },
  mounted(){
    this.checkProfil();
  },
  created(){
    if (!this.loggedIn) {
        this.$router.push('/auth/login');
    }
},
  methods:{
    beforeClicked(){
      this.$router.push("/detailLoker/"+this.idLowongan);
    },
    profil(){
      this.$router.push("/profil");
    },
    nextLamaranClicked(){
      this.$router.push("/fileLamaran");
    },

     validateAndSubmit(e) {
        e.preventDefault();
        this.errors = [];
        if(this.errors.length === 0) {
          LamaranService.addLamaran(this.idLowongan, this.nik,{
            nik : this.nik,
            namaIbu : this.namaIbu,
            idPelamar : this.idPelamar,
            alamatDomisili : this.alamatDomisili,
            rtDomisili : this.rtDomisili,
            rwDomisili : this.rwDomisili,
            kelurahanDomisili : this.kelurahanDomisili,
            kecamatanDomisili : this.kecamatanDomisili,
            kodePosDomisili : this.kodePosDomisili,
            telepon : this.telepon,
            pendidikan : this.pendidikan,
            npwp : this.npwp,
            noBpjsKetenagakerjaan : this.noBpjsKetenagakerjaan,
            noBpjsKesehatan : this.noBpjsKesehatan,
            noKis : this.noKis,
            pengalamanKerja : this.pengalamanKerja,
            tahunKerja : this.tahunKerja,
            namaPekerjaan : this.namaPekerjaan,
            lolos : (this.lolos = false)
          })
          .then((response)=> {
            console.log(response)
            this.$router.push("/fileLamaran/"+ response.data);
          });
        }
     },
        checkProfil(){
          this.axios.get('https://sixacti-api.herokuapp.com/profil/users/'+this.$store.state.auth.user.id,{ headers:authHeader() }).then(res =>{
              this.usersData = res.data;
              this.nik = res.data.user.nik;
                })
            // )
        },
          checkLamar(){
          this.axios.get('https://sixacti-api.herokuapp.com/api/cekPelamar/'+this.$store.state.auth.user.user.nik,{ headers:authHeader() }).then(res =>{
              this.hasilData = res.data;
              console.log(this.hasilData)
                })
            // )
        },
  }
}
</script>
<style scoped>
.FormCreateLoker {
  background-color: #F6EDF0;
}

.title-top{
    font-family: "oswald";
    font-size: 50px;
    margin-left: 500px;
}

h1{
  font-family: 'oswald';
  text-align: left;
  margin-left: 10%;
}

.card {
  margin-left: 10%;
  margin-right: 10%;
  background-color: white;
}

.card-header {
  background-color: #C53751;
  font-family: 'oswald';
  text-align: left;
  font-style: medium;
  font-size: 20px;
  color: white;
}

form{
    margin-left: 10%;
    margin-right: 10%;

}

.label{
    text-align: left;
    font-family: 'archivo';
    color: black;
    margin-bottom: 2px;
}


</style>