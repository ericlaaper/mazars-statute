<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement30"
      v-if="visData.statement_30"
    />
    <RadioGrade
      v-if="visData.statement_30"
      :stat="statText.statement30"
      v-model="sl_u"
      rules="required"
      :value="sl_u"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement31"
      v-if="visData.statement_31"
    />
    <RadioGrade
      v-if="visData.statement_31"
      :stat="statText.statement31"
      v-model="sl_v"
      rules="required"
      :value="sl_v"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement32"
      v-if="visData.statement_32"
    />
    <RadioGrade
      v-if="visData.statement_32"
      :stat="statText.statement32"
      v-model="sl_w"
      rules="required"
      :value="sl_w"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement33"
      v-if="visData.statement_33"
    />
    <RadioGrade
      v-if="visData.statement_33"
      :stat="statText.statement33"
      v-model="sl_x"
      rules="required"
      :value="sl_x"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement34"
      v-if="visData.statement_34"
    />
    <RadioGrade
      v-if="visData.statement_34"
      :stat="statText.statement34"
      v-model="sl_y"
      rules="required"
      :value="sl_y"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement35"
      v-if="visData.statement_35"
    />
    <AreaValidation
      v-if="visData.statement_35"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_e"
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
    sl_u: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_u;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_u", value);
      },
    },
    sl_v: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_v;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_v", value);
      },
    },
    sl_w: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_w;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_w", value);
      },
    },
    sl_x: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_x;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_x", value);
      },
    },
    sl_y: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_y;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_y", value);
      },
    },
    data_e: {
      get() {
        return this.$store.state.moduleK.moduleData.data_e;
      },
      set(value) {
        this.$store.commit("moduleK/update_data_e", value);
      },
    },
    ...mapGetters("visK", ["visData"]),
  },
};
</script>

<style scoped></style>
