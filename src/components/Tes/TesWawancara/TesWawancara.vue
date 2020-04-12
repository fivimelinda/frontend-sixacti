<template>
    <v-container>
        <!-- modal information -->
        <sweet-modal icon="success" ref="modal">{{message}}</sweet-modal>
        <sweet-modal icon="success" ref="failed">{{message}}</sweet-modal>

        <!-- form tes -->
        <form-tes-wawancara v-if="isCreate && !isSubmit"
        v-bind:isCreate="isCreate"
        v-bind:form="form" @submit="subsub()" @batal="cancle()"></form-tes-wawancara>

        <div class="d-flex justify-center">
            <v-btn color="#C53751"><v-icon color="white">{{icons.plus}}</v-icon><b-button class="button-primary" @click="create()" size="sm">Tambah Tes Wawancara</b-button></v-btn>
        </div>
        
    </v-container>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import FormTesWawancara from './FormTesWawancara.vue'
export default {
    name:"tes-wawancara",
    components:{
        SweetModal,
        FormTesWawancara
    },
    data (){
        return{
            form:{
                nilai:"",
                umpan_balik:"",
            },
            icons:{
                plus:'mdi-plus',
            },
            isOpen : false,
            isCreate : false,
            isUpdate : false,
            isSubmit:false,
            message:"",
        }
    },
    methods:{
        create(){
            this.isOpen = true;
            this.isCreate = true;
        },
        cancle(){
            this.isOpen = false;
            this.isCreate = false;
        },
    }
}
</script>

<style scoped>
.border{
    border:none !important;
}
.button-primary{
    color:white !important;
    background-color: #C53751 !important;
    border:none;
}
</style>