<template>
    <div class="background mb-5 pb-5">
        
    <v-container class="mb-5 pb-5">
        <div class="jumbotron mb-5" style="background-color:transparent !important">
                    
        <div class="jumbotron mb-5" style="background-color:transparent !important">
            
            <v-card
            max-width="350px"
            class="my-auto mx-auto mt-5"
            
            >

            <b-card class="text-center background-card" style="border:none">
                <b-card-text class="">
                    <div class="h5 m-0 primary-color">
                        Masuk Ke Dalam Web
                    </div>
                    <div class="mb-5 secondary-color" style="font-size:12px">
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
                                class="input"
                                id="input-1"
                                v-model="user.username"
                                type="text"
                                required
                                placeholder="Username"
                                ></b-form-input>
                            </b-input-group>
                            <div v-if="$v.user.username.$error">
                                <div class="error-custom mt-1 ml-1" v-if="!$v.user.username.required">Field is required</div>
                                <div class="error-custom mt-1 ml-1" v-if="!$v.user.username.minLength">username harus memiliki panjang antara 3 sampai 20 character.</div>
                            </div>
                        </b-form-group>

                        <b-form-group
                        id="input-group-2">
                            <b-input-group  size="sm">
                                <b-input-group-prepend class="input" is-text>
                                    <b-icon-lock-fill></b-icon-lock-fill>
                                </b-input-group-prepend>
                                <b-form-input
                                    class="input"
                                    id="input-2"
                                    size="sm"
                                    v-model="user.password"
                                    type="password"
                                    required
                                    placeholder="password"
                                    ></b-form-input>
                            </b-input-group>
                            <div v-if="$v.user.password.$error">
                                <div class="error-custom mt-1 ml-1" v-if="!$v.user.password.required">Field is required</div>
                                <div class="error-custom mt-1 ml-1" v-if="!$v.user.password.minLength">Password harus memiliki panjang antara 6 sampai 20 character.</div>
                            </div>
                        </b-form-group>
                        <b-button size="sm" class="btn btn-block button-primary" variant="primary" @click="handleLogin()">Masuk</b-button>
                        <div class="mt-1">
                            <p class="typo__p" v-if="submitStatus === 'OK'" style="color:rgb(60, 233, 54)">Logged In Success</p>
                            <p class="typo__p" v-if="submitStatus === 'ERROR'" style="color:red">Please fill the form correctly.</p>
                            <p class="typo__p" v-if="submitStatus === 'PENDING'" style="color:rgb(246, 226, 47)">Please Wait! Login...</p>
                            <p class="typo__p" v-if="submitStatus === 'FAILED'" style="color:rgb(246, 226, 47)">{{message}}</p>
                        </div>
                    </b-form>
                    <div>
                        <div style="font-size:12px" class="mt-4 m-0">
                            Don't have an account? <strong><a class="primary-color" href="/auth/signup">Sign up now!</a></strong>
                        </div>
                    </div>
                    <div class="form-group">
                        <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                    </div>
                </b-card-text>
            </b-card>
            <!-- <b-button @click="logOut()">Logout</b-button> -->

            <!-- <div v-if="loggedIn">{{currentUser.username}}</div>
            <div v-if="loggedIn">{{currentUser.role}}</div> -->
            
            </v-card>
        </div>
        </div>
    </v-container>
    
    </div>
</template>

<script>
import User from '../../../models/User'
import {BIconLockFill, BIconPersonFill} from 'bootstrap-vue'
import {required, minLength} from 'vuelidate/lib/validators'

export default {
    name:"login",
    components:{
      BIconLockFill,
      BIconPersonFill
    },
    validations:{
        user:{
            password:{
                required,
                minLength:minLength(6)
            },
            username:{
                required,
                minLength:minLength(3)
            }
        }
    },
    data(){
        return{
            user: new User('', ''),
            loading:false,
            message:'',
            submitStatus:null,
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
        if (!this.loggedIn) {
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
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                    if (this.user.username && this.user.password) {
                    this.$store.dispatch('auth/login', this.user).then(
                    () => {
                    this.submitStatus ='OK';
                    setTimeout(() => {
                        this.$router.push('/');
                    },500);
                    },
                    error => {
                    this.submitStatus = 'FAILED';
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                    }
                );
            }
                }, 500)
            }
            
            
        }
    }
}
</script>
<style lang="scss" scoped>
.typo__p{
    font-size:12px;
    text-align: left;
}

.error-custom{
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: red;
    text-align: left;
}
.background{
    background-color: #F6EDF0 !important;
}
// .background-card{
//     border:none;
//     background-color: rgba(246, 237, 240, 0.548) !important;
// }
.button-primary{
    color: white !important;
    background-color: #C53751 !important;
    border:none !important;
}
.primary-color{
    color:#C53751 !important;
}
.secondary-color{
    color:rgb(175, 129, 129);
}
.input:focus{
    border:1px solid #C53751;
    background-color: rgba(197, 55, 81, 0.02) !important;
}
.input{
    font-size: 14px;
    background-color: rgba(248, 248, 248, 0.726) !important;
}
</style>