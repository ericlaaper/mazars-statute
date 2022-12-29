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
    <AreaValidation
      v-if="visData.statement_8"
      label="Andere doelen"
      rules="max:150"
      v-model="data_a"
    />
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
        return this.$store.state.moduleB.moduleData.sl_a;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_b;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_c;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_d;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_d", value);
      },
    },
    sl_e: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_e;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_e", value);
      },
    },
    sl_f: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_f;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_f", value);
      },
    },
    sl_g: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_g;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_g", value);
      },
    },
    data_a: {
      get() {
        return this.$store.state.moduleB.moduleData.data_a;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_a", value);
      },
    },
    ...mapGetters("visB", ["visData"]),
  },
};
</script>

<style scoped></style>
