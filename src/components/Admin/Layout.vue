<template>
    <Navbar/>
</template>

<script>
import Navbar from '../Navbar'

export default {
    name:'layout',
    components:{
        Navbar
    },
    data(){
        return{
            isTop:false,
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>