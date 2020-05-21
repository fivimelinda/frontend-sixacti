<template>
    
    <div>
        <br>
        <p class="title-top">502 Error</p>
        <p class="title-top1">Internal Server Error</p>
        <button class="mt-5 mb-5 btn btn-link" v-on:click="home()">Kembali ke beranda</button>
    </div>

</template>

<script>
export default {
    name:"not-found-page",
    data (){
        return{

        }
    }
}
</script>

<style scoped>
.error{
    /* background-color : white; */
    height:100%;
}
.title-top{
    font-family: "oswald";
    color : #C53751;
    font-size: 50px;
    margin-left: 520px;
}
.title-top1{
    font-family: "oswald";
    font-size: 30px;
    margin-left: 500px;
}
</style>