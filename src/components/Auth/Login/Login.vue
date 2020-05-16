<template>
    <v-container class="">
        <div class="jumbotron m-0" style="background-color:transparent !important">
        <div class="jumbotron" style="background-color:transparent !important">
            <v-card
            max-width="350px"
            class="my-auto mx-auto mt-5"
            style="box-shadow:none !important"
            >
            <b-card class="text-center">
                <b-card-text class="">
                    <div class="h5 m-0">
                        Masuk Ke Dalam Web
                    </div>
                    <div class="mb-5" style="font-size:12px">
                        Gunakan username untuk masuk
                    </div>
                    <b-form style="margin:0">
                        <b-form-group
                        id="input-group-1"
                        >
                            <b-input-group size="sm">
                                <b-input-group-prepend is-text>
                                    <b-icon-person-fill></b-icon-person-fill>
                                </b-input-group-prepend>
                                <b-form-input
                                size="sm"
                                id="input-1"
                                v-model="user.username"
                                type="text"
                                required
                                placeholder="Username"
                                ></b-form-input>
                            </b-input-group>
                        </b-form-group>

                        <b-form-group
                        id="input-group-2">
                            <b-input-group size="sm">
                                <b-input-group-prepend is-text>
                                    <b-icon-lock-fill></b-icon-lock-fill>
                                </b-input-group-prepend>
                                <b-form-input
                                    id="input-2"
                                    size="sm"
                                    v-model="user.password"
                                    type="password"
                                    required
                                    placeholder="password"
                                    ></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <b-button size="sm" class="mb-5 btn btn-block" variant="primary" @click="handleLogin()">Masuk</b-button>
                    </b-form>
                    <div>
                        <div style="font-size:12px">
                            Don't have an account? <strong><a href="/auth/signup">Sign up now!</a></strong>
                        </div>
                        <div style="font-size:12px">
                            Create an Account
                        </div>
                    </div>
                    <div class="form-group">
                        <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                    </div>
                </b-card-text>
            </b-card>
            <b-button @click="logOut()">Logout</b-button>
            
            <div v-if="loggedIn">{{currentUser.username}}</div>
            <div v-if="loggedIn">{{currentUser.role}}</div>
            
            </v-card>
        </div>
        </div>
    </v-container>
</template>

<script>
import User from '../../../models/User'
import {BIconLockFill, BIconPersonFill} from 'bootstrap-vue'

export default {
    name:"login",
    components:{
      BIconLockFill,
      BIconPersonFill
    },
    data(){
        return{
            user: new User('', ''),
            loading:false,
            message:'',
        }
    },
    computed:{
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    created(){
        if (this.loggedIn) {
            this.$router.push('/auth/login');
        }
    },
    methods:{
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/');
        },
        handleLogin(){
            this.loading=true;
            if (this.user.username && this.user.password) {
                this.$store.dispatch('auth/login', this.user).then(
                    () => {
                    this.$router.push('/');
                    },
                    error => {
                    this.loading = false;
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                    }
                );
                }
        }
    }
}
</script>