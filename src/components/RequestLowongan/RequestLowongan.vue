<template>
    <div class="RequestLowongan">
        <br>
        <h1>Tambah Employment Requisition Baru</h1>
        <br>
        <div class="box">
            <div class="judul-box">
                <div class="tulisan-box">Employment Requisition Form</div>
            </div>
            <br>
            <form>
                <div class="form-group">
                    <div class="label">Judul lowongan pekerjaan*</div>
                    <input class="form-control" id="judul" placeholder="masukkan judul lowongan pekerjaan" v-model="judul">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Departemen*</div>
                    <input class="form-control" id="departemen" placeholder="masukkan departemen" v-model="departemen">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Section*</div>
                    <input class="form-control" id="section" placeholder="masukkan section" v-model="section">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Supervisor*</div>
                    <input class="form-control" id="supervisor" placeholder="masukkan supervisor" v-model="supervisor">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Tanggal diinginkan*</div>
                    <input class="form-control" type="date" id="tanggal-diinginkan" placeholder="pilih tanggal" v-model="tanggal">
                </div>
                <br>
                <div class="radio">
                    <div class="label">Shift*</div>
                        <input type="radio" name="shift" v-model="shift" value="ya">Ya
                    <br>
                        <input type="radio" name="shift" v-model="shift" value="tidak">Tidak
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Periode kontrak*</div>
                    <input class="form-control" type="number" id="periode-kontrak" placeholder="masukkan periode kontrak" v-model="periode">
                    <small class="form-text text-muted">Periode kontrak dalam satuan bulan</small>
                </div>
                <br>
                <div class="radio">
                    <div class="label">Addition*</div>
                        <input type="radio" name="addition" v-model="addition" value="ya">Ya
                    <br>
                        <input type="radio" name="addition" v-model="addition" value="tidak">Tidak
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Jumlah*</div>
                    <input class="form-control" type="number" id="jumlah" placeholder="masukkan jumlah" v-model="jumlah">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Gaji*</div>
                    <input class="form-control" type="number" id="gaji" placeholder="masukkan gaji" v-model="gaji">
                    <small class="form-text text-muted">Gaji dalam rupiah (Rp)</small>
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Nama replacement</div>
                    <input class="form-control" id="nama-replacement" placeholder="Tuliskan nama dipisahkan dengan koma (contoh: budi, andi, didu)" v-model="replacement">
                </div>
                <br>
                <br>
                <br>
                <b-button v-b-modal.modal-1 class="btn btn-danger">Simpan</b-button>
                <br>
                <br>
                 <b-button v-b-modal.modal-1>Launch demo modal</b-button>

            <b-modal id="modal-1" title="BootstrapVue">
                <div class="detail">
                    <p class="title">Judul</p>
                    <p class="subtitle">{{ judul }}</p>
                    <hr>
                    <br>
                    <p class="title">Departemen</p>
                    <p class="subtitle">{{departemen}}</p>
                    <hr>
                    <p class="title">Section</p>
                    <p class="subtitle">{{section}}</p>
                    <hr>
                    <p class="title">Supervisor</p>
                    <p class="subtitle">{{supervisor}}</p>
                    <hr>
                    <p class="title">Tanggal</p>
                    <p class="subtitle">{{tanggal}}</p>
                    <hr>
                    <p class="title">Shift</p>
                    <p class="subtitle">{{shift}}</p>
                    <hr>
                    <p class="title">Periode</p>
                    <p class="subtitle">{{periode}}</p>
                    <hr>
                    <p class="title">Addition</p>
                    <p class="subtitle">{{addition}}</p>
                    <hr>
                    <p class="title">Jumlah</p>
                    <p class="subtitle">{{jumlah}}</p>
                    <hr>
                    <p class="title">Gaji</p>
                    <p class="subtitle">{{gaji}}</p>
                    <hr>
                    <p class="title">Replacement</p>
                    <p class="subtitle">{{replacement}}</p>
                    <hr>
                    <button type="submit" class="btn btn-danger">Simpan</button>
                </div>
            </b-modal>
            </form>
            <div>
            </div>
        </div>
        <br>
        <br>
    </div>
</template>

<script>
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
            replacement: ''
        }
    }
}

</script>

<style scoped>

hr{
    color: black;
    margin-top: 0px;
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
</style>