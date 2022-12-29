<template>
  <div class="pt-2">
    <br />
    <vimeo-player
      :video-id="vimeo.module_c"
      class="embed-container"
      :options="{ responsive: true }"
    ></vimeo-player>
  </div>
</template>

<script>
export default {
  name: "StepComponentStart",
  components: {},
  props: ["vimeo"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
