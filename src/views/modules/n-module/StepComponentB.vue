<template>
  <div class="ml-9 mr-9 pt-70">
    <StatementText :statText="statText.statement7" v-if="visData.statement_7" />
    <RadioGrade
      v-if="visData.statement_7"
      :stat="statText.statement7"
      v-model="sl_a"
      rules="required"
      :value="sl_a"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement8" v-if="visData.statement_8" />
    <RadioGrade
      v-if="visData.statement_8"
      :stat="statText.statement8"
      v-model="sl_b"
      rules="required"
      :value="sl_b"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement9" v-if="visData.statement_9" />
    <RadioGrade
      v-if="visData.statement_9"
      :stat="statText.statement9"
      v-model="sl_c"
      rules="required"
      :value="sl_c"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement10"
      v-if="visData.statement_10"
    />
    <RadioGrade
      v-if="visData.statement_10"
      :stat="statText.statement10"
      v-model="sl_d"
      rules="required"
      :value="sl_d"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement11"
      v-if="visData.statement_11"
    />
    <RadioGrade
      v-if="visData.statement_11"
      :stat="statText.statement11"
      v-model="sl_e"
      rules="required"
      :value="sl_e"
    />
    <v-divider></v-divider>

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement12"
      v-if="visData.statement_12"
    />
    <AreaValidation
      v-if="visData.statement_12"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_b"
    />
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
    sl_a: {
      get() {
        return this.$store.state.moduleN.moduleData.sl_a;
      },
      set(value) {
        this.$store.commit("moduleN/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.moduleN.moduleData.sl_b;
      },
      set(value) {
        this.$store.commit("moduleN/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.moduleN.moduleData.sl_c;
      },
      set(value) {
        this.$store.commit("moduleN/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.moduleN.moduleData.sl_d;
      },
      set(value) {
        this.$store.commit("moduleN/update_sl_d", value);
      },
    },
    sl_e: {
      get() {
        return this.$store.state.moduleN.moduleData.sl_e;
      },
      set(value) {
        this.$store.commit("moduleN/update_sl_e", value);
      },
    },
    data_b: {
      get() {
        return this.$store.state.moduleN.moduleData.data_b;
      },
      set(value) {
        this.$store.commit("moduleN/update_data_b", value);
      },
    },
    ...mapGetters("visN", ["visData"]),
  },
};
</script>

<style scoped></style>
