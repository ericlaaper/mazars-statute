<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <RadioGrade
      v-if="visData.statement_21"
      :stat="statText.statement21"
      v-model="sl_p"
      rules="required"
      :value="sl_p"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement22"
      v-if="visData.statement_22"
    />
    <RadioGrade
      v-if="visData.statement_22"
      :stat="statText.statement22"
      v-model="sl_q"
      rules="required"
      :value="sl_q"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement23"
      v-if="visData.statement_23"
    />
    <RadioGrade
      v-if="visData.statement_23"
      :stat="statText.statement23"
      v-model="sl_r"
      rules="required"
      :value="sl_r"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <RadioGrade
      v-if="visData.statement_24"
      :stat="statText.statement24"
      v-model="sl_s"
      rules="required"
      :value="sl_s"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <AreaValidation
      v-if="visData.statement_25"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_e"
    />
    <v-divider></v-divider>
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
    sl_p: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_p;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_p", value);
      },
    },
    sl_q: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_q;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_q", value);
      },
    },
    sl_r: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_r;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_r", value);
      },
    },
    sl_s: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_s;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_s", value);
      },
    },
    data_e: {
      get() {
        return this.$store.state.moduleD.moduleData.data_e;
      },
      set(value) {
        this.$store.commit("moduleD/update_data_e", value);
      },
    },
    ...mapGetters("visD", ["visData"]),
  },
};
</script>

<style scoped></style>
