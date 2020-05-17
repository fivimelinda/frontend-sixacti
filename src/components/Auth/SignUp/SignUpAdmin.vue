<template>
    <v-container>
        <div class="jumbotron" style="background-color:transparent">
            <v-card
            max-width="350px"
            class="mx-auto my-auto"
            style="box-shadow:none">
                <b-card>
                    <b-card-text class="text-center">
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
                                <!-- prop `add-on-change` is needed to enable adding tags vie the `change` event -->

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
                                            <!-- This is required to prevent bugs with Safari -->
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
                                </b-form-group>
                                <b-button size="sm" class="btn btn-block" @click="handleRegister()">Daftar</b-button>
                        </b-form>
                    </b-card-text>
                </b-card>
            </v-card>
            <div>{{value}}</div>
        </div>
    </v-container>    
</template>
<script>
import User from '../../../models/User';
import {BIconLockFill, BIconPersonFill, BIconBriefcaseFill} from 'bootstrap-vue'

export default {
    name: 'Register',
  components:{
      BIconBriefcaseFill,
      BIconLockFill,
      BIconPersonFill
  },
  data() {
    return {
      object:{
          username:'',
          password:'',
          role:[]
      },
      user: new User('', ''),
      confirm_password:"",
      submitted: false,
      successful: false,
      message: '',
      value: [],
      options: ['karyawan tetap', 'karyawan kontrak', 'admin', 'manager', 'assistant', 'section', 'departement'],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1)
      }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/auth/signup-admin');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.object.username = this.user.username;
      this.object.password = this.user.password;
      this.object.role = this.value;
      console.log(this.object.role);
      this.$store.dispatch('auth/register', this.object).then(
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
}
</script>
<style lang="scss" scoped>

</style>