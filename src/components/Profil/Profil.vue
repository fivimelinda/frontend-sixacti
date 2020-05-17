<template>
    <div class="all">
        <div class="red-top">
            <br>
            <br>
            <br>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-1">

                    </div>
                    <div class="col-11">
                        <div class="name">{{this.$store.state.auth.user.username}}</div>
                        <div class="role"></div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
</template>

<style>
.name{
    font-family: "oswald";
    color: white;
    font-size: 25px;
}
.red-top{
    background-color: #C53751;
}
</style>

<script>

export default{
    mounted(){
        this.getProfil();
    },
    methods: {
        getProfil(){
            console.log(this.$store.state.auth.user);
        }
    }
}
</script>