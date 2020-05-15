<template>
<div class = hasilTes>
    <div>
        <br>
        <p class="title-top">Hasil Tes</p>
    </div>

    <div class="box-up">
        <p class="box-text">Daftar Hasil Tes</p>
    </div>

    <table class="table table-hover">
        <thead class="table-borderless">
            <tr class="tr-top">
                <th scope="col">No.</th>
                <th scope="col">Nama Tes </th>
                <th scope="col">Hasil Tes</th>
            </tr>
        </thead>
        <tbody class="tbody">
            <tr class="content">
                <td> 1 </td>
                <td> Tes Tulis </td>
                <td>
                    <div v-if="tesTulis.status == true">
                        Lulus Tes Tulis
                    </div>
                    <div v-if="tesTulis.status == false">
                        Tidak Lulus Tes Tulis
                    </div>
                </td>
            </tr>
            <tr class="content">
                <td> 2 </td>
                <td> Tes Medis </td>
                <td>
                    <div v-if="tesMedis.status == true">
                        Lulus Tes Medis
                    </div>
                    <div v-if="tesMedis.status == false">
                        Tidak Lulus Tes Medis
                    </div>
                </td>
            </tr>
            <tr class="content">
                <td> 3 </td>
                <td> Tes Wawancara </td>
                <td>
                    <div v-if="tesWawancara.status == true">
                        Lulus Tes Wawancara
                    </div>
                    <div v-if="tesWawancara.status == false">
                        Tidak Lulus Tes Wawancara
                    </div>
                </td>
            </tr>
        </tbody>

    </table>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            tesMedis:'',
            tesWawancara:'',
            tesTulis:''
        }
    },
    mounted() {
        this.loadMedis(),
        this.loadWawancara(),
        this.loadTulis()
    },
    methods: {
        loadMedis() {
            axios.get('http://localhost:8081/api/tes/medis/pelamar/'+this.$route.params.idPelamar).then(res => {
                this.tesMedis = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        loadWawancara() {
            axios.get('http://localhost:8081/api/tes/wawancara/pelamar/'+this.$route.params.idPelamar).then(res => {
                this.tesWawancara = res.data
            }).catch((err) => {
                console.log(err);
            })
        },
        loadTulis() {
            axios.get('http://localhost:8081/api/tes/tulis/pelamar/'+this.$route.params.idPelamar).then(res => {
                this.tesTulis = res.data
            }).catch((err) => {
                console.log(err);
            })
        },

    }
    
}
</script>

<style scoped>
.title-top{
    font-family: "oswald";
    font-size: 30px;
    margin-left: 20px;
}

.hasilTes{
    background-color: #F6EDF0;
    height:100%;
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

.table-borderless{
    font-family: "archivo";
}

.table {
    margin-left: 20px;
    margin-right: 20px;
    width: 97% !important;
}

.table-hover tbody tr:hover td, .table-hover tbody tr:hover th{
    background-color: #FFDDE3;
}

thead{
    color: #8F8F8F;
}

.content{
    background-color: white;
    border: 0.5 px solid black;
}

</style>

