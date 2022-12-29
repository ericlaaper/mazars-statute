<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.v-application.theme--light {
  background-color: #f5f5f5 !important;
}
.v-application.theme--dark {
  background-color: #0f162a !important;
}
.full-page {
  height: 400vh;
}
</style>
