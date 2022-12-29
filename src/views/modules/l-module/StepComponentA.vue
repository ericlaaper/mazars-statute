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
    <AreaValidation
      v-if="visData.statement_6"
      label="Uitgangspunten"
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
        return this.$store.state.moduleL.moduleData.sl_a;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_a", value);
      },
    },
    sl_b: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_b;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_b", value);
      },
    },
    sl_c: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_c;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_c", value);
      },
    },
    sl_d: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_d;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_d", value);
      },
    },
    sl_e: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_e;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_e", value);
      },
    },
    data_a: {
      get() {
        return this.$store.state.moduleL.moduleData.data_a;
      },
      set(value) {
        this.$store.commit("moduleL/update_data_a", value);
      },
    },
    ...mapGetters("visL", ["visData"]),
  },
};
</script>

<style scoped></style>
