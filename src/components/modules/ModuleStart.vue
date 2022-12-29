<template>
  <div class="pt-3 pb-5 opa">
    <v-hover v-slot="{ hover }" open-delay="200">
      <v-card
        :color="hover ? 'base_1' : 'base_2'"
        class="pb-3"
        :elevation="hover ? 24 : 2"
      >
        <div class="text-h5 pt-3 mt-3 ml-3 primary--text">{{ header }}</div>
        <div class="body-1 mt-3 mb-3 ml-3 pb-3 mr-2">{{ text }}</div>
        <div class="text-center mr-5">
          <v-btn color="primary" @click="onClick" style="cursor: pointer"
            >START</v-btn
          >
        </div>
        <div class="body-2 mt-3 ml-10 primary--text">Voortgang</div>
        <div class="ml-10 mr-10 mt-5 mb-3">
          <v-progress-linear :value="percent"></v-progress-linear>
        </div>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "ModuleStart",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    finished: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  methods: {},
  computed: {
    percent() {
      return (this.finished / this.total) * 100;
    },
  },
};
</script>
<style scoped>
.opa :hover {
  transform: scale(1.02);
}
</style>
