<template>
    <div>
        <Navbar/>
        <router-view></router-view>
    </div>
</template>
<script>
import Navbar from './Navbar'

export default {
    name:'main-layout',
    components:{
        Navbar,
    },
    data(){
        return{

        }
    }
}
</script>