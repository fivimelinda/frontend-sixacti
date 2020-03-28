<template>
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
</script>