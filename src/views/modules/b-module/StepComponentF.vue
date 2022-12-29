<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement37"
      v-if="visData.statement_37"
    />
    <RadioGrade
      v-if="visData.statement_37"
      :stat="statText.statement37"
      v-model="sl_s"
      rules="required"
      :value="sl_s"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement38"
      v-if="visData.statement_38"
    />
    <RadioGrade
      v-if="visData.statement_38"
      :stat="statText.statement38"
      v-model="sl_t"
      rules="required"
      :value="sl_t"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement39"
      v-if="visData.statement_39"
    />
    <RadioGrade
      v-if="visData.statement_39"
      :stat="statText.statement39"
      v-model="sl_u"
      rules="required"
      :value="sl_u"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement40"
      v-if="visData.statement_40"
    />
    <RadioGrade
      v-if="visData.statement_40"
      :stat="statText.statement40"
      v-model="sl_v"
      rules="required"
      :value="sl_v"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement41"
      v-if="visData.statement_41"
    />
    <RadioGrade
      v-if="visData.statement_41"
      :stat="statText.statement41"
      v-model="sl_w"
      rules="required"
      :value="sl_w"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement42"
      v-if="visData.statement_42"
    />
    <RadioGrade
      v-if="visData.statement_42"
      :stat="statText.statement42"
      v-model="sl_x"
      rules="required"
      :value="sl_x"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement43"
      v-if="visData.statement_43"
    />
    <RadioGrade
      v-if="visData.statement_43"
      :stat="statText.statement43"
      v-model="sl_y"
      rules="required"
      :value="sl_y"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement44"
      v-if="visData.statement_44"
    />
    <RadioGrade
      v-if="visData.statement_44"
      :stat="statText.statement44"
      v-model="sl_z"
      rules="required"
      :value="sl_z"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement45"
      v-if="visData.statement_45"
    />
    <AreaValidation
      v-if="visData.statement_45"
      label="Andere uitgangspunten"
      rules="max:150"
      v-model="data_j"
    />

    <v-divider></v-divider>
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
    sl_s: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_s;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_s", value);
      },
    },
    sl_t: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_t;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_t", value);
      },
    },
    sl_u: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_u;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_u", value);
      },
    },
    sl_v: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_v;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_v", value);
      },
    },
    sl_w: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_w;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_w", value);
      },
    },
    sl_x: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_x;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_x", value);
      },
    },
    sl_y: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_y;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_y", value);
      },
    },
    sl_z: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_z;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_z", value);
      },
    },
    data_j: {
      get() {
        return this.$store.state.moduleB.moduleData.data_j;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_j", value);
      },
    },
    ...mapGetters("visB", ["visData"]),
  },
};
</script>

<style scoped></style>
