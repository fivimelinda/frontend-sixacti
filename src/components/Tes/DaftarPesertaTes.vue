<template>
    <v-container>
        <br>
        <ul class="nav p-0 m-0">
        <li><a class="brearcrumb-a" href="/">Home</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" href="/daftar-lowongan">Daftar Lowongan Pekerjaan</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" :href="'/detailLoker/'+idLowongan">Detail {{judul}}</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" :href="'/listPelamar/'+idLowongan">Daftar Pelamar</a></li>

        </ul>
        <b-card>
            <b-card-text>
                <div class="container justify-end">
                    <p>
                        <strong>Jumlah Pelamar yang Dibutuhkan :</strong>
                        {{maksimalPeserta}}
                    </p>
                </div>
                <b-table-simple hover @row-clicked="rowClickedHandle" caption-top responsive outlined>
                    <caption class="caption pl-5"><div class="" style="font-size:16px">Daftar Pelamar</div></caption>
                    <b-thead small class="header-table text-center">
                        <b-tr style="border:none">
                            <b-th>No</b-th>
                            <b-th>Nama</b-th>
                            <b-th>NIK</b-th>
                            <b-th>Alamat</b-th>
                            <b-th>Status</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody class="tbody text-center">
                        <b-tr v-for="(daftar,index) in et" 
                        :key="index" 
                        class="btr"
                        @click="rowClickedHandle(daftar)">
                            <b-td>{{index +1}}</b-td>
                            <b-td>{{daftar.pelamar.userPelamar.nama}}</b-td>
                            <b-td>{{daftar.nik}}</b-td>
                            <b-td>{{daftar.alamatDomisili}}</b-td>
                            <b-td>{{daftar.statusLamaran}}</b-td>
                            
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
                
                <b-pagination
                class="mr-3"
                v-model="currentPage"
                
                :per-page="perPage"
                aria-controls="my-table"
                align="right"
                ></b-pagination>

            </b-card-text>
        </b-card>
    </v-container>
</template>

<script>
import LowonganKerjaService from '../../service/LowonganKerjaService';
import authHeader from '../../service/AuthHeader'

export default {
    name:"daftarPesertaTes",
    data(){
        return{
            currentPage:1,
            perPage:10,
            et : [],
            maksimalPeserta : "",
            judul : ""           
        }

    },
    computed: {
        idLowongan() {
            return this.$route.params.idLowongan;
        },
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        refreshLamaranLoker() {
            LowonganKerjaService.getLokerById(this.idLowongan).then(res => {
                this.judul = res.data.judulLoker;
                this.et = res.data.listLamaran;
                this.maksimalPeserta = res.data.requestLowongan.jumlah;
            });

            console.log(this.et);
            console.log(this.judul);
        },
        rowClickedHandle(daftar){
            this.$router.push('/tes/'+daftar.id, { headers:authHeader() });
        }

    },
    created(){
        if (this.loggedIn) {
            if (this.currentUser.role[0] === "ROLE_DEPARTMENTMANAGER" ||
            this.currentUser.role[0] === "ROLE_SECTIONMANAGER" ||
            this.currentUser.role[0] === "ROLE_ASSISTANTMANAGER" ||
            this.currentUser.role[0] === "ROLE_ADMIN"){
                this.refreshLamaranLoker();
                console.log('A')
            } else{
                this.$router.push('/403')
            }
        } else{
            this.$router.push('/auth/login');
        }
        
    }
    
};
</script>

<style lang="scss" scoped>
.header-table{
    font-size: 14px;
    background-color: white;
    color: rgb(165, 163, 164);
}

.caption{
    background-color: #C53751;
    color: white;
    border:none !important;
}

.tbody{
    border: none;
    font-size: 14px;
}

.btr:hover{
    border-left: 2px solid #C53751;
}

</style>