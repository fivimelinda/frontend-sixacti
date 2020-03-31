<template>
<div class="all">
    <div>
        <br>
        <p class="title-top">Request Lowongan Pekerjaan</p>
    </div>
    <!-- <div>
        <ul v-for ="req in requestLowongan" :key="req.id">
            <li>
                <span>
                    {{req.jobTitle}}
                </span>
            </li>
        </ul>
    </div> -->
    <router-link to="/RequestLowongan/add">
        <button class="tambah"> &#43; Tambah Request Lowongan Baru</button>
    </router-link>
    <br>
    <br>
    <br>
    <div class="box-up">
        <p class="box-text">Riwayat Request Lowongan Pekerjaan</p>
    </div>
    <table class="table">
        <thead class="table-borderless">
            <tr class="tr-top">
                <th scope="col">No.</th>
                <th scope="col">Judul</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Tanggal diiginkan</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody class="tbody">
            <tr v-for="req in requestLowongan" :key="req.id" class="content">
                <th scope=row>{{req.id}}</th>
                <td>{{req.jobTitle}}</td>
                <td>{{req.jumlah}}</td>
                <td>{{req.dateWanted}}</td>
                <td>{{req.status}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            requestLowongan: []
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            axios.get('http://localhost:8081/request/all').then(res => {
                this.requestLowongan = res.data
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style>
.tambah{
    float: right;
    margin-right: 33px;
    background-color: #C53751;
    color: white;
    padding: 10px;
}

.tbody{
    box-shadow: 1px 1px 1px #999;
}

.table-borderless{
    font-family: "archivo";
}

.title-top{
    font-family: "oswald";
    font-size: 30px;
    margin-left: 20px;
}

.all{
    background-color: #F6EDF0;
    height:100%;
}

.content{
    background-color: white;
    border: 0.5 px solid black;
}

.table {
    margin-left: 20px;
    margin-right: 20px;
    width: 97% !important;
}

thead{
    color: #8F8F8F;
}

.box-up{
    background-color: #C53751;
    margin-left: 20px;
    /* margin-right: 34px; */
    width: 97% !important;
}

.box-text{
    color: white;
    margin-left: 15px;
    padding: 10px;
}

</style>