<template>
  <v-card color="base_2" class="pb-3">
    <div class="text-h5 pt-3 mt-3 ml-3 primary--text opa">Naam sectie</div>
    <div class="body-1 mt-3 mb-3 ml-3 pb-3">tekst modules</div>
    <div class="body-2 mt-3 ml-10">
      <v-radio-group row v-model="test">
        <v-radio
          label="3.5t"
          color="primary"
          value="ke1"
          off-icon=""
          on-icon=""
        >
          <template v-slot:label>
            <v-card
              width="50"
              height="50"
              color="white"
              class="d-flex align-center flex-column rounded-lg"
            >
              <span>3.5t</span>
            </v-card>
          </template>
        </v-radio>
        <v-radio label="5t" color="primary" value="ke2" off-icon="" on-icon="">
          <template v-slot:label>
            <v-card
              width="50"
              height="50"
              color="white"
              class="d-flex align-center flex-column rounded-lg"
            >
              <span>3.5t</span>
            </v-card>
          </template>
        </v-radio>
      </v-radio-group>
    </div>
    <slot></slot>
  </v-card>
</template>
<script>
export default {
  name: "sectionElement",
  data() {
    return {
      test: "",
    };
  },
};
</script>
<style>
.trucksicons {
  visibility: hidden;
}
</style>
