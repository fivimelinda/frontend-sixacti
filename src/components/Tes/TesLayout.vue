<template>
    <div class="tes">
        <v-container>
            <div>
                <div class="text-md-left">
                    Tes Medis
                </div>
                <hr/>
                <tes-medis/>
            </div>
            <div>
                <div class="text-md-left">
                    Tes Tulis
                </div>
                <hr/>
                <tes-wawancara/>
            </div>
            <div>
                <div class="text-md-left">
                    Tes Wawancara
                </div>
                <hr/>
                <tes-tulis/>
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

<style scoped>

</style>