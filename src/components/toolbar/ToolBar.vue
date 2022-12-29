<template>
  <v-app-bar app color="base_1">
    <v-img
      :src="require('@/assets/logo_wit.svg')"
      max-height="50"
      max-width="50"
      contain
    />
    <h2 class="primary--text ml-3">Familiestatuut</h2>

    <v-spacer></v-spacer>

    <v-btn icon @click="toggle_dark_mode">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
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
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },
};
</script>

<style scoped></style>
