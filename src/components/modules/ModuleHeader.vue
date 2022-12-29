<template>
  <v-card rounded color="base_1" class="pb-3" elevation="6">
    <div class="text-h5 pt-3 mt-3 ml-3 primary--text font-weight-bold">
      {{ text.header }}
    </div>
    <div v-if="text.text_a" class="body-1 mt-3 ml-3 mr-2">
      {{ text.text_a }}
    </div>
    <div v-if="text.text_b" class="body-1 mt-1 ml-3 mr-2">
      {{ text.text_b }}
    </div>
    <div v-if="text.text_c" class="body-1 mt-1 ml-3 mr-2">
      {{ text.text_c }}
    </div>
    <div v-if="text.text_d" class="body-1 mt-1 ml-3 mr-2">
      {{ text.text_d }}
    </div>
    <div v-if="text.text_e" class="body-1 mt-1 ml-3 mr-2">
      {{ text.text_e }}
    </div>
    <div v-if="text.text_f" class="body-1 mt-1 ml-3 mr-2">
      {{ text.text_f }}
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ModuleHeader",
  components: {},
  props: {
    text: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
