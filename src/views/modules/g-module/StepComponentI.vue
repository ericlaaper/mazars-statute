<template>
  <div class="ml-3 mr-3 pt-4">
    <StatementText
      :statText="statText.statement48"
      v-if="visData.statement_48"
    />
    <RadioGrade
      v-if="visData.statement_48"
      :stat="statText.statement48"
      v-model="sl_zo"
      rules="required"
      :value="sl_zo"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement49"
      v-if="visData.statement_49"
    />
    <RadioGrade
      v-if="visData.statement_49"
      :stat="statText.statement49"
      v-model="sl_zp"
      rules="required"
      :value="sl_zp"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement50"
      v-if="visData.statement_50"
    />
    <RadioGrade
      v-if="visData.statement_50"
      :stat="statText.statement50"
      v-model="sl_zq"
      rules="required"
      :value="sl_zq"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement51"
      v-if="visData.statement_51"
    />
    <RadioGrade
      v-if="visData.statement_51"
      :stat="statText.statement51"
      v-model="sl_zr"
      rules="required"
      :value="sl_zr"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement52"
      v-if="visData.statement_52"
    />
    <RadioGrade
      v-if="visData.statement_52"
      :stat="statText.statement52"
      v-model="sl_zs"
      rules="required"
      :value="sl_zs"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement53"
      v-if="visData.statement_53"
    />
    <AreaValidation
      v-if="visData.statement_53"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_h"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentI",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_zo: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zo;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zo", value);
      },
    },
    sl_zp: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zp;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zp", value);
      },
    },
    sl_zq: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zq;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zq", value);
      },
    },
    sl_zr: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zr;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zr", value);
      },
    },
    sl_zs: {
      get() {
        return this.$store.state.moduleG.moduleData.sl_zs;
      },
      set(value) {
        this.$store.commit("moduleG/update_sl_zs", value);
      },
    },
    data_h: {
      get() {
        return this.$store.state.moduleG.moduleData.data_h;
      },
      set(value) {
        this.$store.commit("moduleG/update_data_h", value);
      },
    },
    ...mapGetters("visG", ["visData"]),
  },
};
</script>

<style scoped></style>
