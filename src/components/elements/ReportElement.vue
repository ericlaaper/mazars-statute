<template>
  <v-snackbar
    :timeout="5000"
    auto-heigth
    multi-line
    v-model="successFull"
    color="primary"
    absolute
    top
    class="mt-15"
  >
    <v-layout align-center pr-4>
      <v-icon class="pr-3" dark large>mdi-printer</v-icon>
      <v-layout column>
        <div>
          <strong>SUCCES</strong>
        </div>
        <div>
          Uw rapportage is onderweg<br />Let op: deze e-mail kan in uw
          ongewenste e-mailbox terecht komen.
        </div>
      </v-layout>
    </v-layout>
  </v-snackbar>
</template>

<script>
export default {
  name: "ReportElement",
  methods: {},

  data() {
    return {
      successFull: false,
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    EventBus.$on("report", (data) => {
      this.successFull = data;
    });
  },
};
</script>

<style scoped></style>
