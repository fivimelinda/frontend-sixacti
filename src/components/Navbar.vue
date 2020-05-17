<template>
    <nav>
        <v-app-bar app>
            <v-icon color="#C53751" @click="drawer = !drawer">mdi-menu</v-icon>
            <span class="ml-sm-8">
            <v-img
            :src="require('../assets/xacti.png')"
            ></v-img></span>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <v-icon right large>mdi-account-circle</v-icon>
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
            nav style="padding:0" class="p-1">
            <v-list-item>
                <!-- <v-list-item-avatar
                    class="align-self-center"
                    color="white"
                    >
                </v-list-item-avatar> -->
                <v-list-item-content>
                    <v-list-item-title
                    class="display-1"
                    >
                    SIXACTI
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list>

            <v-divider class="" />
            
            <v-list
            expand
            nav>
                <v-list-item-group color="#C53751">
                <v-list-item style="text-decoration:none !important" v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="black--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="black--text">{{ link.text }}</v-list-item-title>
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
            links:[
                { 
                  icon: 'mdi-home-outline',
                  text: 'Beranda',
                  route:'/'
                },
                { 
                  icon: 'mdi-account-multiple-outline', 
                  text: 'Cuti', 
                  route:'/cuti'
                },
                {
                  icon: '',
                  text: 'Review Cuti',
                  route: '/reviewCuti'
                }
            ]
                
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