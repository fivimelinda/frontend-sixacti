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
                    <input class="form-control" id="judul" placeholder="masukkan judul lowongan pekerjaan">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Departemen*</div>
                    <input class="form-control" id="departemen" placeholder="masukkan departemen">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Section*</div>
                    <input class="form-control" id="section" placeholder="masukkan section">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Supervisor*</div>
                    <input class="form-control" id="supervisor" placeholder="masukkan supervisor">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Tanggal diinginkan*</div>
                    <input class="form-control" type="date" id="tanggal-diinginkan" placeholder="pilih tanggal">
                </div>
                <br>
                <div class="radio">
                    <div class="label">Shift*</div>
                        <input type="radio" name="shift">Ya
                    <br>
                        <input type="radio" name="shift">Tidak
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Periode kontrak*</div>
                    <input class="form-control" type="number" id="periode-kontrak" placeholder="masukkan periode kontrak">
                    <small class="form-text text-muted">Periode kontrak dalam satuan bulan</small>
                </div>
                <br>
                <div class="radio">
                    <div class="label">Addition*</div>
                        <input type="radio" name="addition">Ya
                    <br>
                        <input type="radio" name="addition">Tidak
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Jumlah*</div>
                    <input class="form-control" type="number" id="jumlah" placeholder="masukkan jumlah">
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Gaji*</div>
                    <input class="form-control" type="number" id="gaji" placeholder="masukkan gaji">
                    <small class="form-text text-muted">Gaji dalam rupiah (Rp)</small>
                </div>
                <br>
                <div class="form-group">
                    <div class="label">Nama replacement</div>
                    <input class="form-control" id="nama-replacement" placeholder="Tuliskan nama dipisahkan dengan koma (contoh: budi, andi, didu)">
                </div>
                <br>
                <br>
                <br>
                <button type="submit" class="btn btn-danger">Simpan</button>
                <br>
                <br>
            </form>
        </div>
        <br>
        <br>
    </div>
</template>

<style scoped>
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