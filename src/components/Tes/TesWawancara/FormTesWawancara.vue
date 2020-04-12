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
                        <b-form-input
                        id="input1"
                        v-model="form.nilai"
                        type="text"
                        placeholder=""
                        class="bg-white input rounded">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="umpan_balik"
                    >
                        <label for="input2">Umpan Balik</label>
                        <b-form-input
                        id="input2"
                        v-model="form.umpan_balik"
                        type="text"
                        placeholder=""
                        class="bg-white input rounded">
                        </b-form-input>
                    </b-form-group>

                    <v-btn v-if="isUpdate" color="#C53751"><b-button class="button-primary" size="sm" @click="submit()" variant="light">Update</b-button></v-btn>
                    <v-btn v-else-if="isCreate" color="#C53751"><b-button class="button-primary" size="sm" @click="submit()" variant="light">Submit</b-button></v-btn>
                    <v-btn class="ml-3" outlined color="#C53751"><b-button size="sm" @click="batal()" 
                    style="background-color:white !important; border:none;color:#C53751">Batal</b-button></v-btn>
                </b-form>
            </b-card-text>
        </b-card>
        </v-card>
        </div>
    </v-container>
</template>

<script>

export default {
name:"form-tes-wawancara",
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

    }
},
methods:{
        submit(){
            this.$emit('submit')
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