<template>
  <div class="ml-3 mr-3 pt-4">
    <StatementText
      :statText="statText.statement42"
      v-if="visData.statement_42"
    />
    <RadioGrade
      v-if="visData.statement_42"
      :stat="statText.statement42"
      v-model="sl_zj"
      rules="required"
      :value="sl_zj"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement43"
      v-if="visData.statement_43"
    />
    <RadioGrade
      v-if="visData.statement_43"
      :stat="statText.statement43"
      v-model="sl_zk"
      rules="required"
      :value="sl_zk"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement44"
      v-if="visData.statement_44"
    />
    <RadioGrade
      v-if="visData.statement_44"
      :stat="statText.statement44"
      v-model="sl_zl"
      rules="required"
      :value="sl_zl"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement45"
      v-if="visData.statement_45"
    />
    <RadioGrade
      v-if="visData.statement_45"
      :stat="statText.statement45"
      v-model="sl_zm"
      rules="required"
      :value="sl_zm"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement46"
      v-if="visData.statement_46"
    />
    <RadioGrade
      v-if="visData.statement_46"
      :stat="statText.statement46"
      v-model="sl_zn"
      rules="required"
      :value="sl_zn"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement47"
      v-if="visData.statement_47"
    />
    <AreaValidation
      v-if="visData.statement_47"
      label="Doelen"
      rules="max:150"
      v-model="data_g"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentH",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_zj: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zj;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zj", value);
      },
    },
    sl_zk: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zk;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zk", value);
      },
    },
    sl_zl: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zl;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zl", value);
      },
    },
    sl_zm: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zm;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zm", value);
      },
    },
    sl_zn: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zn;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zn", value);
      },
    },
    data_g: {
      get() {
        return this.$store.state.moduleG.moduleData.data_g;
      },
      set(value) {
        this.$store.commit("moduleG/update_data_g", value);
      },
    },
    ...mapGetters("visG", ["visData"]),
  },
};
</script>

<style scoped></style>
