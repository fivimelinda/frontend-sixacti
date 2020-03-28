<template>
    <nav>
        <v-app-bar app>
            <v-icon large color="#C53751" @click="drawer = !drawer">mdi-menu</v-icon>
            <span class="ml-sm-8">
            <v-img
            :src="require('../assets/xacti.png')"
            ></v-img></span>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <v-icon right large>mdi-account-circle</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item-group color="#C53751">
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
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
            drawer: false,
            links:[
                { icon: 'mdi-home-outline', text: 'Beranda', route:'/'},
                { icon: 'mdi-account-multiple-outline', text: 'Cuti', route:'/cuti'}
            ]
                
        }
    }
    
}
</script>