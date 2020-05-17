<template>
    <v-container>
        <div class="jumbotron" style="background-color:transparent">
            <v-card
            max-width="350px"
            class="mx-auto my-auto"
            style="box-shadow:none">
                <b-card>
                    <b-card-text
                    class="text-center">
                    <div class="h5 m-0">
                        Daftar Sekarang
                    </div>
                    <div class="mb-5" style="font-size:12px">
                        Sudah punya akun PT. Xacti? <strong><a href="/auth/login">Masuk</a></strong>
                    </div>
                        <b-form
                        class="m-0">
                            <b-form-group>
                                <b-input-group size="sm">
                                    <b-input-group-prepend is-text>
                                        <b-icon-person-fill></b-icon-person-fill>
                                    </b-input-group-prepend>
                                    <b-form-input
                                    size="sm"
                                    id="username"
                                    v-model="user.username"
                                    type="text"
                                    required
                                    placeholder="Username">
                                    </b-form-input>
                                </b-input-group>
                            </b-form-group>
                            <b-form-group>
                                <b-input-group size="sm">
                                    <b-input-group-prepend is-text>
                                        <b-icon-lock-fill></b-icon-lock-fill>
                                    </b-input-group-prepend>
                                    <b-form-input
                                    size="sm"
                                    id="password"
                                    v-model="user.password"
                                    type="password"
                                    required
                                    placeholder="password">
                                </b-form-input>
                                </b-input-group>
                            </b-form-group>

                            <b-form-group>
                                <b-input-group size="sm">
                                    <b-input-group-prepend is-text>
                                        <b-icon-lock-fill></b-icon-lock-fill>
                                    </b-input-group-prepend>
                                    <b-form-input
                                    size="sm"
                                    id="password"
                                    v-model="confirm_password"
                                    type="password"
                                    required
                                    placeholder="confirm password">
                                    </b-form-input>
                                </b-input-group>
                            </b-form-group>
                            <b-button size="sm" class="btn btn-block" @click="handleRegister()">Daftar</b-button>
                        </b-form>
                        <div class="mt-5 pr-5 pl-5" style="font-size:12px" >
                            Dengan mendaftar, saya menetujui <a href="#">Syarat dan Ketentuan</a>
                            serta <a href="#">Kebijakan Privasi.</a>
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
  </v-container>
</template>

<script>
import User from '../../../models/User';
import {BIconLockFill, BIconPersonFill} from 'bootstrap-vue'

export default {
  name: 'Register',
  components:{
      BIconLockFill,
      BIconPersonFill
  },
  data() {
    return {
      user: new User('', ''),
      confirm_password:"",
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/auth/signup');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
    }
  }
};
</script>

<style lang="scss" scoped>

</style>