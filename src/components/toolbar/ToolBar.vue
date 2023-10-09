<template>
  <v-app-bar app color="whitemaz elevation-0">
    <v-row class="mb-10 mt-10">
      <v-col cols="3" class="ml-10">
        <v-img :src="require(`@/assets/logo-tool2.png`)" />
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <!--    <v-btn icon @click="toggle_dark_mode">-->
    <!--      <v-icon>mdi-theme-light-dark</v-icon>-->
    <!--    </v-btn>-->
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
