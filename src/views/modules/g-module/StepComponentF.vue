<template>
  <div class="ml-3 mr-3 pt-4">
    <StatementText
      :statText="statText.statement31"
      v-if="visData.statement_31"
    />
    <RadioGrade
      v-if="visData.statement_31"
      :stat="statText.statement31"
      v-model="sl_z"
      rules="required"
      :value="sl_z"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement32"
      v-if="visData.statement_32"
    />
    <RadioGrade
      v-if="visData.statement_32"
      :stat="statText.statement32"
      v-model="sl_za"
      rules="required"
      :value="sl_za"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement33"
      v-if="visData.statement_33"
    />
    <RadioGrade
      v-if="visData.statement_33"
      :stat="statText.statement33"
      v-model="sl_zb"
      rules="required"
      :value="sl_zb"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement34"
      v-if="visData.statement_34"
    />
    <RadioGrade
      v-if="visData.statement_34"
      :stat="statText.statement34"
      v-model="sl_zc"
      rules="required"
      :value="sl_zc"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement35"
      v-if="visData.statement_35"
    />
    <RadioGrade
      v-if="visData.statement_35"
      :stat="statText.statement35"
      v-model="sl_zd"
      rules="required"
      :value="sl_zd"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentF",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_z: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_z;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_z", value);
      },
    },
    sl_za: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_za;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_za", value);
      },
    },
    sl_zb: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zb;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zb", value);
      },
    },
    sl_zc: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zc;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zc", value);
      },
    },
    sl_zd: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zd;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zd", value);
      },
    },
    ...mapGetters("visG", ["visData"]),
  },
};
</script>

<style scoped></style>
