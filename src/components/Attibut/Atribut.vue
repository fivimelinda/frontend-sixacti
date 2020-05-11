<template>
    <v-container>
        <v-card
        class="my-auto mx-auto mt-5"
        >
            <b-card>
                <div class="h5">Data Atribut</div>
                <hr style="border-top: 3px solid #C53751;"/>

                <div class="p-3">
                    <v-card
                    max-width="576"
                    class="mx-auto my-auto"
                    style="box-shadow:none">
                        <b-card 
                        class="mx-auto my-auto"
                        header-tag="header"
                        header-variant="header"
                        style="">
                            <template v-slot:header>
                                <h6 class="m-0 p-0 text-center">Atribut</h6>
                            </template>
                            <b-card-text>
                                <div>
                                    <b-row class="m-0 p-0">
                                        <b-col>Ukuran Sepatu</b-col>
                                        <b-col>:    s</b-col>
                                    </b-row>
                                    <b-row class="m-0 p-0">
                                        <b-col>Ukuran Baju Seragam</b-col>
                                        <b-col>:    a</b-col>
                                    </b-row>
                                    <b-row class="m-0 p-0">
                                        <b-col>Ukuran Jas Lab</b-col>
                                        <b-col>:    a</b-col>
                                    </b-row>
                                    <b-row class="m-0 p-0">
                                        <b-col>Ukuran Helm</b-col>
                                        <b-col>:    a</b-col>
                                    </b-row>
                                    <div class="d-flex justify-content-center">
                                        <v-btn class="p-0" color="#C53751"><b-button class="button-primary pl-5 pr-5" size="sm" 
                                        variant="light" v-b-modal.atribut @click="openModelUpdateAtribut()">Ubah</b-button></v-btn>
                                        <!-- pop up ubah -->
                                        <div>
                                            <b-modal
                                            header-variant="header"
                                            scrollable
                                            hide-footer
                                            v-model="success"
                                            id="atribut"
                                            title="BootstrapVue"
                                            ref="atribut"
                                            >
                                            
                                            <template v-slot:modal-header="{ close }">
                                            <!-- Emulate built in modal header close button action -->
                                            
                                            <h5>Ubah Atribut</h5>
                                            <b-button class="" size="sm" variant="outline-danger" @click="close()">
                                                <div class="mr-1 ml-1">X</div>
                                            </b-button>
                                            </template>
                
                                            <form-atribut
                                            v-bind:form="form"
                                            >
                                            </form-atribut>
                                            </b-modal>
                                        </div>
                                    </div>
                                </div>
                                <!-- main form -->
                                <div>
                                    <form-atribut
                                v-bind:form="form"></form-atribut>
                                </div>
                            </b-card-text>
                        </b-card>
                    </v-card>
                </div>
            </b-card>
        </v-card>
    </v-container>
</template>

<script>
import FormAtribut from './FormAtribut.vue'

export default {
    name:'atribut',
    validations:{

    },
    components:{
        FormAtribut,
    },
    data(){
        return{
            form:{
                ukuran_sepatu:'',
                ukuran_baju:'',
                ukuran_jas_lab:'',
                ukuran_helm:''
            }
        }
    },
    methods:{

    }    
}
</script>

<style lang="scss" scoped>
    .card-header{
        background-color: #C53751;
        color:white;
    }
    .modal-header{
        background-color: #C53751;
        color:white;
    }
</style>