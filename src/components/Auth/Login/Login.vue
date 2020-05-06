<template>
    <v-container>
        <div class="jumbotron" style="background-color:transparent !important">
            <v-card
            max-width="375px"
            class="my-auto mx-auto"
            style="box-shadow:none !important"
            >
            <b-card class="text-center" title="Login to Your Web App" sub-title="Use your username to login">
                <b-card-text class="mt-5">
                    <b-form style="margin:0">
                        <b-form-group
                        id="input-group-1"
                        >
                            <b-form-input
                            size="sm"
                            id="input-1"
                            v-model="username"
                            type="text"
                            required
                            placeholder="Username"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                        id="input-group-1">
                            <b-form-input
                            id="input-2"
                            size="sm"
                            v-model="password"
                            type="password"
                            required
                            placeholder="password"
                            ></b-form-input>
                        </b-form-group>
                        <b-button size="sm" class="mb-5" type="submit" variant="primary">Submit</b-button>
                    </b-form>
                    <div>
                        <div>
                            Don't have an account? Sign up now!
                        </div>
                        <div>
                            Create an Account
                        </div>
                    </div>
                </b-card-text>
            </b-card>
            </v-card>
        </div>
    </v-container>
</template>

<script>
export default {
    name:"login",
    data(){
        return{
            username:"",
            password:""
        }
    }
}
</script>