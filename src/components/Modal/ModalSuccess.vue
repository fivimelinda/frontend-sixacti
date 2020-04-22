<!--<template>
    <sweet-modal icon="success" v-show="value">
	Berhasil!
    </sweet-modal>
</template>
<script>
import { SweetModal } from 'sweet-modal-vue'
export default {
    name: 'ModalSuccess',
    props: {
        value: {
            required: true
        }
    },
    components:{
        SweetModal
    }
}
</script>-->

<template>
<v-container>
    <sweet-modal v-if="success" @tampilkan="buka()" icon="success" ref="modal">alal</sweet-modal>
    <b-modal
        v-model="success"
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
           
            <button @click="buka()">coba</button>
        </div>

        <template v-slot:modal-footer>
            <!-- footer modal -->
            i'm footer!
        </template>
            
    </b-modal>
</v-container>    
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'

export default {
    props:{
        success:{
            type:Boolean,
        }
    },
    components:{
        SweetModal,
    },
    data(){
        return{
        }
    },
    methods:{
        buka(){
            console.log('sasasas');
            this.$refs.modal.open();
        }
    } 
}
</script>

<style lang="scss" scoped>

</style>