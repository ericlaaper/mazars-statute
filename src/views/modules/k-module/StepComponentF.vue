<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement23"
      v-if="visData.statement_23"
    />
    <RadioGrade
      v-if="visData.statement_23"
      :stat="statText.statement23"
      v-model="sl_o"
      rules="required"
      :value="sl_o"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <RadioGrade
      v-if="visData.statement_24"
      :stat="statText.statement24"
      v-model="sl_p"
      rules="required"
      :value="sl_p"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <RadioGrade
      v-if="visData.statement_25"
      :stat="statText.statement25"
      v-model="sl_q"
      rules="required"
      :value="sl_q"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <RadioGrade
      v-if="visData.statement_26"
      :stat="statText.statement26"
      v-model="sl_r"
      rules="required"
      :value="sl_r"
    />
    <StatementText
      :statText="statText.statement27"
      v-if="visData.statement_27"
    />
    <RadioGrade
      v-if="visData.statement_27"
      :stat="statText.statement27"
      v-model="sl_s"
      rules="required"
      :value="sl_s"
    />
    <StatementText
      :statText="statText.statement28"
      v-if="visData.statement_28"
    />
    <RadioGrade
      v-if="visData.statement_28"
      :stat="statText.statement28"
      v-model="sl_t"
      rules="required"
      :value="sl_t"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement29"
      v-if="visData.statement_29"
    />
    <AreaValidation
      v-if="visData.statement_29"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_d"
    />
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
    sl_o: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_o;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_o", value);
      },
    },
    sl_p: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_p;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_p", value);
      },
    },
    sl_q: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_q;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_q", value);
      },
    },
    sl_r: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_r;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_r", value);
      },
    },
    sl_s: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_s;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_s", value);
      },
    },
    sl_t: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_t;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_t", value);
      },
    },
    data_d: {
      get() {
        return this.$store.state.moduleK.moduleData.data_d;
      },
      set(value) {
        this.$store.commit("moduleK/update_data_d", value);
      },
    },
    ...mapGetters("visK", ["visData"]),
  },
};
</script>

<style scoped></style>
