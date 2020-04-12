<template>
    <div class="tes">
        <v-container>
            <div>
                <div class="text-md-left" style="color:#C53751">
                    Tes Medis
                </div>
                <hr style="color:#C53751"/>
                <tes-medis/>
            </div>
            <div>
                <div class="text-md-left">
                    Tes Tulis
                </div>
                <hr/>
                <tes-tulis/>
            </div>
            <div>
                <div class="text-md-left">
                    Tes Wawancara
                </div>
                <hr/>
                <tes-wawancara/>
            </div>
        </v-container>
    </div>
</template>

<script>
import TesMedis from './TesMedis/TesMedis.vue'
import TesTulis from './TesTulis/TesTulis.vue'
import TesWawancara from './TesWawancara/TesWawancara.vue'

export default {
    name:"tes-layout",
    components : {
        TesTulis,
        TesMedis,
        TesWawancara
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">
.button{
    border:none !important;
    color:white;
    background-color: black !important;
}
</style>