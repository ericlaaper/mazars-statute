<template>
  <v-snackbar
    :timeout="5000"
    auto-heigth
    multi-line
    v-model="successFull"
    color="info"
    absolute
    top
  >
    <v-layout align-center pr-4>
      <v-icon class="pr-3" dark large>mdi-logout</v-icon>
      <v-layout column>
        <div>
          <strong>STOP</strong>
        </div>
        <div>
          Uw wordt uitgelogd<br />
          Op elk moment kunt u weer verder gaan. <br />Gebruik hiervoor de aan u
          verstrekte gegevens.
        </div>
      </v-layout>
    </v-layout>
  </v-snackbar>
</template>

<script>
export default {
  name: "logoutModalElement",
  methods: {},

  data() {
    return {
      formal: true,
      successFull: false,
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    EventBus.$on("logoutApp", (data) => {
      this.successFull = data;
    });
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>

<style scoped></style>
