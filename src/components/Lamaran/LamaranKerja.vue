<template>
  <div class="FormCreateLoker">
    <br />
    <h1>Buat Lamaran Pekerjaan</h1>
    <br />
    <div class="card">
      <div class="card-header">Formulir Pembuatan Lamaran Pekerjaan</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <div class="mb-2 label">Nama Ibu*</div>
            <input class="form-control" id="namaIbu" placeholder="masukkan nama ibu" required>
          </div>

          <div class="form-group">
            <div class="mb-2 label">Alamat Domisili*</div>
            <input class="form-control" id="alamatDomisili" placeholder="masukkan alamat domisili" required>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <div class="mb-2 label">RT Domisili*</div>
                <input type="number" class="form-control" id="rtDomisili" placeholder="masukkan rt domisili"  />
              </div>
            </div>

            <div class="col-6">
              <div class="form-group">
                <div class="mb-2 label">RW Domisili*</div>
                <input type="number" class="form-control" id="rwDomisili" placeholder="masukkan rw domisili" />
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="mb-2 label">Kelurahan Domisili*</div>
            <input class="form-control" id="kelurahanDomisili" placeholder="masukkan kelurahan domisili" required>
          </div>

          <div class="form-group">
            <div class="mb-2 label">Kecamatan Domisili*</div>
            <input class="form-control" id="kecamatanDomisili" placeholder="masukkan kecamatan domisili" required>
          </div>

          <div class="form-group">
            <div class="mb-2 label">Kode Pos Domisili*</div>
            <input class="form-control" id="kodePos" type="number" placeholder="masukkan kode pos" required>
          </div>

          <div class="form-group">
              <div class="mb-2 label">Telepon*</div>
              <input class="form-control" id="telepon" placeholder="masukkan nomor telepon" required>
            </div>

            <div class="form-group">
               <div class="mb-2 label">Pendidikan*</div>
               <input class="form-control" id="pendidikan" placeholder="masukkan pendidikan" required>
             </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <div class="mb-2 label">Nomor Kartu BPJS Ketenagakerjaan</div>
                    <input type="number" class="form-control" id="noBpjsKetenagakerjaan" placeholder="masukkan nomor kartu BPJS ketenagakerjaan"  />
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-group">
                    <div class="mb-2 label">Nomor Kartu BPJS Kesehatan</div>
                    <input type="number" class="form-control" id="noBpjsKesehatan" placeholder="masukkan nomor kartu BPJS kesehatan" />
                  </div>
                </div>
              </div>



            <div class="form-group">
              <div class="mb-2 label">Nomor Kartu Indonesia Sehat</div>
              <input class="form-control" id="noKis" placeholder="masukkan nomor Kartu Indonesia Sehat">
            </div>

            <div class="form-group">
              <div class="mb-2 label">Nomor Pokok Wajib Pajak</div>
              <input class="form-control" id="npwp" placeholder="masukkan nomor pokok wajib pajak">
            </div>

              <div class="form-group">
                <div class="mb-2 label">Pengalaman</div>
                <b-textarea class="form-control" id="pengalamanKerja" placeholder="masukkan pengalaman kerja"/>
              </div>



          <button class=" mt-5 mb-5 btn btn-danger" v-on:click="nextLamaranClicked()">Next</button>
        </form>

      </div>

    </div>

    <br>
    <br>

  </div>
</template>


<script>
export default {
  methods:{
    nextLamaranClicked(){
      this.$router.push("/fileLamaran");
    }
  }
}
</script>
<style scoped>
.FormCreateLoker {
  background-color: #F6EDF0;
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