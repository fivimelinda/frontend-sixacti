<template>
    <nav>
        <v-app-bar app>
            <v-icon color="#C53751" @click="drawer = !drawer">mdi-menu</v-icon>
            <span class="ml-sm-8">
            <v-img
            :src="require('../assets/xacti.png')"
            ></v-img></span>
            <v-spacer></v-spacer>
            <v-btn text color="grey" v-if="this.loggedIn">{{name}}
                <v-icon right large>mdi-account-circle</v-icon>
            </v-btn>
            <v-btn text color="grey" v-if="!this.loggedIn" router :to="'/auth/login'">Login
                <v-icon right large>mdi-login-variant</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer 
        v-model="drawer"
        id="core-navigation-drawer"
        :right="$vuetify.rtl"
        app
        mobile-break-point="960"
        width="260"
        
        >
            <v-list
            dense
            nav class="p-1">
            <v-list-item>
                <!-- <v-list-item-avatar
                    class="align-self-center"
                    color="white"
                    >
                </v-list-item-avatar> -->
               
                    <v-list-item-title
                    class="title"
                    >
                    SIXACTI
                    </v-list-item-title>
               
            </v-list-item>
            </v-list>

            <v-divider class="" />
            
            <v-list
            expand
            nav>

                <v-list-item-group  color="#C53751">
                <v-list-item style="text-decoration:none !important" router :to="'/'">
                    <v-list-item-action>
                        <v-icon class="black--text">mdi-home-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="black--text">Beranda</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="isKaryawanTetap" style="text-decoration:none !important" router :to="'/cuti'">
                    <v-list-item-action>
                        <v-icon class="black--text">mdi-account-multiple-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="black--text">Cuti</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="isManager" style="text-decoration:none !important" router :to="'/reviewCuti'">
                    <v-list-item-action>
                        <v-icon class="black--text">mdi-clipboard-check-multiple-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="black--text">Review Cuti</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item style="text-decoration:none !important" router :to="'/daftar-lowongan'">
                    <v-list-item-action>
                        <v-icon class="black--text">mdi-account-search-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="black--text">Daftar Lowongan</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="isAdmin" style="text-decoration:none !important" router :to="'/ListRequestLowongan'">
                    <v-list-item-action>
                        <v-icon class="black--text">mdi-message-text-clock-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="black--text">Request Lowongan</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!-- <v-list-item style="text-decoration:none !important" router :to="'/applications'">
                    <v-list-item-action>
                        <v-icon class="black--text"></v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="black--text">Applicants</v-list-item-title>
                    </v-list-item-content>
                </v-list-item> -->
                </v-list-item-group>
                <hr/>
                <v-list-item-group>
                  <v-list-item style="border:1px solid red;" v-if="loggedIn" @click="logOut()">
                  <v-list-item-action>
                    <v-icon class="black-text">mdi-power</v-icon>
                  </v-list-item-action>
                  
                  <v-list-item-content>
                        <v-list-item-title class="black--text" style="">Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>
<script>
export default {
    data(){
        return{
            responsive:false,
            drawer: false,
            isAdmin: false,
            isManager: false,
            isPelamar: false,
            isKaryawanTetap: false,
            isKaryawanKontrak: false
                
        }
    },
    methods:{
      logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/auth/login');
      },
      setUser(){
        this.name = this.currentUser.username
        if(this.currentUser.role[0] === "ROLE_KARYAWANTETAP"){
          this.isKaryawanTetap = true
        } else if(this.currentUser.role[0] === "ROLE_KARYAWANKONTRAK"){
          this.isKaryawanKontrak = true
        } else if(this.currentUser.role[0] === "ROLE_PELAMAR"){
          this.isPelamar = true
        } else if(this.currentUser.role[0] === "ROLE_ADMIN"){
          this.isAdmin = true
        } else{
          this.isManager = true
        }
      }

    },
    computed: {
        loggedIn() {
          return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
          return this.$store.state.auth.user;
        }
    },
    created(){
      if (this.loggedIn){
        this.setUser()
      }
    }
    
}
</script>

<style lang="sass" scoped>
 @import '~vuetify/src/styles/tools/_rtl.sass'

 #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24
    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px
        +ltr()
          margin-right: 24px
          margin-left: 12px !important
        +rtl()
          margin-left: 24px
          margin-right: 12px !important
    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px
    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px
        +rtl()
          padding-right: 8px
      .v-list-group__header
        +ltr()
          padding-right: 0
        +rtl()
          padding-right: 0
        .v-list-item__icon--text
          margin-top: 19px
          order: 0
        .v-list-group__header__prepend-icon
          order: 2
          +ltr()
            margin-right: 8px
          +rtl()
            margin-left: 8px
</style>