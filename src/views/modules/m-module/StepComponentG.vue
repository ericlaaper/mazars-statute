<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement41"
      v-if="visData.statement_41"
    />
    <RadioGrade
      v-if="visData.statement_41"
      :stat="statText.statement41"
      v-model="sl_zi"
      rules="required"
      :value="sl_zi"
    />
    <v-divider />
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
    <v-divider />
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
    <v-divider />

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
    <v-divider />
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
    <v-divider />
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
    <v-divider />
    <StatementText
      :statText="statText.statement47"
      v-if="visData.statement_47"
    />
    <RadioGrade
      v-if="visData.statement_47"
      :stat="statText.statement47"
      v-model="sl_zo"
      rules="required"
      :value="sl_zo"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement48"
      v-if="visData.statement_48"
    />
    <AreaValidation
      v-if="visData.statement_48"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_g"
    />
    <v-divider />
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
    sl_zi: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zi;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zi", value);
      },
    },
    sl_zj: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zj;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zj", value);
      },
    },
    sl_zk: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zk;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zk", value);
      },
    },
    sl_zl: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zl;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zl", value);
      },
    },
    sl_zm: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zm;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zm", value);
      },
    },
    sl_zn: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zn;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zn", value);
      },
    },
    sl_zo: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zo;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zo", value);
      },
    },
    data_g: {
      get() {
        return this.$store.state.moduleM.moduleData.data_g;
      },
      set(value) {
        this.$store.commit("moduleM/update_data_g", value);
      },
    },
    ...mapGetters("visM", ["visData"]),
  },
};
</script>

<style scoped></style>
