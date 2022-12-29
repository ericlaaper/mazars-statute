<template>
  <div class="ml-3 mr-3 pt-4">
    <StatementText
      :statText="statText.statement36"
      v-if="visData.statement_36"
    />
    <RadioGrade
      v-if="visData.statement_36"
      :stat="statText.statement36"
      v-model="sl_ze"
      rules="required"
      :value="sl_ze"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement37"
      v-if="visData.statement_37"
    />
    <RadioGrade
      v-if="visData.statement_37"
      :stat="statText.statement37"
      v-model="sl_zf"
      rules="required"
      :value="sl_zf"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement38"
      v-if="visData.statement_38"
    />
    <RadioGrade
      v-if="visData.statement_38"
      :stat="statText.statement38"
      v-model="sl_zg"
      rules="required"
      :value="sl_zg"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement39"
      v-if="visData.statement_39"
    />
    <RadioGrade
      v-if="visData.statement_39"
      :stat="statText.statement39"
      v-model="sl_zh"
      rules="required"
      :value="sl_zh"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement40"
      v-if="visData.statement_40"
    />
    <RadioGrade
      v-if="visData.statement_40"
      :stat="statText.statement40"
      v-model="sl_zi"
      rules="required"
      :value="sl_zi"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement41"
      v-if="visData.statement_41"
    />
    <AreaValidation
      v-if="visData.statement_41"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_f"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentG",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_ze: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_ze;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_ze", value);
      },
    },
    sl_zf: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zf;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zf", value);
      },
    },
    sl_zg: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zg;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zg", value);
      },
    },
    sl_zh: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zh;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zh", value);
      },
    },
    sl_zi: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zi;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zi", value);
      },
    },
    data_f: {
      get() {
        return this.$store.state.moduleG.moduleData.data_f;
      },
      set(value) {
        this.$store.commit("moduleG/update_data_f", value);
      },
    },
    ...mapGetters("visG", ["visData"]),
  },
};
</script>

<style scoped></style>
