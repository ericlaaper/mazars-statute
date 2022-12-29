<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <RadioGrade
      v-if="visData.statement_24"
      :stat="statText.statement24"
      v-model="sl_x"
      rules="required"
      :value="sl_x"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <RadioGrade
      v-if="visData.statement_25"
      :stat="statText.statement25"
      v-model="sl_y"
      rules="required"
      :value="sl_y"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <RadioGrade
      v-if="visData.statement_26"
      :stat="statText.statement26"
      v-model="sl_z"
      rules="required"
      :value="sl_z"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement27"
      v-if="visData.statement_27"
    />
    <RadioGrade
      v-if="visData.statement_27"
      :stat="statText.statement27"
      v-model="sl_za"
      rules="required"
      :value="sl_za"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement28"
      v-if="visData.statement_28"
    />
    <RadioGrade
      v-if="visData.statement_28"
      :stat="statText.statement28"
      v-model="sl_zb"
      rules="required"
      :value="sl_zb"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement29"
      v-if="visData.statement_29"
    />
    <RadioGrade
      v-if="visData.statement_29"
      :stat="statText.statement29"
      v-model="sl_zc"
      rules="required"
      :value="sl_zc"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentD",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_x: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_x;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_x", value);
      },
    },
    sl_y: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_y;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_y", value);
      },
    },
    sl_z: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_z;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_z", value);
      },
    },
    sl_za: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_za;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_za", value);
      },
    },
    sl_zb: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_zb;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_zb", value);
      },
    },
    sl_zc: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_zc;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_zc", value);
      },
    },
    ...mapGetters("visF", ["visData"]),
  },
};
</script>

<style scoped></style>
