<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement28"
      v-if="visData.statement_28"
    />
    <RadioGrade
      v-if="visData.statement_28"
      :stat="statText.statement28"
      v-model="sl_x"
      rules="required"
      :value="sl_x"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement29"
      v-if="visData.statement_29"
    />
    <RadioGrade
      v-if="visData.statement_29"
      :stat="statText.statement29"
      v-model="sl_y"
      rules="required"
      :value="sl_y"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement30"
      v-if="visData.statement_30"
    />
    <RadioGrade
      v-if="visData.statement_30"
      :stat="statText.statement30"
      v-model="sl_z"
      rules="required"
      :value="sl_z"
    />
    <v-divider />

    <StatementText
      :statText="statText.statement31"
      v-if="visData.statement_31"
    />
    <RadioGrade
      v-if="visData.statement_31"
      :stat="statText.statement31"
      v-model="sl_za"
      rules="required"
      :value="sl_za"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement32"
      v-if="visData.statement_32"
    />
    <RadioGrade
      v-if="visData.statement_32"
      :stat="statText.statement32"
      v-model="sl_zb"
      rules="required"
      :value="sl_zb"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement33"
      v-if="visData.statement_33"
    />
    <AreaValidation
      v-if="visData.statement_33"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_e"
    />
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentE",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_x: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_x;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_x", value);
      },
    },
    sl_y: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_y;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_y", value);
      },
    },
    sl_z: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_z;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_z", value);
      },
    },
    sl_za: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_za;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_za", value);
      },
    },
    sl_zb: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zb;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zb", value);
      },
    },
    data_e: {
      get() {
        return this.$store.state.moduleM.moduleData.data_e;
      },
      set(value) {
        this.$store.commit("moduleM/update_data_e", value);
      },
    },
    ...mapGetters("visM", ["visData"]),
  },
};
</script>

<style scoped></style>
