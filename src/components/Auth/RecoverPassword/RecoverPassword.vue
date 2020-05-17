<template>
    <v-container>
        <div class="jumbotron" style="background-color:transparent">
            <v-card
            max-width="375px"
            class="my-auto mx-auto"
            style="box-shadow:none !important"
            >
                <b-card class="text-center" title="Change Password" sub-title="Gunakan password lama untuk mengganti">
                    <b-card-text class="mt-5">
                    <b-form style="margin:0">
                        <b-form-group
                        id="input-group-1"
                        >
                            <b-form-input
                            size="sm"
                            id="input-1"
                            v-model="old_pass"
                            type="password"
                            required
                            placeholder="password lama"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                        id="input-group-2">
                            <b-form-input
                            id="input-2"
                            size="sm"
                            v-model="new_pass"
                            type="password"
                            required
                            placeholder="password baru"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                        id="input-group-3">
                            <b-form-input
                            id="input-3"
                            size="sm"
                            v-model="password"
                            type="confirm_pass"
                            required
                            placeholder="konfirmasi"
                            ></b-form-input>
                        </b-form-group>
                        <b-button size="sm" class="mb-5" type="submit" variant="primary">Submit</b-button>
                    </b-form>
                </b-card-text>
                </b-card>
            </v-card>
        </div>
    </v-container>
</template>

<script>
export default {
    name:"change-password",
    data(){
        return{
            old_pass:"",
            new_pass:"",
            confirm_pass:""
        }
    }
}
</script>

<style lang="scss" scoped>

</style>