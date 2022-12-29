<template>
  <div class="ml-3 mr-3 pt-4">
    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <RadioGrade
      v-if="visData.statement_25"
      :stat="statText.statement25"
      v-model="sl_u"
      rules="required"
      :value="sl_u"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <RadioGrade
      v-if="visData.statement_26"
      :stat="statText.statement26"
      v-model="sl_v"
      rules="required"
      :value="sl_v"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement27"
      v-if="visData.statement_27"
    />
    <RadioGrade
      v-if="visData.statement_27"
      :stat="statText.statement27"
      v-model="sl_w"
      rules="required"
      :value="sl_w"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement28"
      v-if="visData.statement_28"
    />
    <RadioGrade
      v-if="visData.statement_28"
      :stat="statText.statement28"
      v-model="sl_x"
      rules="required"
      :value="sl_x"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement29"
      v-if="visData.statement_29"
    />
    <RadioGrade
      v-if="visData.statement_29"
      :stat="statText.statement29"
      v-model="sl_y"
      rules="required"
      :value="sl_y"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement30"
      v-if="visData.statement_30"
    />
    <AreaValidation
      v-if="visData.statement_30"
      label="Doelen"
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
    sl_u: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_u;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_u", value);
      },
    },
    sl_v: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_v;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_v", value);
      },
    },
    sl_w: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_w;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_w", value);
      },
    },
    sl_x: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_x;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_x", value);
      },
    },
    sl_y: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_y;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_y", value);
      },
    },
    data_e: {
      get() {
        return this.$store.state.moduleG.moduleData.data_e;
      },
      set(value) {
        this.$store.commit("moduleG/update_data_e", value);
      },
    },
    ...mapGetters("visG", ["visData"]),
  },
};
</script>

<style scoped></style>
