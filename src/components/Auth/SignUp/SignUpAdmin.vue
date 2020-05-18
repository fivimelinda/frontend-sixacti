<template>
    <div class="background">
    <v-container>
        <div class="jumbotron" style="background-color:transparent">
        <div class="jumbotron" style="background-color:transparent">
            <v-card
            max-width="350px"
            class="mx-auto my-auto"
            style="">
                <b-card>
                    <b-card-text class="text-center">
                        <div class="h5 m-0 primary-color">
                            Daftar Sekarang
                        </div>
                        <div class="mb-4 secondary-color" style="font-size:12px">
                            Sudah punya akun PT. Xacti? <strong><a class="primary-color" href="/auth/login">Masuk</a></strong>
                        </div>
                        <hr/>
                        <b-form
                        class="m-0">
                            <b-form-group>
                                <b-input-group size="sm">
                                    <b-input-group-prepend is-text>
                                        <b-icon-person-fill></b-icon-person-fill>
                                    </b-input-group-prepend>
                                    <b-form-input
                                    class="input"
                                    size="sm"
                                    id="username"
                                    v-model="username"
                                    type="text"
                                    required
                                    placeholder="Username">
                                    </b-form-input>
                                </b-input-group>
                                <div v-if="$v.username.$error">
                                  <div class="error-custom mt-1 ml-1" v-if="!$v.username.required">Field is required</div>
                                  <div class="error-custom mt-1 ml-1" v-if="!$v.username.minLength">Username harus memiliki minimal 3 character.</div>
                                </div>
                            </b-form-group>
                            <b-form-group>
                                <b-input-group size="sm">
                                    <b-input-group-prepend is-text>
                                        <b-icon-briefcase-fill></b-icon-briefcase-fill>
                                    </b-input-group-prepend>
                                    <template>

                                    </template>
                                    <b-form-select size="sm"
                                        class="input"
                                        v-model='value'
                                        :options="options"
                                    >
                                        <template v-slot:first>
                                        <!-- This is required to prevent bugs with Safari -->
                                        <option disabled value=null>Choose a role...</option>
                                        </template>
                                    </b-form-select>
                                </b-input-group>
                                <div v-if="$v.value.$error">
                                  <div class="error-custom mt-1 ml-1" v-if="!$v.value.required">Field is required</div>
                                </div>
                            </b-form-group>
                            <b-form-group>
                                <b-input-group size="sm">
                                    <b-input-group-prepend is-text>
                                        <b-icon-lock-fill></b-icon-lock-fill>
                                    </b-input-group-prepend>
                                    <b-form-input
                                    class="input"
                                    size="sm"
                                    id="password"
                                    v-model="password"
                                    type="password"
                                    required
                                    placeholder="password">
                                </b-form-input>
                                </b-input-group>
                                <div v-if="$v.password.$error">
                                  <div class="error-custom mt-1 ml-1" v-if="!$v.password.required">Field is required</div>
                                  <div class="error-custom mt-1 ml-1" v-if="!$v.password.minLength">Password harus memiliki minimal 6 character.</div>
                                </div>
                            </b-form-group>
                            <b-form-group>
                                <b-input-group size="sm">
                                    <b-input-group-prepend is-text>
                                        <b-icon-lock-fill></b-icon-lock-fill>
                                    </b-input-group-prepend>
                                    <b-form-input
                                    class="input"
                                    size="sm"
                                    id="confirm_password"
                                    v-model="confirm_password"
                                    type="password"
                                    required
                                    placeholder="konfirmasi password">
                                </b-form-input>
                                </b-input-group>
                                <div v-if="$v.confirm_password.$error">
                                  <div class="error-custom mt-1 ml-1" v-if="!$v.confirm_password.required">Field is required</div>
                                  <div class="error-custom mt-1 ml-1" v-else-if="!$v.confirm_password.sameAsPassword">Passwords must be identical.</div>
                                </div>
                            </b-form-group>
                            <!-- <b-form-group>
                                <b-form-tags style="" v-model="value" size="sm" add-on-change no-outer-focus class="mb-2">
                                    <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                                    <b-input-group size="sm">
                                        <b-input-group-prepend is-text>
                                            <b-icon-briefcase-fill>

                                            </b-icon-briefcase-fill>
                                        </b-input-group-prepend>
                                        <b-form-select size="sm"
                                            v-bind="inputAttrs"
                                            v-on="inputHandlers"
                                            :disabled="disabled || availableOptions.length === 0"
                                            :options="availableOptions"
                                        >
                                            <template v-slot:first>
                                           
                                            <option disabled value="">Choose a role...</option>
                                            </template>
                                        </b-form-select>
                                    </b-input-group>
                                    
                                    <ul v-if="tags.length > 0" class="list-inline d-inline-block m-0 mt-2">
                                        <li v-for="tag in tags" :key="tag" class="list-inline-item">
                                        <b-form-tag
                                            v-model="value"
                                            @remove="removeTag(tag)"
                                            :title="tag"
                                            :disabled="disabled"
                                            variant="info"
                                        >{{ tag }}</b-form-tag>
                                        </li>
                                    </ul>
                                    </template>
                                </b-form-tags>
                            </b-form-group> -->

                            
                                <b-button size="sm" class="btn btn-block button-primary" @click="handleRegister()">Daftar</b-button>
                                <div class="mt-1">
                                    <p class="typo__p" v-if="submitStatus === 'OK'" style="color:rgb(60, 233, 54)">Sign Up Success!</p>
                                    <p class="typo__p" v-if="submitStatus === 'ERROR'" style="color:red">Please fill the form correctly.</p>
                                    <p class="typo__p" v-if="submitStatus === 'PENDING'" style="color:rgb(246, 226, 47)">Please Wait! Signup...</p>
                                    <p class="typo__p" v-if="submitStatus === 'FAILED'" style="color:rgb(246, 226, 47)">{{message}}</p>
                                </div>
                        </b-form>
                        <div class="mt-5 pr-5 pl-5" style="font-size:12px" >
                            Dengan mendaftar, saya menetujui <a href="">Syarat dan Ketentuan</a>
                            serta <a href="">Kebijakan Privasi.</a>
                        </div>
                        <div
                            v-if="message"
                            class="alert"
                            :class="successful ? 'alert-success' : 'alert-danger'"
                        >{{message}}</div>
                   
                    </b-card-text>
                </b-card>
            </v-card>
        </div>
        </div>
    </v-container>
    </div>
</template>
<script>
// import User from '../../../models/User';
import {BIconLockFill, BIconPersonFill, BIconBriefcaseFill} from 'bootstrap-vue'
import {required, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
    name: 'Register',
    components:{
        BIconBriefcaseFill,
        BIconLockFill,
        BIconPersonFill
    },
    validations:{
        username:{
            required,
            minLength:minLength(6)
        },
        password:{
            required,
            minLength:minLength(6)
        },
        confirm_password:{
            required,
            sameAsPassword:sameAs('password')
        },
        value:{
            required,
        }
    },
    data() {
        return {
        object:{
            username:'',
            password:'',
            role:[]
        },
        submitStatus:null,
        username:"",
        password:"",
        confirm_password:"",
        submitted: false,
        successful: false,
        message: '',
        value: null,
        options: ['karyawan tetap', 'karyawan kontrak', 'admin', 'manager', 'assistant', 'section', 'departement'],
        };
    },
    computed: {
        loggedIn() {
        return this.$store.state.auth.status.loggedIn;
        },
        availableOptions() {
            return this.options.filter(opt => this.value.indexOf(opt) === -1)
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    created(){
        
    },
    mounted() {
        if (!this.loggedIn) {
            this.$router.push('/auth/login');
        }else if(!(this.currentUser.role[0] === "ROLE_ADMIN")){
            this.$router.push('/');
        }
    },
    methods: {
        handleRegister() {
        this.message = '';
        this.submitted = true;
        this.object.username = this.username;
        this.object.password = this.password;
        this.object.role.push(this.value);
        console.log(this.object);
        this.$v.$touch()
      if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'}
      else if (!(this.password === this.confirm_password)) {
          this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        this.object.username = this.username;
        this.object.password = this.password;
          setTimeout(() => {
            this.$store.dispatch('auth/register', this.object).then(
            data => {
              this.message = data.message;
              this.successful = true;
              this.submitStatus = 'OK'
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
              this.submitStatus = 'FAILED';
            }
          );
                }, 500)
      }
        }
    }
    }
</script>
<style lang="scss" scoped>
.background{
    background-color: #F6EDF0 !important;
}
.primary-color{
    color:#C53751 !important;
}
.secondary-color{
    color:rgb(175, 129, 129);
}
.button-primary{
    color: white !important;
    background-color: #C53751 !important;
    border:none !important;
}
.typo__p{
    font-size:12px;
    text-align: left;
}
.input:focus{
    border:1px solid #C53751;
    background-color: rgba(197, 55, 81, 0.02) !important;
}
.input{
    font-size: 14px;
    background-color: rgba(248, 248, 248, 0.726) !important;
}
.error-custom{
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: red;
    text-align: left;
}
</style>