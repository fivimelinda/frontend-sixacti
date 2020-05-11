<template>
    <v-container>
        <div
        class="my-auto mt-3">
        <v-card
        max-width="576px"
        class="my-auto mx-auto">
        <b-card
        class="shadow-none border"
        header-tag="header"
        header-variant="header">
            <template v-slot:header>
                <h6 class="m-0 p-0 text-center">Hasil</h6>
            </template>
            <b-card-text
            >
                <b-form
                class="m-0"
                >
                    <b-form-group
                    id="nilai"
                    >
                    <label for="input1">Nilai</label>
                        <b-form-input
                        id="input1"
                        v-model="form.nilai"
                        type="number"
                        placeholder=""
                        class="bg-white input rounded">
                        </b-form-input>
                        <div v-if="$v.form.nilai.$error">
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.nilai.required">Field is required</div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.nilai.between">Nilai yag dapat dimasukkan adalah antara 0-100</div>
                        </div>

                    </b-form-group>
                    <!-- button update -->
                    <div v-if="isUpdate" class="d-flex justify-content-center">
                        <v-btn color="#C53751" class="p-0">
                            <b-button class="button-primary pl-3 pr-3" size="sm" @click="submit()" variant="light">Ubah</b-button></v-btn>
                        <v-btn class="ml-3 p-0" outlined color="#C53751">
                            <b-button
                            class="pl-3 pr-3"
                            size="sm" @click="batal()"
                            style="background-color:white !important; border:none;color:#C53751">Batal</b-button></v-btn>
                    </div>
                    <!-- button create -->
                    <div v-if="isCreate" class="d-flex justify-content-center">
                        <v-btn color="#C53751" class="pa-0">
                            <b-button 
                            class="button-primary pl-5 pr-5"
                            size="sm" 
                            @click="submit()" 
                            :disabled="submitStatus === 'PENDING'" 
                            variant="light">Submit</b-button></v-btn>
                        <v-btn class="ml-3 pa-0" outlined color="#C53751">
                            <b-button
                            class="pl-5 pr-5"
                            size="sm" @click="batal()"
                            style="background-color:white !important; border:none;color:#C53751">Batal</b-button></v-btn>
                    </div>
                </b-form>
                <div class="mt-1">
                    <p class="typo__p" v-if="submitStatus === 'OK'" style="color:rgb(60, 233, 54)">Thanks for your submission!</p>
                    <p class="typo__p" v-if="submitStatus === 'ERROR'" style="color:red">Please fill the form correctly.</p>
                    <p class="typo__p" v-if="submitStatus === 'PENDING'" style="color:rgb(246, 226, 47)">Submitting...</p>
                </div>
            </b-card-text>
        </b-card>
        </v-card>
        </div>
    </v-container>    
</template>
<script>
import {required, between} from 'vuelidate/lib/validators'

export default {
    name:"form-tes-tulis",
    props:{
        form:Object,
        isOpen:Boolean,
        isCreate:Boolean,
        isUpdate:Boolean
    },
    validations:{
        form:{
            nilai:{
                required,
                between:between(0,100)
            }
        }
    },
    data(){
        return{
            submitStatus:null
        }
    },
    methods:{
        submit(){
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                    this.submitStatus = 'OK'
                }, 500)
                setTimeout(() => {
                    this.$emit('submit')
                }, 800)
                
            }
        },
        batal(){
            this.$emit('batal')
        }
    }
}
</script>
<style lang="scss" scoped>
.border{
    border:none !important;
}
.error-custom{
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: red;
}
label{
    font-size: 14px;
    color: rgb(121, 121, 121);
    margin: none;
    padding: none;
}
.shadow-custom{
    box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.07),0px 1px 6px 1px rgba(0, 0, 0, 0.07);
}
.card-header{
        background-color: #C53751;
        color:white;
    }

.input{
    font-size: 14px;
    border: 1px solid rgb(236, 236, 236);
    background-color: rgba(248, 248, 248, 0.726) !important;
}

.input::placeholder{
    color: rgb(179, 179, 179);
}

.input:focus{
    border:1px solid #C53751;
    background-color: rgba(197, 55, 81, 0.02) !important;
}
.typo__p{
    font-size:12px;
}
.input-radio{
    font-size: 14px;
}

.button-primary{
    color: white !important;
    background-color: #C53751 !important;
    border:none !important;
}
</style>