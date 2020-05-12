<template>
<v-container>
    <b-modal
        v-model="failed"
        id="modal-center"
        centered
        title="BootstrapVue"
        >
        <template
        v-slot:modal-header>
            <!-- header modal -->
            Success!
        </template>

        <div>
            <!-- content -->
            masukkan
        </div>

        <template v-slot:modal-footer>
            <!-- footer modal -->
            i'm footer!
        </template>
            
    </b-modal>
</v-container>    
</template>

<script>
export default {
    props:{
        failed:{
            type:Boolean,
        }
    },
    data(){
        return{
        }
    }    
}
</script>

<style lang="scss" scoped>

</style>