<template>
    <v-container>
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
        </b-form-group>
            
        <b-form-group>
            <label for="baju" class="h6">Ukuran Baju Seragam</label>
            <b-form-select id="baju" size="sm" class="bg-white input rounded" v-model="form.ukuran_baju">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="xs">Extra Small (XS)</b-form-select-option>
                <b-form-select-option value="s">Small (S)</b-form-select-option>
                <b-form-select-option value="m">Medium (M)</b-form-select-option>
                <b-form-select-option value="l">Large (L)</b-form-select-option>
                <b-form-select-option value="xl">Extra Large (XL)</b-form-select-option>
                <b-form-select-option value="xxl">Double X-L(XXL)</b-form-select-option>
                <b-form-select-option value="xxxl">Triple X-L (XXXL)</b-form-select-option>
            </b-form-select>
        </b-form-group>
            
        <b-form-group>
            <label for="jasLab" class="h6">Ukuran Jas Lab</label>
            <b-form-select id="jasLab" size="sm" class="bg-white input rounded" v-model="form.ukuran_jas_lab">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="xs">Extra Small (XS)</b-form-select-option>
                <b-form-select-option value="s">Small (S)</b-form-select-option>
                <b-form-select-option value="m">Medium (M)</b-form-select-option>
                <b-form-select-option value="l">Large (L)</b-form-select-option>
                <b-form-select-option value="xl">Extra Large (XL)</b-form-select-option>
                <b-form-select-option value="xxl">Double X-L(XXL)</b-form-select-option>
                <b-form-select-option value="xxxl">Triple X-L (XXXL)</b-form-select-option>
            </b-form-select>
        </b-form-group>
            
        <b-form-group>
            <label for="helm" class="h6">Ukuran Helm</label>
            <b-form-select id="helm" size="sm" class="bg-white input rounded" v-model="form.ukuran_helm">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="xs">Extra Small (XS)</b-form-select-option>
                <b-form-select-option value="s">Small (S)</b-form-select-option>
                <b-form-select-option value="m">Medium (M)</b-form-select-option>
                <b-form-select-option value="l">Large (L)</b-form-select-option>
                <b-form-select-option value="xl">Extra Large (XL)</b-form-select-option>
                <b-form-select-option value="xxl">Double X-L(XXL)</b-form-select-option>
                <b-form-select-option value="xxxl">Triple X-L (XXXL)</b-form-select-option>
            </b-form-select>
        </b-form-group>
            <div class="d-flex justify-content-center">
                <v-btn class="p-0" color="#C53751"><b-button class="button-primary pl-5 pr-5" size="sm" 
        variant="light">Simpan</b-button></v-btn>
            </div>
        </b-form>
    </v-container>
</template>

<script>
export default {
    name:'form-atribut',
    props:{
        form:Object,
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>

</style>