<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement11"
      v-if="visData.statement_11"
    />
    <RadioGrade
      v-if="visData.statement_11"
      :stat="statText.statement11"
      v-model="sl_k"
      rules="required"
      :value="sl_k"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement12"
      v-if="visData.statement_12"
    />
    <RadioGrade
      v-if="visData.statement_12"
      :stat="statText.statement12"
      v-model="sl_l"
      rules="required"
      :value="sl_l"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement13"
      v-if="visData.statement_13"
    />
    <RadioGrade
      v-if="visData.statement_13"
      :stat="statText.statement13"
      v-model="sl_m"
      rules="required"
      :value="sl_m"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement14"
      v-if="visData.statement_14"
    />
    <RadioGrade
      v-if="visData.statement_14"
      :stat="statText.statement14"
      v-model="sl_n"
      rules="required"
      :value="sl_n"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement15"
      v-if="visData.statement_15"
    />
    <RadioGrade
      v-if="visData.statement_15"
      :stat="statText.statement15"
      v-model="sl_o"
      rules="required"
      :value="sl_o"
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
    sl_k: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_k;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_k", value);
      },
    },
    sl_l: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_l;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_l", value);
      },
    },
    sl_m: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_m;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_m", value);
      },
    },
    sl_n: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_n;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_n", value);
      },
    },
    sl_o: {
      get() {
        return this.$store.state.moduleF.moduleData.sl_o;
      },
      set(value) {
        this.$store.commit("moduleF/update_sl_o", value);
      },
    },
    ...mapGetters("visF", ["visData"]),
  },
};
</script>

<style scoped></style>
