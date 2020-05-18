<template>
    <v-container class="text">
        <b-form
        style="margin:0">
        <b-form-group>
            <label for="sepatu" class="h6">Ukuran Sepatu</label>
            <b-form-select id="sepatu" size="sm" class="bg-white input rounded" v-model="form.ukuran_sepatu">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="36/37">36/37</b-form-select-option>
                <b-form-select-option value="37/38">37/38</b-form-select-option>
                <b-form-select-option value="38/39">38/39</b-form-select-option>
                <b-form-select-option value="39/40">39/40</b-form-select-option>
                <b-form-select-option value="40/41">40/41</b-form-select-option>
                <b-form-select-option value="41/42">41/42</b-form-select-option>
                <b-form-select-option value="42/43">42/43</b-form-select-option>
                <b-form-select-option value="43/44">43/44</b-form-select-option>
                <b-form-select-option value="44/45">44/45</b-form-select-option>
                <b-form-select-option value="45/46">45/46</b-form-select-option>
            </b-form-select>
            <div v-if="$v.form.ukuran_sepatu.$error">
                <div class="error-custom mt-1 ml-1" v-if="!$v.form.ukuran_sepatu.required">Field is required</div>
            </div>
        </b-form-group>
        
            
        <b-form-group>
            <label for="baju" class="h6">Ukuran Baju Seragam <strong v-b-modal.modal-baju><b-icon-box-arrow-up-right></b-icon-box-arrow-up-right></strong></label>
            <b-modal id="modal-baju" hide-footer centered title="Daftar Ukuran">
                <b-card>
                    <b-card-text class="m-0">
                        <div><strong>SM</strong> : Lebar 42, Tinggi 66, Panjang Lengan 62, Lebar lengan 14</div>
                        <div><strong>S</strong> : Lebar 46, Tinggi 66, Panjang Lengan 62, Lebar lengan 15</div>
                        <div><strong>M</strong> : Lebar 50, Tinggi 67, Panjang Lengan 62, Lebar lengan 16</div>
                        <div><strong>L</strong> : Lebar 52, Tinggi 67, Panjang Lengan 62, Lebar lengan 17</div>
                        <div><strong>XL</strong> : Lebar 54, Tinggi 67, Panjang Lengan 62, Lebar lengan 17.5</div>
                        <div><strong>XXL</strong> : Lebar 60, Tinggi 67, Panjang Lengan 62, Lebar lengan 18</div>
                        <div><strong>XXXL</strong> : Lebar 66, Tinggi 67, Panjang Lengan 62, Lebar lengan 19.5</div>
                    </b-card-text>
                </b-card>
            </b-modal>
            <b-form-select id="baju" size="sm" class="bg-white input rounded" v-model="form.ukuran_baju">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="Extra Small (XS)">Extra Small (XS)</b-form-select-option>
                <b-form-select-option value="Small (S)">Small (S)</b-form-select-option>
                <b-form-select-option value="Medium (M)">Medium (M)</b-form-select-option>
                <b-form-select-option value="Large (L)">Large (L)</b-form-select-option>
                <b-form-select-option value="Extra Large (XL)">Extra Large (XL)</b-form-select-option>
                <b-form-select-option value="Double X-L(XXL)">Double X-L(XXL)</b-form-select-option>
                <b-form-select-option value="Triple X-L (XXXL)">Triple X-L (XXXL)</b-form-select-option>
            </b-form-select>
            <div v-if="$v.form.ukuran_baju.$error">
                <div class="error-custom mt-1 ml-1" v-if="!$v.form.ukuran_baju.required">Field is required</div>
            </div>
        </b-form-group>
            
        <b-form-group>
            <label for="jasLab" class="h6">Ukuran Jas Lab <strong v-b-modal.modal-jas><b-icon-box-arrow-up-right></b-icon-box-arrow-up-right></strong></label>
            <b-modal id="modal-jas" hide-footer centered title="Daftar Ukuran">
                <b-card>
                    <b-card-text class="m-0">
                        <div><strong>SM</strong> : Lebar 42, Tinggi 66, Panjang Lengan 62, Lebar lengan 14</div>
                        <div><strong>S</strong> : Lebar 46, Tinggi 66, Panjang Lengan 62, Lebar lengan 15</div>
                        <div><strong>M</strong> : Lebar 50, Tinggi 67, Panjang Lengan 62, Lebar lengan 16</div>
                        <div><strong>L</strong> : Lebar 52, Tinggi 67, Panjang Lengan 62, Lebar lengan 17</div>
                        <div><strong>XL</strong> : Lebar 54, Tinggi 67, Panjang Lengan 62, Lebar lengan 17.5</div>
                        <div><strong>XXL</strong> : Lebar 60, Tinggi 67, Panjang Lengan 62, Lebar lengan 18</div>
                        <div><strong>XXXL</strong> : Lebar 66, Tinggi 67, Panjang Lengan 62, Lebar lengan 19.5</div>
                    </b-card-text>
                </b-card>
            </b-modal>
            <b-form-select id="jasLab" size="sm" class="bg-white input rounded" v-model="form.ukuran_jas_lab">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="Extra Small (XS)">Extra Small (XS)</b-form-select-option>
                <b-form-select-option value="Small (S)">Small (S)</b-form-select-option>
                <b-form-select-option value="Medium (M)">Medium (M)</b-form-select-option>
                <b-form-select-option value="Large (L)">Large (L)</b-form-select-option>
                <b-form-select-option value="Extra Large (XL)">Extra Large (XL)</b-form-select-option>
                <b-form-select-option value="Double X-L(XXL)">Double X-L(XXL)</b-form-select-option>
                <b-form-select-option value="Triple X-L (XXXL)">Triple X-L (XXXL)</b-form-select-option>
            </b-form-select>
            <div v-if="$v.form.ukuran_jas_lab.$error">
                <div class="error-custom mt-1 ml-1" v-if="!$v.form.ukuran_jas_lab.required">Field is required</div>
            </div>
        </b-form-group>
            
        <b-form-group>
            <label for="helm" class="h6">Ukuran Helm <strong v-b-modal.modal-helm><b-icon-box-arrow-up-right></b-icon-box-arrow-up-right></strong></label>
            <b-modal id="modal-helm" hide-footer size="sm" centered title="Daftar Ukuran">
                <b-card>
                    <b-card-text class="m-0">
                        <div>XS : 53-54 centimeters</div>
                        <div>S : 55-56 centimeters</div>
                        <div>M : 57-58 centimeters</div>
                        <div>L : 59-60 centimeters</div>
                        <div>XL : 61-62 centimeters</div>
                        <div>XXL : 63-64 centimeters</div>
                    </b-card-text>
                </b-card>
            </b-modal>
            <b-form-select id="helm" size="sm" class="bg-white input rounded" v-model="form.ukuran_helm">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="Extra Small (XS)">Extra Small (XS)</b-form-select-option>
                <b-form-select-option value="Small (S)">Small (S)</b-form-select-option>
                <b-form-select-option value="Medium (M)">Medium (M)</b-form-select-option>
                <b-form-select-option value="Large (L)">Large (L)</b-form-select-option>
                <b-form-select-option value="Extra Large (XL)">Extra Large (XL)</b-form-select-option>
                <b-form-select-option value="Double X-L(XXL)">Double X-L(XXL)</b-form-select-option>
            </b-form-select>
            <div v-if="$v.form.ukuran_helm.$error">
                <div class="error-custom mt-1 ml-1" v-if="!$v.form.ukuran_helm.required">Field is required</div>
            </div>
        </b-form-group>
            <div class="d-flex justify-content-center">
                <v-btn class="p-0" color="#C53751"><b-button class="button-primary pl-5 pr-5" size="sm" 
        variant="light" @click="simpan()">Simpan</b-button></v-btn>
            </div>
        </b-form>
        <div class="mt-1">
                    <p class="typo__p" v-if="submitStatus === 'OK'" style="color:rgb(60, 233, 54)">Thanks for your submission!</p>
                    <p class="typo__p" v-if="submitStatus === 'ERROR'" style="color:red">Please fill the form correctly.</p>
                    <p class="typo__p" v-if="submitStatus === 'PENDING'" style="color:rgb(246, 226, 47)">Submitting...</p>
                </div>
    </v-container>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
import {BIconBoxArrowUpRight} from 'bootstrap-vue'

export default {
    name:'form-atribut',
    props:{
        form:Object,
    },
    components:{
        BIconBoxArrowUpRight,
    },
    validations:{
        form:{
            ukuran_sepatu:{
                required,
            },
            ukuran_baju:{
                required,
            },
            ukuran_jas_lab:{
                required,
            },
            ukuran_helm:{
                required,
            }
        }
    },
    data(){
        return{
            submitStatus:null,
        }
    },
    methods:{
        simpan(){
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                    this.submitStatus = 'OK'
                }, 1000)
                setTimeout(() => {
                    this.$emit('simpan')
                }, 1500)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.button-primary{
        color:white !important;
        background-color: #C53751 !important;
        border:none;
    }
    .text{
    font-family: 'oswald';
    }
    .error-custom{
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: red;
}
.typo__p{
    font-size:12px;
}
</style>