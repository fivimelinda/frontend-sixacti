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
                    <label for="input1">nilai</label>
                        <!-- <b-form-input
                        
                        v-model="form.nilai"
                        type="text"
                        placeholder=""
                        >
                        </b-form-input> -->
                        <div>
                            <b-form-select id="input1" class="bg-white input rounded" v-model="form.nilai">
                            <!-- This slot appears above the options from 'options' prop -->
                            <template v-slot:first>
                                <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                            </template>

                            <!-- These options will appear after the ones from 'options' prop -->
                            <b-form-select-option value="kurang baik">Kurang Baik</b-form-select-option>
                            <b-form-select-option value="cukup baik">Cukup Baik</b-form-select-option>
                            <b-form-select-option value="baik">Baik</b-form-select-option>
                            <b-form-select-option value="sangat baik">Sangat Baik</b-form-select-option>
                            </b-form-select>
                            <div v-if="$v.form.nilai.$error">
                                <div class="error-custom mt-1 ml-1" v-if="!$v.form.nilai.required">Field is required</div>
                            </div>
                            
                        </div>
                    </b-form-group>

                    <b-form-group
                    id="umpan_balik"
                    >
                        <label for="input2">Umpan Balik</label>
                        <b-form-textarea
                        id="input2"
                        v-model="form.feedback"
                        type="text"
                        placeholder=""
                        class="bg-white input rounded">
                        </b-form-textarea>
                        <div v-if="$v.form.feedback.$error">
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.feedback.required">Field is required</div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.feedback.alpha">Gunakan tanda baca . dan , serta huruf alphabeth</div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.feedback.minLength">
                                Panjang minimal character adalah 8, masukkan 'tidak ada' jika memang ingin dikosongkan.
                            </div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.feedback.maxLength">
                                Panjang maksimal character yang dapat dimasukkan adalah 255
                            </div>
                        </div>
                    </b-form-group>

                    <v-btn v-if="isUpdate" color="#C53751"><b-button class="button-primary" size="sm"
                    @click="submit()" :disabled="submitStatus === 'PENDING'" variant="light">Update</b-button></v-btn>
                    
                    <v-btn v-else-if="isCreate" color="#C53751"><b-button class="button-primary" size="sm" 
                    @click="submit()" :disabled="submitStatus === 'PENDING'" variant="light">Submit</b-button></v-btn>
                    
                    <v-btn class="ml-3" outlined color="#C53751"><b-button size="sm" @click="batal()" 
                    style="background-color:white !important; border:none;color:#C53751">Batal</b-button></v-btn>
                </b-form>
                <div class="mt-1">
                    <p class="typo__p" v-if="submitStatus === 'OK'" style="color:rgb(60, 233, 54)">Thanks for your submission!</p>
                    <p class="typo__p" v-if="submitStatus === 'ERROR'" style="color:red">* Please fill the form correctly.</p>
                    <p class="typo__p" v-if="submitStatus === 'PENDING'" style="color:rgb(246, 226, 47)">Submitting...</p>
                </div>
                
            </b-card-text>
        </b-card>
        </v-card>
        </div>
    </v-container>
</template>

<script>
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
import { helpers } from 'vuelidate/lib/validators'

const alpha = helpers.regex('alpha', /^[a-zA-Z0-9., ]*$/)

export default {
name:"form-tes-wawancara",
validations:{
    form:{
        nilai:{
            required,
        },
        feedback:{
            required,
            alpha,
            minLength:minLength(8),
            maxLength:maxLength(255),
        }
    }
},
props:{
        form:Object,
        isOpen:Boolean,
        isCreate:Boolean,
        isUpdate:Boolean
    },
components:{

},

data(){
    return{
        submitStatus:null,
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
                setTimeout(()=>{
                    this.$emit('submit')
                },800)
                
            }
        },
        batal(){
            this.$emit('batal')
        }
    }
}
</script>
<style lang="scss" scoped>
.error-custom{
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: red;
}
.typo__p{
    font-size:12px;
}
.border{
    border:none !important;
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