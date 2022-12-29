<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement1" v-if="visData.statement_1" />
    <RadioGrade
      v-if="visData.statement_1"
      :stat="statText.statement1"
      v-model="sl_a"
      rules="required"
      :value="sl_a"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement2" v-if="visData.statement_2" />
    <RadioGrade
      v-if="visData.statement_2"
      :stat="statText.statement2"
      v-model="sl_b"
      rules="required"
      :value="sl_b"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement3" v-if="visData.statement_3" />
    <RadioGrade
      v-if="visData.statement_3"
      :stat="statText.statement3"
      v-model="sl_c"
      rules="required"
      :value="sl_c"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement4" v-if="visData.statement_4" />
    <RadioGrade
      v-if="visData.statement_4"
      :stat="statText.statement4"
      v-model="sl_d"
      rules="required"
      :value="sl_d"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement5" v-if="visData.statement_5" />
    <RadioGrade
      v-if="visData.statement_5"
      :stat="statText.statement5"
      v-model="sl_e"
      rules="required"
      :value="sl_e"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement6" v-if="visData.statement_6" />
    <RadioGrade
      v-if="visData.statement_6"
      :stat="statText.statement6"
      v-model="sl_f"
      rules="required"
      :value="sl_f"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement7" v-if="visData.statement_7" />
    <RadioGrade
      v-if="visData.statement_7"
      :stat="statText.statement7"
      v-model="sl_g"
      rules="required"
      :value="sl_g"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement8" v-if="visData.statement_8" />
    <RadioGrade
      v-if="visData.statement_8"
      :stat="statText.statement8"
      v-model="sl_h"
      rules="required"
      :value="sl_h"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement9" v-if="visData.statement_9" />
    <RadioGrade
      v-if="visData.statement_9"
      :stat="statText.statement9"
      v-model="sl_i"
      rules="required"
      :value="sl_i"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement10"
      v-if="visData.statement_10"
    />
    <RadioGrade
      v-if="visData.statement_10"
      :stat="statText.statement10"
      v-model="sl_j"
      rules="required"
      :value="sl_j"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentA",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_a: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_a;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_b;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_c;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_d;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_d", value);
      },
    },
    sl_e: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_e;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_e", value);
      },
    },
    sl_f: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_f;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_f", value);
      },
    },
    sl_g: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_g;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_g", value);
      },
    },
    sl_h: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_h;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_h", value);
      },
    },
    sl_i: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_i;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_i", value);
      },
    },
    sl_j: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_j;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_j", value);
      },
    },
    ...mapGetters("visF", ["visData"]),
  },
};
</script>

<style scoped></style>
