<template>
  <v-app-bar app color="whitemaz elevation-0">
    <v-row class="mb-10 mt-10">
      <v-col cols="3" class="ml-10">
        <v-img :src="require(`@/assets/logo-tool2.png`)" />
      </v-col>
    </v-row>

    <v-spacer></v-spacer>
    <v-btn x-small outlined @click="logout">Logout</v-btn>
    <!--    <v-btn icon @click="toggle_dark_mode">-->
    <!--      <v-icon>mdi-theme-light-dark</v-icon>-->
    <!--    </v-btn>-->
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import AuthService from "@/services/AuthService";
export default {
  name: "ToolBarAuth",
  data() {
    return {
      theme: null,
    };
  },
  methods: {
    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    async logout() {
      await this.logoutExt();
      await localStorage.clear();
      await this.$router.push({ name: "login_family" });
    },

    logoutExt() {
      const payload = {
        email: this.email,
      };
      AuthService.logout(payload).then(() => {
        console.log("logged out extern");
      });
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },
  computed: {
    ...mapGetters("auth", ["email"]),
  },
};
</script>

<style scoped></style>
