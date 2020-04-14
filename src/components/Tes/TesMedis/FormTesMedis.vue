<template>
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
                    id="berat_badan"
                    class="form-group"
                    :class="{ 'form-group--error': $v.form.berat_badan.$error }"
                    >
                    <label for="input1">Berat Badan (kg)</label>
                        <b-form-input
                        id="input1"
                        v-model.trim="form.berat_badan"
                        type="number"
                        placeholder=""
                        class="bg-white input rounded">
                        </b-form-input>
                        <div v-if="$v.form.berat_badan.$error">
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.berat_badan.required">Field is required</div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.berat_badan.between">Berat badan harus lebih dari 0</div>
                        </div>
                    </b-form-group>
                    

                    <b-form-group
                    id="tingi_badan"
                    >
                        <label for="input2">Tinggi Badan (cm)</label>
                        <b-form-input
                        id="input2"
                        v-model="form.tinggi_badan"
                        type="number"
                        placeholder=""
                        class="bg-white input rounded">
                        </b-form-input>
                        <div v-if="$v.form.tinggi_badan.$error">
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.tinggi_badan.required">Field is required</div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.tinggi_badan.between">tinggi badan harus lebih dari 0 cm</div>
                        </div>
                    </b-form-group>

                    <b-form-group
                    inline
                    id="tekanan_darah"
                    >
                    <b-row>
                        <b-col>
                            <label for="input3">Tekanan Darah (batas bawah)</label>
                        <b-form-input
                        id="input3"
                        v-model="form.td_batas_bawah"
                        type="number"
                        placeholder=""
                        class="bg-white input rounded">
                        </b-form-input>
                        <div v-if="$v.form.td_batas_bawah.$error">
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.td_batas_bawah.required">Field is required</div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.td_batas_bawah.between">Batas bawah tekanan darah harus lebih dari 50 mmHg</div>
                        </div>
                        </b-col>

                        <b-col>    
                        <label for="input7">Tekanan Darah (batas atas)</label>
                        <b-form-input
                        id="input7"
                        v-model="form.td_batas_atas"
                        type="number"
                        placeholder=""
                        class="bg-white input rounded">
                        </b-form-input>
                        <div v-if="$v.form.td_batas_atas.$error">
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.td_batas_atas.required">Field is required</div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.td_batas_atas.between">Batas atas tekanan darah harus lebih dari 70 mmHg</div>
                        </div>
                        </b-col>
                    </b-row>
                        
                    </b-form-group>
                    
                    <b-form-group>
                        <label for="input4">Buta Warna</label>
                        <b-form-radio-group id="input4" v-model="form.buta_warna">
                            <b-form-radio name="radios" value="tidak" class="input-radio">Tidak</b-form-radio>
                            <b-form-radio name="radios" value="partial" class="input-radio">Partial</b-form-radio>
                            <b-form-radio name="radios" value="total" class="input-radio">Total</b-form-radio>
                        </b-form-radio-group>
                        <div v-if="$v.form.buta_warna.$error">
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.buta_warna.required">Field is required</div>
                        </div>
                    </b-form-group>

                    <b-form-group
                    id="riwayat_penyakit"
                    >
                        <label for="input5">Riwayat Penyakit</label>
                        <b-form-area
                        id="input5"
                        v-model="form.riwayat_penyakit"
                        type="text"
                        placeholder=""
                        class="bg-white input rounded">
                        </b-form-area>
                        <div v-if="$v.form.riwayat_penyakit.$error">
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.riwayat_penyakit.required">Field is required</div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.riwayat_penyakit.alpha">Gunakan tanda baca . dan , serta huruf alphabeth</div>
                            <div class="error-custom mt-1 ml-1" v-if="!$v.form.riwayat_penyakit.minLength">Panjang minimal character adalah 8, masukkan 'tidak ada' jika memang ingin dikosongkan.</div>
                        </div>
                    </b-form-group>

                    <v-btn v-if="isUpdate" color="#C53751"><b-button class="button-primary" size="sm" 
                    @click="submit()" variant="light">Ubah</b-button></v-btn>
                    
                    <v-btn v-else-if="isCreate" color="#C53751">
                        <b-button class="button-primary" size="sm" 
                        @click="submit()" variant="light" :disabled="submitStatus === 'PENDING'">Submit</b-button></v-btn>

                    <v-btn class="ml-3" outlined color="#C53751"><b-button size="sm" @click="batal()" 
                    style="background-color:white !important; border:none;color:#C53751">Batal</b-button></v-btn>

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
</template>

<script>
import {required, minLength, between} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import { helpers } from 'vuelidate/lib/validators'

const alpha = helpers.regex('alpha', /^[a-zA-Z.,]*$/)

export default {
    name:'form-tes-medis',
    mixins: [validationMixin],
    props:{
        form:Object,
        isOpen:Boolean,
        isCreate:Boolean,
        isUpdate:Boolean
    },
    validations:{
        form:{berat_badan:{
            required,
            between:between(1,300)
            },
            tinggi_badan:{
                required,
                between:between(1,300)
            },
            td_batas_bawah:{
                required,
                between:between(50,150)
            },
            td_batas_atas:{
                required,
                between:between(70,250)
            },
            buta_warna:{
                required,
            },
            riwayat_penyakit:{
                required,
                alpha,
                minLength:minLength(8)
            }
        }
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
                setTimeout(() => {
                    this.$emit('submit')
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
.error-custom{
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: red;
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
    background-color: rgba(248, 248, 248, 0.726) ;
}

.input::placeholder{
    color: rgb(179, 179, 179);
}

.input:focus{
    border:1px solid rgb(197, 55, 81);
    background-color: rgba(197, 55, 81, 0.02) ;
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