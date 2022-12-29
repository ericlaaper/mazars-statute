<template>
  <div>
    <h3 class="primary--text mt-15">Uw rapportage is onderweg.</h3>
    <br />
    U kunt nu direct verder gaan met een eventuele volgende module of nu stoppen
    en eventueel later verder gaan.

    <v-row no-gutters class="mt-5">
      <v-col cols="1" />
      <v-col cols="4">
        <v-btn large block color="primary" @click="goStop">STOP</v-btn>
      </v-col>
      <v-col cols="2" />
      <v-col cols="4">
        <v-btn large block color="secondary" @click="goOn">Verder</v-btn>
      </v-col>
      <v-col />
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AuthService from "@/services/AuthService";

export default {
  name: "endElement",
  data() {
    return {};
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },

    async goStop() {
      await this.$vuetify.goTo(0);
      // eslint-disable-next-line no-undef
      await EventBus.$emit("logoutApp", true);
      await this.sleep(2000);
      await this.logoutExt();
      await localStorage.clear();
      await this.$router.push({ name: "LoginFam" });
    },
    async goOn() {
      await this.$vuetify.goTo(0);
      await this.$router.push({ name: "modules" });
    },
    async logoutExt() {
      await this.$vuetify.goTo(0);
      const payload = {
        email: this.email,
      };
      await AuthService.logout(payload).then(() => {
        console.log("logged out extern");
      });
    },
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
  computed: {
    ...mapGetters("auth", ["email"]),
  },
};
</script>

<style scoped></style>
