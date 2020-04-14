<template>
    <v-container>
        <div
        class="my-auto mt-3">
        <v-card
        max-width="576px"
        class="my-auto mx-auto">
        <b-card
        class="shadow-none border">
            <b-card-text
            >
                <b-form
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

                    <v-btn v-if="isUpdate" color="#C53751"><b-button class="button-primary" size="sm" @click="submit()" variant="light">Ubah</b-button></v-btn>
                    <v-btn v-else-if="isCreate" color="#C53751"><b-button class="button-primary" size="sm" @click="submit()" :disabled="submitStatus === 'PENDING'" variant="light">Submit</b-button></v-btn>
                    <v-btn class="ml-3" outlined color="#C53751"><b-button size="sm" @click="$bvModal.hide('tes-tulis')"
                    style="background-color:white !important; border:none;color:#C53751">Batal</b-button></v-btn>
                </b-form>
                <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
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
                    this.$emit('submit')
                    this.submitStatus = 'OK'
                }, 500)
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

.input-radio{
    font-size: 14px;
}

.button-primary{
    color: white !important;
    background-color: #C53751 !important;
    border:none !important;
}
</style>