<template>
<div>
    <v-card
        max-width="344"
        color="#FFE3E3">
        <v-card-title  dense class="white--text" id="title">Cuti yang diajukan</v-card-title>
        <v-card-text class="black--text font-weight-bold" id="sub-title">Detail Cuti</v-card-text>
        <v-divider light id="line"></v-divider>
        <v-item-group id="item">
        <v-card-text >ID Pengajuan Cuti</v-card-text>
        <v-card-text >Mulai</v-card-text>
        <v-card-text >Sampai</v-card-text>
        </v-item-group>
    </v-card>
</div>
</template>
<style scoped>
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

</style>