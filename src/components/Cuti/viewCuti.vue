<template>
    <v-container class="mt-sm-10">
        <div class="addCuti">
            <b-row id="title">
                <h1> Pengajuan Cuti</h1>
            </b-row>
            <b-row id="sub-title">
                <h4>Anda tidak memiliki pengajuan cuti</h4><!--IF CUTI ON PROCESS FALSE , SISA CUTI HABIS-->
            </b-row>
            <b-row id="btnCuti">
                <v-btn color="#C53751" class="white--text" router :to="{path: '/formCuti'}">
                    <v-icon left class="white--text">mdi-plus-circle</v-icon>
                    Buat Pengajuan Cuti
                </v-btn>
            </b-row>
        </div>
        <cardCuti/>
    </v-container>
</template>
<script>
import cardCuti from './cardCuti'
export default {
    components:{ cardCuti }
}
</script>
<style scoped>
#title{
    font-family: 'oswald';
    color: black;
    text-align: left;
    margin-bottom: 30px;
    margin-left: 5px;
}
#sub-title{
    font-family: 'oswald';
    color: black;
    text-align: left;
    margin-bottom: 30px;
    margin-left: 5px;
}
#btnCuti{
    margin-left: 5px;
}
</style>