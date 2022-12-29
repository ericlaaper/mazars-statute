<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement7" v-if="visData.statement_7" />
    <RadioGrade
      v-if="visData.statement_7"
      :stat="statText.statement7"
      v-model="sl_e"
      rules="required"
      :value="sl_e"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement8" v-if="visData.statement_8" />
    <RadioGrade
      v-if="visData.statement_8"
      :stat="statText.statement8"
      v-model="sl_f"
      rules="required"
      :value="sl_f"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement9" v-if="visData.statement_9" />
    <RadioGrade
      v-if="visData.statement_9"
      :stat="statText.statement9"
      v-model="sl_g"
      rules="required"
      :value="sl_g"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement10"
      v-if="visData.statement_10"
    />
    <RadioGrade
      v-if="visData.statement_10"
      :stat="statText.statement10"
      v-model="sl_h"
      rules="required"
      :value="sl_h"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement11"
      v-if="visData.statement_11"
    />
    <AreaValidation
      v-if="visData.statement_11"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_b"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentB",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_e: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_e;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_e", value);
      },
    },
    sl_f: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_f;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_f", value);
      },
    },
    sl_g: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_g;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_g", value);
      },
    },
    sl_h: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_h;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_h", value);
      },
    },
    data_b: {
      get() {
        return this.$store.state.moduleD.moduleData.data_b;
      },
      set(value) {
        this.$store.commit("moduleD/update_data_b", value);
      },
    },
    ...mapGetters("visD", ["visData"]),
  },
};
</script>

<style scoped></style>
