<template>
  <v-dialog v-model="innerValue" max-width="450px" v-on="$listeners">
    <v-card>
      <v-card-title class="primary--text">Stoppen</v-card-title>
      <v-card-text>
        <p class="body-2">
          Wilt u stoppen om later verder te gaan, kies STOP. Wilt u terug naar
          het overzicht van alle modules, kies MODULES. Om dit venster te
          sluiten, kies SLUIT.
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="goChange">Sluit</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="goStop()">Stop</v-btn>
        <v-btn color="primary" text @click="goModules()">Modules</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AuthService from "@/services/AuthService";
import { mapGetters } from "vuex";

export default {
  name: "stopElement",
  props: {
    value: {
      type: Boolean,
    },
  },
  data() {
    return {
      innerValue: "",
      formal: true,
    };
  },
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },

  methods: {
    goChange() {
      this.innerValue = false;
    },

    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    async goStop() {
      // eslint-disable-next-line no-undef
      await EventBus.$emit("logoutApp", true);
      await this.sleep(2000);
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

    goModules() {
      this.$router.push({ name: "modules" });
    },
  },
  computed: {
    ...mapGetters("auth", ["email"]),
  },
};
</script>

<style scoped></style>
